import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostI } from '../../../Models/post.model';
import { PostService } from '../../../Services/post.service';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { TagI } from 'src/app/Models/tag.model';
import { UserTaggedPostI } from 'src/app/Models/userTaggedPost.model';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {
  Cesium = Cesium;
  file: any;

  constructor(public postService: PostService, private _bottomSheetRef: MatBottomSheetRef<AddNewPostComponent>) { }

  addPostForm = new FormGroup({
    description: new FormControl('', [
      Validators.required,
    ]),
    imageSorce: new FormControl('', [
      Validators.required,
    ]),
  });

  changeFile(event: any): void {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  async submitPost() {
    if (!this.addPostForm.valid)
      return;

    const post: PostI = this.addPostForm.value;
    
    post.date = new Date();
  
    console.log(new Date());
    post.imageSorce = await this.readImageFile(this.file);
    console.log(post.imageSorce);
    
    navigator.geolocation.getCurrentPosition((data) => {
      const { latitude, longitude } = data.coords;
      const position = Cesium.Cartesian3.fromDegrees(longitude, latitude);
 
      post.x_Position = position.x;
      post.y_Position = position.y;
      post.z_Position = position.z;
      // console.log(position.location.z);
      this.postService.addPost(post);
    })


    this.file = undefined;

    console.log(post);

    this._bottomSheetRef.dismiss();
  }
  ngOnInit(): void {
  }
  readImageFile(file:any):Promise<string>{
    const fileReader = new FileReader();
    return new Promise(res=>{
    fileReader.onload = (data:any) =>{
      res(fileReader.result as string)
    };
    fileReader.readAsDataURL(file);
      })
  }

}
