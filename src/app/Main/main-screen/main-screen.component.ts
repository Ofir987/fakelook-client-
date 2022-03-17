import { Component, OnInit } from '@angular/core';
import { PostService } from '../../Services/post.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  constructor(public postService:PostService) { }

  ngOnInit(): void {
  }

}
