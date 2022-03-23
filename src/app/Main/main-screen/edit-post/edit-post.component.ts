import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPost } from 'src/app/Models/post.model';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPost, private postService:PostService) { }

  ngOnInit(): void {
  }

  editPostForm = new FormGroup({
    description: new FormControl('', [
      Validators.required,
    ]),
    imageSorce: new FormControl('', [
      // Validators.required,
    ]),
  });

  editPost(){
    if(!this.editPostForm.valid)
      return;

    let postToEdit =  new IPost(this.data.id,this.editPostForm.value.description,this.data.imageSorce,
      this.data.x_Position,this.data.y_Position,this.data.z_Position,new Date(),this.data.userId,this.data.user);
      
      this.postService.updatePost(postToEdit);
      this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
