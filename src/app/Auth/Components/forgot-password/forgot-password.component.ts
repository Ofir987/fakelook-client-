import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from 'src/app/Models/user.model';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  userPassword?: string;

  isLoading = false;

  ngOnInit(): void {
  }

  forgotPasswordForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  });

  forgotPassword() {

    if (!this.forgotPasswordForm)
      return;

      this.isLoading = true;
    this.authService.forgotPassword(new UserI(this.forgotPasswordForm.value.name, "", "", "",
      this.forgotPasswordForm.value.email,
    )).subscribe((data) => {
      this.userPassword = data
      console.log(data)
    });

    setTimeout(() => {                           //<<<---using ()=> syntax
      this.userPassword = "";
      this.router.navigateByUrl('/login');

    }, 10000);
  }

}
