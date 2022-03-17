import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostI } from '../../../Models/post.model';
import { PostService } from '../../../Services/post.service';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {
  // Cesium = Cesium;

  constructor(public postService:PostService) { }

  addPostForm = new FormGroup({
    description: new FormControl('', [
      Validators.required,
    ]),
    imgSource: new FormControl('', [
      Validators.required,
    ]),
  });

  submitPost(){
    if(!this.addPostForm.valid)
      return;

    const post: PostI = this.addPostForm.value;
    post.date = new Date();
    post.x_Position = 1;
    post.y_Position = 1; 
    post.z_Position = 1; 
    // navigator.geolocation.getCurrentPosition((data)=>{
    //   const { latitude, longitude } = data.coords;
    //   const position = Cesium.Cartesian3.fromDegrees(longitude, latitude);
    // })
    console.log(post);
    this.postService.addPost(post);
  }
  ngOnInit(): void {
  }

}
