import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  flag = true;
  @Output()
  toggle = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  openSideNav(){
    this.flag = !this.flag;
    this.toggle.emit(this.flag);
  }

}
