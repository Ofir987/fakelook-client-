import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserI } from 'src/app/Models/user.model';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor(public authService:AuthService) { }
  signUpForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
    ]),
    address: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  submitPost(): void {
    const user: UserI = this.signUpForm.value;
    console.log(user);
    this.authService.signUp(user);
  }

}
