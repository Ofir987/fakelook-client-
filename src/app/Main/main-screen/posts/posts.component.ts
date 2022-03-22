import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { CommentI } from 'src/app/Models/comment.model';
import { LikeI } from 'src/app/Models/like.model';
import { PostI } from 'src/app/Models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() posts$?: Observable<PostI[]>;

  @Output() postIdToBeDeletedEvent = new EventEmitter<number>();

  @Output() likeEvent = new EventEmitter<LikeI>();

  @Output() commentInPostsEvent = new EventEmitter<CommentI>();


  constructor() { }

  ngOnInit(): void {
  }

  deletePost(postIdToBeDel:number){
    this.postIdToBeDeletedEvent.emit(postIdToBeDel);
  }

  likePost(likeToPost:LikeI){
    this.likeEvent.emit(likeToPost);
  }

  commentInPosts(commentToPost:CommentI){
 this.commentInPostsEvent.emit(commentToPost);

  }
}
