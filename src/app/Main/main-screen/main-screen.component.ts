import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostI } from 'src/app/Models/post.model';
import { PostService } from '../../Services/post.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  postsInMain$?: Observable<PostI[]>;

  constructor(public postService:PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postsInMain$ =  this.postService.getAllPosts$();
    this.postsInMain$.subscribe((posts)=> { console.log(posts)
    });
  }
}
