import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendships',
  templateUrl: './friendships.component.html',
  styleUrls: ['./friendships.component.css']
})
export class FriendshipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todo = ['tomi', 'lolo', 'gigi', 'dudu'];

  done = ['lolo'];

  more = ['gigi'];

  isPointerOverContainer?: boolean;

  dropWithOutCopy(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  dropWithCopy(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  dragDropped(event: CdkDragDrop<string[]>) {
    this.isPointerOverContainer = event.isPointerOverContainer;
  }

  // exited(event: any) {
    
  //   if (this.isPointerOverContainer) {
  //     if (event.previousContainer === event.container) {
  //       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //     }
  //   } else {
  //     console.log("Dropped outside area.");
  //     event.container.data.forEach((value: any,index: any)=>{
  //       if(index ==  event.previousIndex) 
  //       event.container.data.splice(index,1);
  //   });
  //   }
  // }

  drop(event: CdkDragDrop<string[]>) {
    if (this.isPointerOverContainer) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    } else {
      console.log("Dropped outside area.");
          event.container.data.forEach((value: any,index: any)=>{
        if(index ==  event.previousIndex) 
        event.container.data.splice(index,1);
    }); }
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }



}
