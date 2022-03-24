import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IUser } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient, private router: Router) { }

  private url = 'https://localhost:44349/api/';

  private users$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);

  private users?: IUser[];
  private usersName!: string[];


  getAllUsers(): IUser[] {

    const currentUrl = `${this.url}User/GetAll`;
    var token = localStorage.getItem("token");
    // var token = this.getToken();
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

      
    this.http.get<IUser[]>(currentUrl, { headers })
    .subscribe( 
      (data)=>
      // {console.log(data)
        this.users = data
      // data.forEach(async (user)=> await this.usersName?.push(user.userName))}
      // this.users$.next(data)
      );


  return this.users || [];

  // return this.users$.asObservable();

  }

}
