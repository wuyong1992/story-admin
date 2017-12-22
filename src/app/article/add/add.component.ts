import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public saveBtnDisable: boolean;
  saveBtnClick:boolean = false;

  @Output()
  save: EventEmitter<void> = new EventEmitter();

  constructor() {
    this.saveBtnDisable = true;
  }

  ngOnInit() {
  }

  saveArticle(){
    this.saveBtnClick = true;
    this.saveBtnDisable = false;
    this.save.emit();
  }

  getArticle(event){
    console.log(event);
  }

}
