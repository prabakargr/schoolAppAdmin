import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {
  Boolean:true
  constructor() { }

  ngOnInit() {
  }
  newTeacher(value){
    console.log(value);
  }

}
// value.subject1="tamil"
//  value.subject2="english"
//  value.subject3="maths"
//  value.subject4="science"
//  value.subject5="social"