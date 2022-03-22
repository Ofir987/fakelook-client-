import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommentI } from 'src/app/Models/comment.model';
import { LikeI } from 'src/app/Models/like.model';
import { PostI } from 'src/app/Models/post.model';
import { LikeService } from 'src/app/Services/like.service';

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
 @Input() post!:PostI;

 @Output() showCommentPressed = new EventEmitter<boolean>();

 @Output() postToBeDeletedEvent = new EventEmitter<number>();

 @Output() likeEvent = new EventEmitter<LikeI>();

 @Output() commentInPostEvent = new EventEmitter<CommentI>();


  constructor(public likeService: LikeService) { 
    this.currentUserId = this.getCurrentUserId();
    JSON.parse(this.currentUserId?this.currentUserId:'');
    // console.log(this.currentUserId);
  }
  
  addCommentForm = new FormGroup({
    comment: new FormControl('', [
      Validators.required,
    ])
  });

  ngOnInit(): void {
    // console.log(this.post.likes!.length);
    this.userLike = this.post.likes?.some((like)=> like.userId == this.currentUserId) || false;
    this.numberOfLikes = this.post.likes?.length || 0;

  }

  openComments(){
    this.showComments$.next(!this.showComments$.value);
    this.showCommentPressed.emit(this.showComments$.value);
  }

  deletePost(postIdToBeDeleted:any){
    // console.log(postIdToBeDeleted);
    this.postToBeDeletedEvent.emit(postIdToBeDeleted);
  }

  editPost(postToEdit:any){

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
    let comment = new CommentI(this.addCommentForm.value,this.currentUserId,"ofir",postId)
    this.commentInPostEvent.emit(comment);

  }



  getCurrentUserId(){
    return localStorage.getItem("id");
  }

}
