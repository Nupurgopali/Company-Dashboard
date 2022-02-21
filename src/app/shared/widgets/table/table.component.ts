import {MatTableDataSource} from '@angular/material/table';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


export interface Employee {
  name: string;
  year: number;
  id: number;
  branch: string;
}

const ELEMENT_DATA: Employee[] = [
  {id:100, name: 'Josh', year:2020,branch: "Banglore"},
  {id:101, name: 'Jonas', year:2010,branch: "Chennai"},
  {id:102, name: 'Alex', year:2004,branch: "Banglore"},
  {id:103, name: 'Matt', year:2005,branch: "Chennai"},
  {id:104, name: 'Monica', year:2009,branch: "Mumbai"},
  {id:105, name: 'Ross', year:2011,branch: "Chennai"},
  {id:106, name: 'Jay', year:2013,branch: "Mumbai"},
  {id:107, name: 'Phil', year:2014,branch: "Chennai"},
  {id:108, name: 'Luke', year:2006,branch: "Banglore"},
  {id:109, name: 'Manny', year:2007,branch: "Mumbai"},
];
@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'year', 'branch'];
  dataSource =new MatTableDataSource(ELEMENT_DATA);
  
  constructor() {
    
   }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource) {
      this.dataSource;
    }
  }
  
}


