import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostI } from 'src/app/Models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() posts$?: Observable<PostI[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
