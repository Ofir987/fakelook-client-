import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
import { LikeI } from 'src/app/Models/like.model';
import { PostI } from 'src/app/Models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 userLike = false;
 showComments$ = new BehaviorSubject<boolean>(false);
 currentUserId?:any;

 @Input() post?:PostI;

 @Output() showCommentPressed = new EventEmitter<boolean>();

 @Output() postToBeDeletedEvent = new EventEmitter<number>();

 @Output() likeEvent = new EventEmitter<LikeI>();

  constructor() { 
    this.currentUserId = this.getCurrentUserId();
    JSON.parse(this.currentUserId?this.currentUserId:'');
    console.log(this.currentUserId);
  }

  ngOnInit(): void {
  }

  openComments(){
    this.showComments$.next(!this.showComments$.value);
    this.showCommentPressed.emit(this.showComments$.value);
  }

  deletePost(postIdToBeDeleted:any){
    console.log(postIdToBeDeleted);
    this.postToBeDeletedEvent.emit(postIdToBeDeleted);
  }

  editPost(postToEdit:any){

  }

  like(postId:any){
    var like = new LikeI(true,this.currentUserId, postId);
    this.likeEvent.emit(like);
    
  }

  getCurrentUserId(){
    return localStorage.getItem("id");
  }

}
