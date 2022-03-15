import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainScreenComponent } from './main-screen/main-screen.component';
import { MapComponent } from './main-screen/map/map.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './Auth/auth.module';
import { AddNewPostComponent } from './main-screen/add-new-post/add-new-post.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { CommentsComponent } from './comments/comments.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { CommentComponent } from './comments/comments-list/comment/comment.component';
import { ReactiveFormsModule } from '@angular/forms';

// import { AngularCesiumModule } from '@angular-cesium';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    MapComponent,
    AddNewPostComponent,
    CommentsComponent,
    CommentsListComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule, 
    AuthModule, 
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    // AngularCesiumModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
