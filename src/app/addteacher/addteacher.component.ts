import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {
  public tamil: boolean = false;
  public english: boolean = false;
  public maths: boolean = false;
  public science: boolean = false;
  public social: boolean = false;
  
  constructor( public dataservice:DataService,
               public router:Router) { }

  ngOnInit() {
  }
  check(){
    
  }
  newTeacher(value){
    this.dataservice.addteacher(value).subscribe(res=>{
    this.router.navigate(['/app/teachers'])
    })
  }

}
// value.subject1="tamil"
//  value.subject2="english"
//  value.subject3="maths"
//  value.subject4="science"
//  value.subject5="social"