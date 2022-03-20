import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LikeI } from '../Models/like.model';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  private url = 'https://localhost:44349/api/';
  subs: Subscription[] = [];

  addLike(like: LikeI):Observable<LikeI> {
    const currentUrl = `${this.url}Like/Add`;
    var token = localStorage.getItem("token");
    //  var id = localStorage.getItem("id");
    //  like.userId = JSON.parse(id?id:'');
    console.log(like);


    return this.http.post<LikeI>(currentUrl, like, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
      })
    });
  }

  // isUserLikedPost(postId :number): boolean {
  //   const currentUrl = `${this.url}Like/IsCurrentUserLiked`;
  //    var token = localStorage.getItem("token");
  //    var userId = localStorage.getItem("id");
  //   //  like.userId = JSON.parse(id?id:'');
  //   //  console.log( like.userId );

  //   this.subs.push(
  //     this.http.post<any>(currentUrl,{userId,postId},{
  //       headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`
  //     })
  //     }).subscribe((res) => {
  //       // this.setToken(res.token);
  //       // this.router.navigateByUrl('/Secret');
  //     })
  //   );
  // }
}
