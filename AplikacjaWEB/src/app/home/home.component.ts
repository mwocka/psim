import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {User} from "../_models/user";
import {current} from "codelyzer/util/syntaxKind";

@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private webTitle: string;
  private imgUrl: string;
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    //console.log(localStorage);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.webTitle = 'Branch Of Tools';
    this.imgUrl = '';
  }



}
