import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilterI } from 'src/app/Models/filters.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {
  @Output() filterEvent= new EventEmitter<FilterI>();
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
    const filter:FilterI= this.filterForm.value;
    var tags = this.filterForm.value.tags;
    var tagsArr= tags.split(",");//TODO#
    var userTagged = this.filterForm.value.usersTaggedInPost;
    var userTaggedArr= userTagged.split(",");//TODO@
    var publishers = this.filterForm.value.publishers;
    var publishersArr= publishers.split(",");

   var dateFrom = this.filterForm.value.dateFrom;
   if(dateFrom = null)
      dateFrom = new Date('January 1, 1 00:00:00');
   var dateTo = this.filterForm.value.dateTo;
   if(dateTo = null)
    dateTo = new Date('January 1, 1 00:00:00');


    console.log(dateFrom, dateTo );

    this.filterEvent.emit(new FilterI(publishersArr,dateFrom,dateTo,tagsArr,userTaggedArr));
  }

}
