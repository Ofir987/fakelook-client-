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
import {MatBottomSheetModule, MatBottomSheetRef} from '@angular/material/bottom-sheet';

import { ReactiveFormsModule } from '@angular/forms';
import { FriendshipsComponent } from './friendships/friendships.component';

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
import { FilterFormComponent } from './Main/main-screen/filter-form/filter-form.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { EditPostComponent } from './Main/main-screen/edit-post/edit-post.component';
import { SafeEmbeddedUrlPipe } from './Pipes/safe-embedded-url.pipe';
import { UserComponent } from './friendships/user/user.component';

// import { AngularCesiumModule } from '@angular-cesium';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AddNewPostComponent,
    FriendshipsComponent,
    PostsComponent,
    PostComponent,
    MainScreenComponent,
    CommentsComponent,
    CommentComponent,
    PostDialogComponent,
    FilterFormComponent,
    EditPostComponent,
    SafeEmbeddedUrlPipe,
    UserComponent,
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
    MatBottomSheetModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule,
    DragDropModule
  ],
  providers: [{provide: MatBottomSheetRef, useValue: {}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
