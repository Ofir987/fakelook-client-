import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/Models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()comment?: IComment;

  constructor() { }

  ngOnInit(): void {
    console.log(this.comment);
  }

}
