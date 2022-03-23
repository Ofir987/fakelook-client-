import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFilter } from 'src/app/Models/filters.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {
  @Output() filterEvent= new EventEmitter<IFilter>();
  constructor() { }
  filterForm= new FormGroup({
    dateFrom: new FormControl(''),
    dateTo: new FormControl(''),
    tags: new FormControl(''),
    publishers: new FormControl(''),
    usersTaggedInPost: new FormControl('')
  })
  ngOnInit(): void {
  }

  submitFilter(): void{
    const filter:IFilter= this.filterForm.value;
    var tagsArr = this.filterForm.value.tags;
    var tags= tagsArr.split(",");//TODO#
    var userTaggedArr = this.filterForm.value.usersTaggedInPost;
    var usersTaggedInPost= userTaggedArr.split(",");//TODO@
    var publishersArr = this.filterForm.value.publishers;
    var publishers = publishersArr.split(",");

   var dateFrom = this.filterForm.value.dateFrom;
   if(dateFrom == "")
      dateFrom = new Date(1,0,1);
     // dateFrom = new Date()
   var dateTo = this.filterForm.value.dateTo;
   if(dateTo == "")
    dateTo = new Date();


    console.log(dateFrom, dateTo );

    this.filterEvent.emit(new IFilter(publishers,dateFrom,dateTo,tags,usersTaggedInPost));
  }

}
