import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {ShareService} from '../share.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-transferstudent',
  templateUrl: './transferstudent.component.html',
  styleUrls: ['./transferstudent.component.css']
})
export class TransferstudentComponent implements OnInit {
  std:any;
  toStd:any[]=[];
  transferstudent:any
  allStudents:any;
  selectedStandard:any[]=[];
  remainingStudents:any=[];

  constructor(
               public dataservice:DataService,
               public router:Router ,
               public shareservice:ShareService
  ) {}

  ngOnInit() {
    this.dataservice.getAllStudents().subscribe(res=>{
      this.allStudents=res
      console.log(this.allStudents)
    })
  }
transferStudent(value){
  console.log(value);
  this.dataservice.transferStudent(value).subscribe(res=>{
    this.transferstudent=res
    this.router.navigate(['/app'])
  })
}
selectStandard(value){
  this.std=value.standard
  this.selectedStandard=[];
  for(let i=0 ; i<this.allStudents.length ; i++){
      if(this.allStudents[i].standard===this.std){
        this.selectedStandard.push(this.allStudents[i].name)
      }else this.remainingStudents.push(this.allStudents[i]);
  }
  this.toStd=[];
  for (let k=0;k<this.std.length;k++){
    this.toStd.push(this.std);
    this.toStd.push(JSON.stringify(parseInt(this.std)+1));
  }
  console.log(this.toStd);
  console.log(this.selectedStandard)
}


}
