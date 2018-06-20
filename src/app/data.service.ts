import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {
  twelthStudents

  constructor(public http:Http) { }
  get12Students(){
    return this.http.get('http://5b2a1bc03a8ea3001418d704.mockapi.io/12students')
    .map(result=>this.twelthStudents=result.json())
  }
  get11Students(){
    return this.http.get('http://5b2a1bc03a8ea3001418d704.mockapi.io/11students')
    .map(Response=>Response.json())
  }

}
