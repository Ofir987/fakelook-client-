import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserI } from 'src/app/Models/user.model';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  hide = true;

  constructor(public authService:AuthService) { }

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  ngOnInit(): void {}
  
  login(): void {

    if(!this.loginForm )
      return;

    console.log(this.loginForm.value);
    const user: UserI = this.loginForm.value;
    this.authService.login(user);
    
  }

}
