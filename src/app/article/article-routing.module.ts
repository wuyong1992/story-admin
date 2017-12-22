import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddComponent} from './add/add.component';
import {ArticleComponent} from './article.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    children: [
      {path: 'add', component: AddComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {
}
