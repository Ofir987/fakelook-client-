import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { IFilter } from '../Models/filters.model';
import { IPost } from '../Models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private router: Router) { }

  private url = 'https://localhost:44349/api/';
  subs: Subscription[] = [];

  private posts$: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([]);

  addPost(post: IPost): void {
    console.log(post);
    const currentUrl = `${this.url}Post/Add`;
     let token = localStorage.getItem("token");
     let id = localStorage.getItem("id");
     let userName = localStorage.getItem("userName");

     console.log(userName);
    //  if(id != null){
    //   post.userId = Number(id);
    //  }
     post.userId = parseInt(id || '0');
    //  post.userId = parseInt(id) || '';
     console.log( post.userId );

    //  post.user.userName = userName || '';

    //  this.subs.push(
      this.http.post<IPost>(currentUrl, post,{
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`
      })
      }).subscribe((res:IPost) => {
        console.log(res.id);
        const current =  this.posts$.getValue();
        this.posts$.next([res,...current]);
        // this.setToken(res.token);
        // this.router.navigateByUrl('/Secret');
      });
    // );

   

    // return this.http.post<PostI[]>(currentUrl, post,{ headers});

  }


  getPostsByFilters$(filters: IFilter):void {
    const currentUrl = `${this.url}Post/Filter`;
    // var token = localStorage.getItem("token");
    console.log(filters);
    var token = this.getToken();

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      
    });
    // 'Authorization':`Bearer ${token}
 
      this.http.post<IPost[]>(currentUrl,filters,
        {
        headers: new HttpHeaders({'Authorization':`Bearer ${token}` })
        })
      .subscribe((data:any)=> {this.posts$.next(data);
         }); 
      
      let x = 4;  
  }



  getAllPosts$(): Observable<IPost[]> {

    const currentUrl = `${this.url}Post/GetAll`;
    // var token = localStorage.getItem("token");
    var token = this.getToken();
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    this.http.get<IPost[]>(currentUrl, { headers })
    .subscribe((data)=> this.posts$.next(data));

  return this.posts$.asObservable();
  }


  updatePost(post: IPost): void {
    const currentUrl = `${this.url}Post/${post.id}`;
    // var token = localStorage.getItem("token");
    console.log(post);
    var token = this.getToken();

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      
    });
    // 'Authorization':`Bearer ${token}
 
      this.http.put<IPost>(currentUrl,post,{
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


  getPosts(){
    return this.posts$;
  }
}


