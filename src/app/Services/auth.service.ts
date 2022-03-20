import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from '../Models/user.model';
import { catchError, map } from 'rxjs/operators';
import { Observable, of, Subscription } from 'rxjs';
import { AuthResponseI } from '../Models/authRespone.model';

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
      this.http.post<AuthResponseI>(currentUrl, user).pipe().subscribe((res) => {
        localStorage.setItem("token",res.token);
        localStorage.setItem("id",JSON.stringify(res.id));

        console.log("token",res.token);
        console.log("id",res.id);

        // this.setToken(res.token);
        // this.router.navigateByUrl('/main');
      })
    );
  }


  login(user: UserI): void {
    const currentUrl = `${this.url}Auth/Login`;
    this.subs.push(
      this.http.post<any>(currentUrl, user).subscribe((res) => {
        console.log("token",res.token);
        localStorage.setItem("token",res.token);
        localStorage.setItem("id",JSON.stringify(res.id));

        // this.setToken(res.token);
        //  this.router.navigateByUrl('/main');
      })
    );
  }


  // for authGuard - TODO in server
  checkAccess(): Observable<boolean> {
    const currentUrl = `${this.url}Auth/TestAll`;
    var token = localStorage.getItem("token");

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http.get(currentUrl, { headers }).pipe(
      map((_) => true),
      catchError((_) => of(false))
    );
  }

}
