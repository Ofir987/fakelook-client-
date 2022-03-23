import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './Auth/Components/forgot-password/forgot-password.component';
import { LoginFormComponent } from './Auth/Components/login-form/login-form.component';
import { SignUpFormComponent } from './Auth/Components/sign-up-form/sign-up-form.component';
import { FriendshipsComponent } from './friendships/friendships.component';
import { MainScreenComponent } from './Main/main-screen/main-screen.component';
import { MapComponent } from './Main/main-screen/map/map.component';

const routes: Routes = [ 
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'main-screen', component: MainScreenComponent },
  {path: 'login', component: LoginFormComponent },
  {path: 'sign-up', component: SignUpFormComponent },
  {path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'friendships', component: FriendshipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
