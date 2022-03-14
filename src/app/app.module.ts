import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './Auth/Components/login-form/login-form.component';
import { SignUpFormComponent } from './Auth/Components/sign-up-form/sign-up-form.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { MapComponent } from './main-screen/map/map.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './Auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule, 
    AuthModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
