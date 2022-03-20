import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
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

  constructor() { }

  ngOnInit(): void {
  }

  deletePost(postIdToBeDel:number){
    this.postIdToBeDeletedEvent.emit(postIdToBeDel);
  }

  likePost(likeToPost:LikeI){
    this.likeEvent.emit(likeToPost);
  }
}
