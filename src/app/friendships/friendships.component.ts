import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../Models/user.model';
import { FriendService } from '../Services/friend.service';

@Component({
  selector: 'app-friendships',
  templateUrl: './friendships.component.html',
  styleUrls: ['./friendships.component.css']
})
export class FriendshipsComponent implements OnInit {

  activeNumIndex!: number;

  constructor(private router: Router, private friendService:FriendService ) { }

  todo = ['tomi', 'lolo', 'gigi', 'dudu'];

  done = ['lolo'];

  more =['lolo'];

  demo = [['lolo'],
    // ['ofiroosh'],
    // ['tome', 'lolo', 'gigi', 'dudu'],
    // ['lolo', 'shimi','rubi'],
    // ['fofo', 'mimi','toto'],
  ]

  users?:Observable<IUser[]>;

  isPointerOverContainer?: boolean;

  manager?: string;

  
  ngOnInit(): void {
    this.manager = localStorage.getItem("userName") || '';
    this.demo = [
      [this.manager]
    ];
    this.users = this.friendService.getAllUsers$();
    console.log(this.users);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  main(){
    this.router.navigate(['/main-screen']);

  }
  dragDropped(event: CdkDragDrop<string[]>) {
    this.isPointerOverContainer = event.isPointerOverContainer;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.isPointerOverContainer) {
      if (event.previousContainer === event.container) {
        moveItemInArray(this.demo[this.activeNumIndex], event.previousIndex, event.currentIndex);
      } else {
        let idx=event.container.data.indexOf(event.previousContainer.data[event.previousIndex]);
        if(idx != -1){
          return;//if item exist
        }
          copyArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
      }
    } else {
      console.log("Dropped outside area.");
      console.log(event.container.id);
      if(event.container.id.localeCompare("cdk-drop-list-0")!=0)
      {event.container.data.forEach((value: any, index: any) => {
        if (index == event.previousIndex)
          event.container.data.splice(index, 1);
      });}
    }
  }


  enter(i:number) {
      this.activeNumIndex = i;
    }
  
    addGroup(){
      if(this.manager !=null ){
        var a = [this.manager];
        this.demo.push(a);
      }
      console.log(this.demo);

    }
  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }



}
