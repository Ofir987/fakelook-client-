import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { __values } from 'tslib';
import { LikeI } from '../Models/like.model';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  private like$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  like = false;
  private url = 'https://localhost:44349/api/';
  subs: Subscription[] = [];

  addLike(like: LikeI): void {
    const currentUrl = `${this.url}Like/Add`;
    var token = localStorage.getItem("token");
    //  var id = localStorage.getItem("id");
    //  like.userId = JSON.parse(id?id:'');
    console.log(like);
    this.http.post<LikeI>(currentUrl, like, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
      })
    }).subscribe((res) => {
      console.log(res);
      // this.like$.next(true);
    });
  }

  removeLike(like: LikeI): void {
    const currentUrl = `${this.url}Like/RemoveLike`;
    var token = localStorage.getItem("token");
    //  var id = localStorage.getItem("id");
    //  like.userId = JSON.parse(id?id:'');
    console.log("removeLike",like);
    this.http.put<LikeI>(currentUrl, like, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
      })
    }).subscribe((res) => {
      console.log("res", res);
    });
  }

  isUserLikedPost(postId: number): boolean {
    console.log(postId);
    var userId = localStorage.getItem("id");

    const currentUrl = `${this.url}Like/IsCurrentUserLiked?userId=${userId}&postId=${postId}`;
    var token = localStorage.getItem("token");
    //  like.userId = JSON.parse(id?id:'');
    //  console.log( like.userId );

    let obj = { userId: userId, postId: postId };
    let json = JSON.stringify(obj);

    this.http.post<any>(currentUrl, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe((res) => {
      // this.like$.next(res);
      console.log(res);
      this.like = res; 
      // this.setToken(res.token);
      // this.router.navigateByUrl('/Secret');
    });

    console.log(this.like);

    return this.like;


    // this.http.post<any>(currentUrl, {
    //   headers: new HttpHeaders({
    //     'Authorization': `Bearer ${token}`
    //   })
    // }).subscribe((res) => {
    //   this.like$.next(res);
    //   console.log("sub",res);
    //   this.like = res; 
    //   // this.setToken(res.token);
    //   // this.router.navigateByUrl('/Secret');
    // });


    // return this.like;
  }
}
