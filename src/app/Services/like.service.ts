import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { __values } from 'tslib';
import { ILike } from '../Models/like.model';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  private like$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  like = false;
  private url = 'https://localhost:44349/api/';
  subs: Subscription[] = [];

  addLike(like: ILike): void {
    const currentUrl = `${this.url}Like/Add`;
    var token = localStorage.getItem("token");
    //  var id = localStorage.getItem("id");
    //  like.userId = JSON.parse(id?id:'');
    console.log(like);
    this.http.post<ILike>(currentUrl, like, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
      })
    }).subscribe((res) => {
      console.log(res);
      // this.like$.next(true);
    });
  }

  removeLike(like: ILike): void {
    const currentUrl = `${this.url}Like/RemoveLike`;
    var token = localStorage.getItem("token");
    //  var id = localStorage.getItem("id");
    //  like.userId = JSON.parse(id?id:'');
    console.log("removeLike",like);
    this.http.post<ILike>(currentUrl, like, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
      })
    }).subscribe((res) => {
      console.log("res", res);
    });
  }
}
