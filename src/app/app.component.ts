import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  flag = true;
  h: string;

  toggleSideBar(event) {
    this.flag = event;
  }


  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.h = $(window).height() - $('#story_header').height() - $('#story_foot').height() + 'px';
    });
  }
}
