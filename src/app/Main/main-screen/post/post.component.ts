import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
import { IComment } from 'src/app/Models/comment.model';
import { ILike } from 'src/app/Models/like.model';
import { IPost } from 'src/app/Models/post.model';
import { LikeService } from 'src/app/Services/like.service';
import { EditPostComponent } from '../edit-post/edit-post.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 userLike = false;
 showComments$ = new BehaviorSubject<boolean>(false);
 currentUserId?:any;

 numberOfLikes = 0; 

 comments?:IComment[] = [];

 imgSrc!:string;

 @Input() post!:IPost;

 @Output() showCommentPressed = new EventEmitter<boolean>();

 @Output() postToBeDeletedEvent = new EventEmitter<number>();

 @Output() likeEvent = new EventEmitter<ILike>();

 @Output() commentInPostEvent = new EventEmitter<IComment>();

 firstTimeLiked = false;

 currentUserName?: string;

 @ViewChild(FormGroupDirective)
 formGroupDirective!: FormGroupDirective;

  constructor(public likeService: LikeService,public dialog: MatDialog) { 
    this.currentUserId = this.getCurrentUserId();
    //JSON.parse(this.currentUserId?this.currentUserId:'');
     console.log(this.currentUserId);
     this.currentUserName = localStorage.getItem("userName") || '';
  
  }
  
  addCommentForm = new FormGroup({
    content: new FormControl('', [
      Validators.required,
    ])
  });

  ngOnInit(): void {
    console.log("init post");
    // console.log(this.post.likes!.length);
    this.userLike = this.post.likes?.some((like)=> like.userId == this.currentUserId) || false;
    this.numberOfLikes = this.post.likes?.length || 0;
    this.comments = this.post.comments;
    this.imgSrc = "";
  }

  openComments(){
    this.showComments$.next(!this.showComments$.value);
    this.showCommentPressed.emit(this.showComments$.value);
  }

  deletePost(postIdToBeDeleted:any){
    // console.log(postIdToBeDeleted);
    this.postToBeDeletedEvent.emit(postIdToBeDeleted);
  }

  editPost(postToEdit:IPost){
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: 'auto',
      height: 'auto',
      data: postToEdit,
    });
  }

  addLike(postId:any){
    console.log("addLike post");
    if(!this.userLike)
      this.numberOfLikes++;
    else this.numberOfLikes--;
    this.userLike = !this.userLike;
    let like = new ILike(!this.userLike, this.currentUserId,postId);
    this.likeEvent.emit(like);
  }

  comment(postId: number){
    if(!this.addCommentForm.valid )
      return;
    let comment = new IComment(this.addCommentForm.value.content ,this.currentUserId,'',postId)
    this.commentInPostEvent.emit(comment);
    this.comments?.push(comment);
    this.formGroupDirective.resetForm();
    this.addCommentForm.reset();
  }



  getCurrentUserId(){
    return localStorage.getItem("id");
  }

}
