import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{


  title = 'app';

  flag = false;
  h: string ;

  toggleSideBar(event) {
    this.flag = event;
  }


  constructor() {

    $(function () {
      console.log($(window).height() - $('#story_header').height() - $('#story_foot').height() + 'px..');
      //
    });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log($(window).height() - $('#story_header').height() - $('#story_foot').height() + 'px');
    this.h = $(window).height() - $('#story_header').height() - $('#story_foot').height() + 'px';
  }
}
