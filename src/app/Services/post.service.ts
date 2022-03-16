import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilterI } from '../Models/filters.model';
import { PostI } from '../Models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private router: Router) { }

  private url = 'https://localhost:44349/api/';
  subs: Subscription[] = [];

  addPost(post: PostI): void {
    const currentUrl = `${this.url}Post/Add`;
     var token = localStorage.getItem("token");
     var id = localStorage.getItem("id");


    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer ' + token,
    // });

    post.userId = JSON.parse(id?id:'');

    this.subs.push(
      this.http.post<any>(currentUrl, post,{
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`
      })
      }).subscribe((res) => {

        // this.setToken(res.token);
        // this.router.navigateByUrl('/Secret');
      })
    );
  }


  getPostsByFilters(filters: FilterI): void {
    const currentUrl = `${this.url}Post/Add`;
    var token = localStorage.getItem("token");

    // 'Authorization':`Bearer ${token}
    this.subs.push(
      this.http.post<PostI[]>(currentUrl, filters,{
        headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization':`Bearer ${token}`
      })
      }).subscribe((res) => {
        console.log(res);
        // this.setToken(res.token);
        // this.router.navigateByUrl('/Secret');
      })
    );
  }
}
