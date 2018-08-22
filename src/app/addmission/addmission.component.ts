import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

import { LoaderService } from '../index';

@Component({
  selector: 'app-addmission',
  templateUrl: './addmission.component.html',
  styleUrls: ['./addmission.component.css']
})
export class AddmissionComponent implements OnInit {
newstudent:any;
  constructor( public dataservice:DataService,
               public router:Router, private loaderService: LoaderService ) { }

  ngOnInit() {
  }
  newStudent(value){
       
    console.log(value);

      // http call ends
      this.loaderService.display(true);
  this.dataservice.createStudent(value).subscribe(res=>{
    this.newstudent=res;
    this.loaderService.display(false);
         // http call ends
    this.router.navigate(['/app/allstudents'])
  })
  }

}
