import { Component, Input, OnInit } from '@angular/core';
import { CommentI } from 'src/app/Models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()comment?: CommentI;

  constructor() { }

  ngOnInit(): void {
    console.log(this.comment);
  }

}
