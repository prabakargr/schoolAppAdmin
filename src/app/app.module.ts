import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AddmissionComponent } from './addmission/addmission.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpageComponent,
    AddmissionComponent,
    AllstudentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {path:'login',component:LoginComponent},
    {path:'',pathMatch:'full',redirectTo:'login'},
    {path:'landingpage',component:LandingpageComponent,
    children:[
      {path:"addmission",component:AddmissionComponent},
      {path:'',pathMatch:'full',redirectTo:'addmission'},
      {path:'allstudents',component:AllstudentsComponent}
    ]
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
