import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../_services/reservation.service";
import {Router} from "@angular/router";
import {Reservation} from "./reservation";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  private webTitle: string;

  constructor(private router: Router, private reservationService: ReservationService) { }
  public reservation: Reservation[];
  ngOnInit() {
    this.webTitle = 'Branch Of Tools';
    this.getReservation();
  }

  private reservations: Reservation[] = [];
  getReservation(){
    this.reservationService.getReservation()
      .subscribe(
        reservations => this.reservations = reservations
      );
  }

}
