import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {User} from '../_models/user';
@Injectable()
export class UserService {


  constructor(private http: Http) {}

  login(username: string, password: string) {
    let body = JSON.stringify({username: username, password: password, employee: "true"});
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/post/login', body, {headers: headers})
      .map(this.checkStatus)
      .catch(this.checkError);
  }

  register(name: string, address: string, password: string, username: string) {
    let body = JSON.stringify({name: name, address: address, password: password, username: username, employee: "true"});
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/post/register', body, {headers: headers})
      .map(this.checkStatus)
      .catch(this.checkError);
  }
  maketransaction(c_username: string, e_username: string, data_start: string){
    let body = JSON.stringify({c_username: c_username, e_username: e_username, data_start: data_start});
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/post/makeTransaction', body, {headers: headers})
      .map(this.checkStatus)
      .catch(this.checkError);
  }
  endtransaction(data_end: string, price: string, transactionId: string){
    let body = JSON.stringify({data_end: data_end, price: price, transaction_id: transactionId});
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/post/endTransaction', body, {headers: headers})
      .map(this.checkStatus)
      .catch(this.checkError);
  }



  logout(): void {
    localStorage.removeItem('currentUser');
  }

  private checkStatus(res: Response): void {
    if (res && res.status === 200) {
      localStorage.setItem('currentUser', JSON.stringify(res));
    }

  }

  private checkError(error: any): Observable<any> {
    if (error && error.status === 401) {
      return Observable.throw(new Error(error.json().message));
    }
    if (error && error.status === 500) {
      return Observable.throw(new Error(error.json().message));
    }
  }
}
