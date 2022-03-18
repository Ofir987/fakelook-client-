import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PostI } from 'src/app/Models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 userLike = false;
 showComments$ = new BehaviorSubject<boolean>(false);
 @Input() post?:PostI;

 @Output() showCommentPressed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  openComments(){
    this.showComments$.next(!this.showComments$.value);
    this.showCommentPressed.emit(this.showComments$.value);
  }

  deletePost(postToBeDeleted:any){
    console.log(postToBeDeleted)
  }

}
