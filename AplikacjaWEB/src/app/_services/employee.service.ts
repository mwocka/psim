import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Employee} from "../employee/employee"
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService {



  constructor(private http: Http) {}

  getEmployee():Observable<Employee[]>{
    return this.http.get('http://localhost:3000/get/employees')
      .map(this.extractData);
  }
  private extractData(res:Response) {
    let body = res.json();
    return body || [];
  }
}
