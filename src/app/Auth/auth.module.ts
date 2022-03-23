import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { SignUpFormComponent } from './Components/sign-up-form/sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';


@NgModule({
  declarations: [ 
    LoginFormComponent,
    SignUpFormComponent,
    ForgotPasswordComponent],
  exports: [ 
    LoginFormComponent,
    SignUpFormComponent,
    ForgotPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ]
})
export class AuthModule { }
