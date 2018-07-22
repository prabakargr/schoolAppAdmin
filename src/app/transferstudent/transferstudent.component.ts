import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-transferstudent',
  templateUrl: './transferstudent.component.html',
  styleUrls: ['./transferstudent.component.css']
})
export class TransferstudentComponent implements OnInit {

  transferstudent:any;

  constructor(
    public dataservice:DataService,
               public router:Router 
  ) { }

  ngOnInit() {
  }
transferStudent(value){
  console.log(value);
  this.dataservice.transferStudent(value).subscribe(res=>{
    this.transferstudent=res
    this.router.navigate(['/app/transferstudent'])
  })
}


}
