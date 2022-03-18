import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './Auth/auth.module';
import { AddNewPostComponent } from './Main/main-screen/add-new-post/add-new-post.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';
import { FriendshipsComponent } from './friendships/friendships.component';
import { FriendsComponent } from './friendships/friends/friends.component';
import { FriendsListComponent } from './friendships/friends/friends-list/friends-list.component';
import { FriendComponent } from './friendships/friends/friends-list/friend/friend.component';
import { GroupsComponent } from './friendships/groups/groups.component';
import { AngularCesiumModule, AngularCesiumWidgetsModule } from 'angular-cesium';
import { MainScreenComponent } from './Main/main-screen/main-screen.component';
import {MatInputModule} from '@angular/material/input';

import { PostsComponent } from './Main/main-screen/posts/posts.component';
import { PostComponent } from './Main/main-screen/post/post.component';
import { MapComponent } from './Main/main-screen/map/map.component';
import {MatIconModule} from '@angular/material/icon';
import { CommentsComponent } from './Main/main-screen/comments/comments.component';
import { CommentComponent } from './Main/main-screen/comment/comment.component';
import { PostDialogComponent } from './Main/main-screen/post-dialog/post-dialog.component';

// import { AngularCesiumModule } from '@angular-cesium';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AddNewPostComponent,
    FriendshipsComponent,
    FriendsComponent,
    FriendsListComponent,
    FriendComponent,
    GroupsComponent,
    PostsComponent,
    PostComponent,
    MainScreenComponent,
    CommentsComponent,
    CommentComponent,
    PostDialogComponent,
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
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
