import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilterService } from 'src/app/Services/filter.service';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {

  constructor(private filterService:FilterService) { }
  filterForm= new FormGroup({
    dateFrom: new FormControl(''),
    dateTo: new FormControl(''),
    tag: new FormControl(''),
    publisher: new FormControl(''),
    usersTaggedInPostId: new FormControl('')


  })
  ngOnInit(): void {
  }

}
