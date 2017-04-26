import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { LoginComponent } from './welcome/login/login.component';
import { RegistrationComponent } from './welcome/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {LoginService} from "./_services/login.service";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  { path: '**', redirectTo: 'welcome' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes,{useHash: false})
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
