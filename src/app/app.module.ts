import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './Auth/auth.module';
import { AddNewPostComponent } from './Main/add-new-post/add-new-post.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FriendshipsComponent } from './friendships/friendships.component';
import { FriendsComponent } from './friendships/friends/friends.component';
import { FriendsListComponent } from './friendships/friends/friends-list/friends-list.component';
import { FriendComponent } from './friendships/friends/friends-list/friend/friend.component';
import { GroupsComponent } from './friendships/groups/groups.component';
import { AngularCesiumModule, AngularCesiumWidgetsModule } from 'angular-cesium';
import { MapComponent } from './Main/map/map.component';
import { PostsMenuComponent } from './Main/posts-menu/posts-menu.component';
import { PostsDialogComponent } from './Main/posts-dialog/posts-dialog.component';
import { PostsDisplayComponent } from './Main/posts-display/posts-display.component';
import { PostsFormComponent } from './Main/posts-form/posts-form.component';
import { PostsComponent } from './Main/posts/posts.component';
import { PostsListComponent } from './Main/posts/posts-list/posts-list.component';
import { PostComponent } from './Main/posts/posts-list/post/post.component';

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
    PostsMenuComponent,
    PostsDialogComponent,
    PostsDisplayComponent,
    PostsFormComponent,
    PostsComponent,
    PostsListComponent,
    PostComponent,
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
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
