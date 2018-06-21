import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {
  allStudents:any;
  newstudent:any;

  constructor(public http:Http) { }
  getAllStudents(){
    return this.http.get('https://thawing-gorge-57262.herokuapp.com/students/getstudents')
    .map(result=>this.allStudents=result.json())
  }
  createStudent(value){
    return this.http.post('https://thawing-gorge-57262.herokuapp.com/students/createstudent',value)
    .map(result=>this.newstudent=result.json())
  }

}
