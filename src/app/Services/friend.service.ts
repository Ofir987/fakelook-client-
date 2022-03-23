import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient, private router: Router) { }

  private url = 'https://localhost:44349/api/';

  private users$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);

  getAllUsers$(): Observable<IUser[]> {

    const currentUrl = `${this.url}User/GetAll`;
    var token = localStorage.getItem("token");
    // var token = this.getToken();
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    this.http.get<IUser[]>(currentUrl, { headers })
    .subscribe((data)=> this.users$.next(data));

  return this.users$.asObservable();

  }

}
