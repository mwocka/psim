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
import {AuthGuard} from "./_guard/auth.guard";
import {UserService} from "./_services/user.service";
import { ModelsComponent } from './models/models.component';
import { EmployeeComponent } from './employee/employee.component';
import {EmployeeService} from "./_services/employee.service";
import {TransactionService} from "./_services/transaction.service";
import { ReservationComponent } from './reservation/reservation.component';
import { TransactionComponent } from './transaction/transaction.component';
import {ReservationService} from "./_services/reservation.service";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ItemService} from "./_services/item.service";
import { MakeTransactionComponent } from './make-transaction/make-transaction.component';
import { EndTransactionComponent } from './end-transaction/end-transaction.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'items', component: ModelsComponent, canActivate: [AuthGuard]},
  {path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard]},
  {path: 'transactions', component: TransactionComponent, canActivate: [AuthGuard]},
  {path: 'reservations', component: ReservationComponent, canActivate: [AuthGuard]},
  {path: 'maketransaction', component: MakeTransactionComponent, canActivate: [AuthGuard]},
  {path: 'endtransaction', component: EndTransactionComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'welcome' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    WelcomeComponent,
    ModelsComponent,
    EmployeeComponent,
    ReservationComponent,
    TransactionComponent,
    MakeTransactionComponent,
    EndTransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    HttpModule,
    RouterModule.forRoot(routes,{useHash: false})
  ],
  providers: [
    AuthGuard,
  UserService,
  EmployeeService,
    TransactionService,
  ItemService,
  ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
