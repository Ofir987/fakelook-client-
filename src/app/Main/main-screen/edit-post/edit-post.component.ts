import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  editPostForm = new FormGroup({
    description: new FormControl('', [
      Validators.required,
    ]),
    imgSource: new FormControl('', [
      Validators.required,
    ]),
  });

  editPost(){
    if(!this.editPostForm.valid)
      return;

   
   
  }

}
