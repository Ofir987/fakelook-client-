import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Auth/Components/login-form/login-form.component';
import { SignUpFormComponent } from './Auth/Components/sign-up-form/sign-up-form.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

const routes: Routes = [ 
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'main', component: MainScreenComponent },
  {path: 'login', component: LoginFormComponent },
  {path: 'sign-up', component: SignUpFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
