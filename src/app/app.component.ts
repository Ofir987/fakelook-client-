import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './Models/post.model';
import { PostService } from './Services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fakelook-client';
    constructor(private postService: PostService, private cdr:ChangeDetectorRef){}

    posts$?: Observable<IPost[]>;

    posts?:IPost[];

    // getPosts(){
    //   this.posts$ =  this.postService.getAllPosts$()
    //   this.posts$.subscribe((posts)=> {this.posts = posts; 
    //     this.cdr.markForCheck()});
    // }

}
