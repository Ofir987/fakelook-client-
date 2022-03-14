import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { SignUpFormComponent } from './Components/sign-up-form/sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ 
    LoginFormComponent,
    SignUpFormComponent],
  exports: [ 
    LoginFormComponent,
    SignUpFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AuthModule { }
