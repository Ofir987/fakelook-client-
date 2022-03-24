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

  private url = 'https://localhost:44349/api/';

  addLike(like: ILike): void {
    const currentUrl = `${this.url}Like/Add`;
    var token = localStorage.getItem("token");
    this.http.post<ILike>(currentUrl, like, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
      })
    });
  }

  toggleIsActiveLike(like: ILike): void {
    const currentUrl = `${this.url}Like/ToggleIsActiveLike`;
    var token = localStorage.getItem("token");
    this.http.post<ILike>(currentUrl, like, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
      })
    });
  }
}
