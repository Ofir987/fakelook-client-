import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Observable } from 'rxjs';
import { CommentI } from 'src/app/Models/comment.model';
import { FilterI } from 'src/app/Models/filters.model';
import { LikeI } from 'src/app/Models/like.model';
import { PostI } from 'src/app/Models/post.model';
import { LikeService } from 'src/app/Services/like.service';
import { PostService } from '../../Services/post.service';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  postsInMain$!: Observable<PostI[]>;

  postToAdd?: PostI;

  isMapMode = false;

  isLikeMode = false;

  constructor(public postService: PostService, public likeService: LikeService, private _bottomSheet: MatBottomSheet) { }

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

  likePostById(likeToPost: LikeI) {
    // this.likeUser = this.likeService.isUserLikedPost(postId);
    if (likeToPost.isActive)
      this.likeService.removeLike(likeToPost);
    else
      this.likeService.addLike(likeToPost);
    // this.likeUser$ = this.likeService.getLike$();
    console.log("likeinmain")
    // this.getPosts();
  }

  openBottomSheet() {
    let sheetRef = this._bottomSheet.open(AddNewPostComponent);
    // sheetRef.afterDismissed().subscribe(post => {
    //   // console.log(post);
    //   this.postToAdd = post;
    //   this.postService.addPost(post);

    // });

    // if (this.postToAdd) {
    //   this.postService.addPost(this.postToAdd);
    //   console.log(this.postToAdd);
    // }
  }
  getFilters(event: FilterI) {
    // this.postsInMain$=
    this.postService.getPostsByFilters$(event).subscribe((data) => console.log(data));
  }

  changeMode() {
    this.isMapMode = !this.isMapMode;
  }

  commentToAdd(event:CommentI){
    console.log(event);
  }

}
