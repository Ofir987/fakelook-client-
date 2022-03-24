import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/Models/comment.model';
import { IFilter } from 'src/app/Models/filters.model';
import { ILike } from 'src/app/Models/like.model';
import { IPost } from 'src/app/Models/post.model';
import { CommentService } from 'src/app/Services/comment.service';
import { LikeService } from 'src/app/Services/like.service';
import { PostService } from '../../Services/post.service';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  postsInMain$!: Observable<IPost[]>;

  postToAdd?: IPost;

  isMapMode = false;

  isLikeMode = false;

  constructor(public postService: PostService, public likeService: LikeService, private _bottomSheet: MatBottomSheet,private router: Router,private commentService:CommentService
    ) { }

  ngOnInit(): void {
    this.getPosts();
    //  this.likeUser$ = this.likeService.getLike$();

  }

  getPosts() {
    this.postsInMain$ = this.postService.getAllPosts$();

    // this.postsInMain$.subscribe((posts) => {
    //   console.log(posts)
    // });
  }

  deletePostById(event: number) {
    this.postService.deletePost(event).subscribe();
  }

  likePostById(likeToPost: ILike) {
    if (likeToPost.isActive)
      this.likeService.toggleIsActiveLike(likeToPost);
    else
      this.likeService.addLike(likeToPost);
  }

  openBottomSheet() {
    let sheetRef = this._bottomSheet.open(AddNewPostComponent);
  }
  getFilters(event: IFilter) {
    console.log(event, "in main");
    this.postService.getPostsByFilters$(event);
  }
  changeMode() {
    this.isMapMode = !this.isMapMode;
    // this.getPosts();
    this.postsInMain$ = this.postService.getPosts();
  }

  commentToAdd(event:IComment){
    this.commentService.commentPost(event);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  openFriends(){
    this.router.navigate(['/friendships']);
  }

}
