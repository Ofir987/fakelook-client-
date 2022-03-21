import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
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

 likeUser$!: BehaviorSubject<boolean>;

 @Input() post!:PostI;

 @Output() showCommentPressed = new EventEmitter<boolean>();

 @Output() postToBeDeletedEvent = new EventEmitter<number>();

 @Output() likeEvent = new EventEmitter<LikeI>();

  constructor(public likeService: LikeService) { 
    this.currentUserId = this.getCurrentUserId();
    JSON.parse(this.currentUserId?this.currentUserId:'');
    // console.log(this.currentUserId);
  }

  ngOnInit(): void {
    // this.likeUser$.next(this.likeService.isUserLikedPost(this.post.id));
    // console.log(this.post.id);
    // this.likeUser$ =  this.likeService.isUserLikedPost(this.post.id);
    this.userLike = this.likeService.isUserLikedPost(this.post.id);
    console.log(this.userLike);

    // console.log(this.likeService.isUserLikedPost(this.post?.id));

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

  like(postId:any){
    // console.log(postId);
    var like = new LikeI(this.likeUser$.getValue(),this.currentUserId, postId);
    this.likeEvent.emit(like);
  }

  getCurrentUserId(){
    return localStorage.getItem("id");
  }

}
