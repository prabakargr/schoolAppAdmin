import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers:any;

  constructor( public dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.getteachers().subscribe(res=>{
      this.teachers=res;
    })
  }


}
