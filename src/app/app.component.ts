import { Component } from '@angular/core';
import { PostService } from './Services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fakelook-client';
    constructor(postService: PostService){}


}
