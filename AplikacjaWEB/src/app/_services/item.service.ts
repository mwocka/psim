/**
 * Created by Mateusz on 03.05.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Items} from "../models/items"
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
@Injectable()
export class ItemService {


  constructor(private http: Http) {
  }

  getItem(): Observable<Items[]> {
    return this.http.get('http://localhost:3000/get/getitems')
      .map((response: Response) => <Items[]> response.json())
  }


  //private extractData(res:Response) {
  //let body = res.json();
  // return body || [];

  // }
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Internal Server error');
  }

}

