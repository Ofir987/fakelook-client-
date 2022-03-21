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
  // Cesium = Cesium;
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

  submitPost() {
    if (!this.addPostForm.valid)
      return;

    const post: PostI = this.addPostForm.value;
    post.date = new Date();
    post.x_Position = 1;
    post.y_Position = 1;
    post.z_Position = 1;
    // post.id=1;

    console.log(new Date());

    // var userTagged = post.description.match(/@\S+/g);
    // var tags = post.description.match(/#\S+/g);

    // console.log(userTagged);

    // if (userTagged) {
    //   post.usersTaggedInPost = [];
    //   for (let i = 0; i < userTagged?.length; i++) {
    //    let usersTagged = new UserTaggedPostI(userTagged[i],post.id); 
    //     post.usersTaggedInPost.push(usersTagged);
    //   }
    // }

    // post.usersTaggedInPost = userTagged?.map((userTagged)=> new UserTaggedPostI(userTagged,post.id))


    // if (tags) {
    //   for (let i = 0; i < tags?.length; i++) {
    //     post.tags![i].content = tags[i];
    //     post.tags![i].postId = post.id;
    //   }
    // }

    // console.log(userTagged);

    //TODO 
    // navigator.geolocation.getCurrentPosition((data) => {
    //   const { latitude, longitude } = data.coords;
    //   const position = Cesium.Cartesian3.fromDegrees(longitude, latitude);
    //   post.x_Position = position.location.x;
    //   post.y_Position = position.location.y;
    //   post.z_Position = position.location.z;

    //   console.log(position.location.x);
    //   console.log(position.location.y);
    //   console.log(position.location.z);

    // })

    this.file = undefined;

    console.log(post);
    //this.postService.addPost(post);

    // this.postService.addPost(post);

    this._bottomSheetRef.dismiss();
  }
  ngOnInit(): void {
  }

}
