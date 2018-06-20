import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {
  twelthStudents:any
  eleventhStudents:any
  constructor( public dataservice:DataService) { }

  ngOnInit() {
      this.dataservice.get12Students().subscribe(res=>{
    this.twelthStudents=res;
        console.log(res)
      })

      this.dataservice.get11Students().subscribe(res=>{
        this.eleventhStudents=res
            console.log(res)
          })
  }

}
