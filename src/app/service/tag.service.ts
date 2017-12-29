import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class TagService {



  constructor(private http:HttpClient) { }

  getTagList(){
    return this.http.get(environment.getTagListUrl);
  }



}
