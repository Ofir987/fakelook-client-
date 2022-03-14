import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserI } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://localhost:44349/api/';
  subs: Subscription[] = [];

  constructor(private http: HttpClient,private router: Router) { }

  signUp(user: UserI): void {
    const currentUrl = `${this.url}Auth/SignUp`;
    this.subs.push(
      this.http.post<any>(currentUrl, user).subscribe((res) => {
        console.log("token",res.token);
        // this.setToken(res.token);
        // this.router.navigateByUrl('/Secret');
      })
    );
  }


  login(user: UserI): void {
    const currentUrl = `${this.url}Auth/Login`;
    this.subs.push(
      this.http.post<any>(currentUrl, user).subscribe((res) => {
        console.log("token",res.token);
        // this.setToken(res.token);
        // this.router.navigateByUrl('/Secret');
      })
    );
  }

}
