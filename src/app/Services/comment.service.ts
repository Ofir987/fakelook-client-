import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentI } from '../Models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, private router: Router) { }

  private url = 'https://localhost:44349/api/';
  subs: Subscription[] = [];

  // private posts$: BehaviorSubject<PostI[]> = new BehaviorSubject<PostI[]>([]);

  commentPost(comment: CommentI): void {
    console.log(comment);
    const currentUrl = `${this.url}Comment/Add`;
    var token = localStorage.getItem("token");
    var id = localStorage.getItem("id");
    comment.userId = JSON.parse(id ? id : '');
    console.log(comment.userId);

    this.http.post<CommentI>(currentUrl, comment, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
      })
    }).subscribe((data)=> console.log( "RES",data));

  }
}
