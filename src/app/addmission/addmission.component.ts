import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-addmission',
  templateUrl: './addmission.component.html',
  styleUrls: ['./addmission.component.css']
})
export class AddmissionComponent implements OnInit {
newstudent:any;
  constructor( public dataservice:DataService ) { }

  ngOnInit() {
  }
  newStudent(value){
  this.dataservice.createStudent(value).subscribe(res=>{
    this.newstudent=res
  })
  }

}
