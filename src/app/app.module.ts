import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AddmissionComponent } from './addmission/addmission.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { TransferstudentComponent } from './transferstudent/transferstudent.component';

import {DataService} from './data.service';
import {ShareService} from './share.service';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { TeachersComponent } from './teachers/teachers.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpageComponent,
    AddmissionComponent,
    AllstudentsComponent,
    TransferstudentComponent,
    AddteacherComponent,
    TeachersComponent
  ],
  imports: [
    HttpModule,
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
    {path:'login',component:LoginComponent},
    {path:'',pathMatch:'full',redirectTo:'login'},
    {path:'app',component:LandingpageComponent,
    children:[
      {path:"addmission",component:AddmissionComponent},
      {path:'',pathMatch:'full',redirectTo:'addmission'},
      {path:'allstudents',component:AllstudentsComponent},
      {path:'tranferstudent',component:TransferstudentComponent},
      {path:'addteacher',component:AddteacherComponent},
      {path:'teachers',component:TeachersComponent}
    ]
    }
    ])
  ],
  providers: [DataService,ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
