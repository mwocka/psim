/**
 * Created by Mateusz on 02.05.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Reservation} from "../reservation/reservation"
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class ReservationService {



  constructor(private http: Http) {}

  getReservation():Observable<Reservation[]>{
    // let headers = new Headers({'X-Requested-With': ""});

    return this.http.get('http://localhost:3000/get/getReservation')
      .map(this.extractData);

  }
  private extractData(res:Response) {
    let body = res.json();
    return body || [];

  }


}

