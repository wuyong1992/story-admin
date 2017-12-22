import {NgModule} from '@angular/core';

import {ArticleRoutingModule} from './article-routing.module';
import {AddComponent} from './add/add.component';
import {ArticleComponent} from './article.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ArticleRoutingModule
  ],
  declarations: [AddComponent, ArticleComponent]
})
export class ArticleModule { }
