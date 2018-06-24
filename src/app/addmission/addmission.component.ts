import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addmission',
  templateUrl: './addmission.component.html',
  styleUrls: ['./addmission.component.css']
})
export class AddmissionComponent implements OnInit {
newstudent:any;
  constructor( public dataservice:DataService,
               public router:Router ) { }

  ngOnInit() {
  }
  newStudent(value){
    console.log(value);
  this.dataservice.createStudent(value).subscribe(res=>{
    this.newstudent=res
    this.router.navigate(['/app/allstudents'])
  })
  }

}
