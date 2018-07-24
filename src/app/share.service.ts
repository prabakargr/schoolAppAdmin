import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
  allstudents:any
  constructor() { }

  setStudents(value){
    this.allstudents=value
    console.log(value);
  }
  getStudents(){
    return this.allstudents;
  }

}
