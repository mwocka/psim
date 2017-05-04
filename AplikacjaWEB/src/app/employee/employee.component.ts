import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeService} from "../_services/employee.service";
import {Employee} from "./employee"
import {UserService} from "../_services/user.service";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  })
export class EmployeeComponent implements OnInit {
  private webTitle: string;
  constructor(private router: Router, private employeeService: EmployeeService) { }

  public employee: Employee[];
  ngOnInit() {
    this.webTitle = 'Branch Of Tools';
    this.getEmployee();
  }
  private employees: Employee[] = [];

  getEmployee(){
    this.employeeService.getEmployee()
      .subscribe(
        employees => this.employees = employees
      );
  }



}
