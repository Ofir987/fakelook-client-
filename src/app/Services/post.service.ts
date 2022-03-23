import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { FilterI } from '../Models/filters.model';
import { PostI } from '../Models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private router: Router) { }

  private url = 'https://localhost:44349/api/';
  subs: Subscription[] = [];

  private posts$: BehaviorSubject<PostI[]> = new BehaviorSubject<PostI[]>([]);

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
      }).subscribe((res:PostI) => {
        console.log(res.id);
        const current =  this.posts$.getValue();
        this.posts$.next([res,...current]);
        // this.setToken(res.token);
        // this.router.navigateByUrl('/Secret');
      })
    );

   

    // return this.http.post<PostI[]>(currentUrl, post,{ headers});

  }


  getPostsByFilters$(filters: FilterI):void {
    const currentUrl = `${this.url}Post/Filter`;
    // var token = localStorage.getItem("token");
    console.log(filters);
    var token = this.getToken();

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      
    });
    // 'Authorization':`Bearer ${token}
 
      this.http.post<PostI[]>(currentUrl,filters,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}` })})
      .subscribe((data)=> this.posts$.next(data));   
  }



  getAllPosts$(): Observable<PostI[]> {

    const currentUrl = `${this.url}Post/GetAll`;
    // var token = localStorage.getItem("token");
    var token = this.getToken();
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    this.http.get<PostI[]>(currentUrl, { headers })
    .subscribe((data)=> this.posts$.next(data));

  return this.posts$.asObservable();
   // posts$ = new Subject().next(this.http.get<PostI[]>(currentUrl, { headers }).subscribe();
  //  return this.http.get<PostI[]>(currentUrl, { headers });
  }


  updatePost(post: PostI): void {
    const currentUrl = `${this.url}Post/${post.id}`;
    // var token = localStorage.getItem("token");
    console.log(post);
    var token = this.getToken();

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      
    });
    // 'Authorization':`Bearer ${token}
 
      this.http.put<PostI>(currentUrl,post,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}` })})
      .subscribe((data)=> console.log(post));   
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


