import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/Models/comment.model';
import { ILike } from 'src/app/Models/like.model';
import { IPost } from 'src/app/Models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() posts$?: Observable<IPost[]>;

  @Output() postIdToBeDeletedEvent = new EventEmitter<number>();

  @Output() likeEvent = new EventEmitter<ILike>();

  @Output() commentInPostsEvent = new EventEmitter<IComment>();


  constructor() { }

  ngOnInit(): void {
  }

  deletePost(postIdToBeDel:number){
    this.postIdToBeDeletedEvent.emit(postIdToBeDel);
  }

  likePost(likeToPost:ILike){
    this.likeEvent.emit(likeToPost);
  }

  commentInPosts(commentToPost:IComment){
 this.commentInPostsEvent.emit(commentToPost);

  }
}
