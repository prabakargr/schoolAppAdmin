import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {path:'login',component:LoginComponent},
    {path:'',pathMatch:'full',redirectTo:'login'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
