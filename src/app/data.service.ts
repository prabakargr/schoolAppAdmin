import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class DataService {
  allStudents:any;
  newstudent:any;
  newteacher:any;
  allteachers:any;

  baseURL='https://thawing-gorge-57262.herokuapp.com'
  // baseURL='http://localhost:4000'

  constructor(public http:Http) { }

  getAllStudents(){
    return this.http.get(this.baseURL+'/students/getstudents')
    .map(result=>this.allStudents=result.json())
  }
  createStudent(value){
    return this.http.post(this.baseURL+'/students/createstudent',value)
    .map(result=>this.newstudent=result.json())
  }
  addteacher(value){
     return this.http.post(this.baseURL+'/teachers/addteacher',value)
     .map(result=>this.newteacher=result.json());
  }
  getteachers(){
    return this.http.get(this.baseURL+'/teachers/getteachers')
    .map(result=>this.allteachers=result.json());
  }

  // transfer details

  transferStudent(value){
    return this.http.post('http://5b4b3dc430ebac001419f2ab.mockapi.io/transferschool',value)
    .map(result=>this.transferStudent=result.json())
  }


}
