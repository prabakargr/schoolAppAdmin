import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {
  allStudents:any;
  newstudent:any;

  constructor(public http:Http) { }
  getAllStudents(){
    return this.http.get('https://5b2a1bc03a8ea3001418d704.mockapi.io/12students')
    .map(result=>this.allStudents=result.json())
  }
  createStudent(value){
    return this.http.post('https://5b2a1bc03a8ea3001418d704.mockapi.io/12students',value)
    .map(result=>this.newstudent=result.json())
  }

}
