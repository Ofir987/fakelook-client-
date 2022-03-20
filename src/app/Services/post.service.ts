import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
    console.log(post);
    const currentUrl = `${this.url}Post/Add`;
     var token = localStorage.getItem("token");
     var id = localStorage.getItem("id");
     post.userId = JSON.parse(id?id:'');
     console.log( post.userId );

     this.subs.push(
      this.http.post<any>(currentUrl, post,{
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`
      })
      }).subscribe((res) => {
        // this.setToken(res.token);
        // this.router.navigateByUrl('/Secret');
      })
    );

    // return this.http.post<PostI[]>(currentUrl, post,{ headers});

  }


  getPostsByFilters$(filters: FilterI):Observable<PostI[]> {
    const currentUrl = `${this.url}Post/Add`;
    // var token = localStorage.getItem("token");
    var token = this.getToken();

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      
    });
    // 'Authorization':`Bearer ${token}
 
     return this.http.post<PostI[]>(currentUrl,{headers});
  }

  getAllPosts$(): Observable<PostI[]> {
    const currentUrl = `${this.url}Post/GetAll`;
    // var token = localStorage.getItem("token");
    var token = this.getToken();
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http.get<PostI[]>(currentUrl, { headers });
  }


  deletePost(postId:number): Observable<any>{
    console.log(postId);
    const currentUrl = `${this.url}Post/${postId}`;
    var token = this.getToken();
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http.delete<any>(currentUrl, { headers });
  }


  getToken(){
    return localStorage.getItem("token");
  }
}


