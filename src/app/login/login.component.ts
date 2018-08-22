import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoaderService } from '../index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router : Router, private loaderService: LoaderService) { }

  ngOnInit() {
  }
  onLogin(value){
     // http call start
    this.loaderService.display(true);
    console.log(value);
     // http call ends
     this.loaderService.display(false);
    this.router.navigate(['/app']);
     
  }

}
