import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Auth/Components/login-form/login-form.component';
import { SignUpFormComponent } from './Auth/Components/sign-up-form/sign-up-form.component';
import { MapComponent } from './Main/map/map.component';

const routes: Routes = [ 
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'map', component: MapComponent },
  {path: 'login', component: LoginFormComponent },
  {path: 'sign-up', component: SignUpFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
