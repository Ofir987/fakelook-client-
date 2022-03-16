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
import { ReactiveFormsModule } from '@angular/forms';
import { FriendshipsComponent } from './friendships/friendships.component';
import { FriendsComponent } from './friendships/friends/friends.component';
import { FriendsListComponent } from './friendships/friends/friends-list/friends-list.component';
import { FriendComponent } from './friendships/friends/friends-list/friend/friend.component';
import { GroupsComponent } from './friendships/groups/groups.component';
import { AngularCesiumModule, AngularCesiumWidgetsModule } from 'angular-cesium';

// import { AngularCesiumModule } from '@angular-cesium';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    MapComponent,
    AddNewPostComponent,
    FriendshipsComponent,
    FriendsComponent,
    FriendsListComponent,
    FriendComponent,
    GroupsComponent,
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
