import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AddArticleService} from '../../service/add-article.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public saveBtnDisable: boolean;

  @Output()
  save: EventEmitter<void> = new EventEmitter();

  constructor(private addArticleService: AddArticleService) {
    this.saveBtnDisable = true;
  }

  ngOnInit() {
  }

  onClick() {
    this.saveBtnDisable = false;
    this.addArticleService.clickSaveBtn()
  }

  getArticle(event) {
    // event 就是富文本中的值
    console.log(event);
    this.addArticleService.saveOver();
  }

}
