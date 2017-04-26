import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  moduleId: module.id,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  private webTitle: string;
  private imgUrl: string;

  constructor() { }

  ngOnInit() {
    this.webTitle = 'Branch Of Tools';
    this.imgUrl = '';
  }

}
