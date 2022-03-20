import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Observable } from 'rxjs';
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
  postsInMain$?: Observable<PostI[]>;

  likeUser?: Boolean;

  postToAdd?: PostI;
  constructor(public postService: PostService, public likeService: LikeService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
     this.getPosts();
  }

  getPosts() {
    this.postsInMain$ = this.postService.getAllPosts$();
    this.postsInMain$.subscribe((posts) => {
      console.log(posts)
    });
  }

  deletePostById(event: number) {
    this.postService.deletePost(event).subscribe();
  }

  likePostById(likeToPost: LikeI) {
    // this.likeUser = this.likeService.isUserLikedPost(postId);
    this.likeService.addLike(likeToPost);
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
  getFilters(event:FilterI){
    this.postsInMain$=this.postService.getPostsByFilters
  }

}
