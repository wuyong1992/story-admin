import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AddArticleService {

  public saveArticleBtnClick: Subject<boolean> = new Subject<boolean>();


  constructor() { }

  public get isSaveArticleBtnClick():Observable<boolean>{
    return this.saveArticleBtnClick.asObservable();
  }


  public clickSaveBtn(){
    this.saveArticleBtnClick.next(true);
  }

  public saveOver(){
    this.saveArticleBtnClick.next(false);
  }

}
