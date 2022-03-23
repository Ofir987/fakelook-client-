import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommentI } from 'src/app/Models/comment.model';
import { LikeI } from 'src/app/Models/like.model';
import { PostI } from 'src/app/Models/post.model';
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

 comments?:CommentI[] = [];

 @Input() post!:PostI;

 @Output() showCommentPressed = new EventEmitter<boolean>();

 @Output() postToBeDeletedEvent = new EventEmitter<number>();

 @Output() likeEvent = new EventEmitter<LikeI>();

 @Output() commentInPostEvent = new EventEmitter<CommentI>();


  constructor(public likeService: LikeService,public dialog: MatDialog) { 
    this.currentUserId = this.getCurrentUserId();
    JSON.parse(this.currentUserId?this.currentUserId:'');
    // console.log(this.currentUserId);
  }
  
  addCommentForm = new FormGroup({
    content: new FormControl('', [
      Validators.required,
    ])
  });

  ngOnInit(): void {
    // console.log(this.post.likes!.length);
    this.userLike = this.post.likes?.some((like)=> like.userId == this.currentUserId) || false;
    this.numberOfLikes = this.post.likes?.length || 0;
    this.comments = this.post.comments;
  }

  openComments(){
    this.showComments$.next(!this.showComments$.value);
    this.showCommentPressed.emit(this.showComments$.value);
  }

  deletePost(postIdToBeDeleted:any){
    // console.log(postIdToBeDeleted);
    this.postToBeDeletedEvent.emit(postIdToBeDeleted);
  }

  editPost(postToEdit:PostI){
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: 'auto',
      height: 'auto',
      data: postToEdit,
    });
  }

  addLike(postId:any){
    if(!this.userLike)
      this.numberOfLikes++;
    else this.numberOfLikes--;
    this.userLike = !this.userLike;
    let like = new LikeI(!this.userLike, this.currentUserId,postId);
    this.likeEvent.emit(like);
  }

  comment(postId: number){
    if(!this.addCommentForm )
      return;
    let comment = new CommentI(this.addCommentForm.value.content ,this.currentUserId,"ofir",postId)
    this.commentInPostEvent.emit(comment);
    this.comments?.push(comment);
  }



  getCurrentUserId(){
    return localStorage.getItem("id");
  }

}
