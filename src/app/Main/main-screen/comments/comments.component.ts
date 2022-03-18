import { Component, Input, OnInit } from '@angular/core';
import { CommentI } from 'src/app/Models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()comments?: CommentI[];

  constructor() { }

  ngOnInit(): void {
  }

}
