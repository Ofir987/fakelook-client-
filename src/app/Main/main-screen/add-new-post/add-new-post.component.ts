import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostI } from '../../../Models/post.model';
import { PostService } from '../../../Services/post.service';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {
  // Cesium = Cesium;
  file: any;

  constructor(public postService:PostService, private _bottomSheetRef: MatBottomSheetRef<AddNewPostComponent>) { }

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

  submitPost(){
    if(!this.addPostForm.valid)
      return;

    const post: PostI = this.addPostForm.value;
    post.date = new Date();
    post.x_Position = 1;
    post.y_Position = 1; 
    post.z_Position = 1; 
    // post.id=1;

    console.log(new Date());

    //TODO 
    // navigator.geolocation.getCurrentPosition((data)=>{
    //   const { latitude, longitude } = data.coords;
    //   const position = Cesium.Cartesian3.fromDegrees(longitude, latitude);
    //   post.x_Position = position.location.x;
    //   console.log(position.location.x);
    //   console.log(position.location.x);
    //   console.log(position.location.x);

    // })

    this.file = undefined;

    console.log(post);
    //this.postService.addPost(post);

    this._bottomSheetRef.dismiss({
      data: post
    });
  }
  ngOnInit(): void {
  }

}
