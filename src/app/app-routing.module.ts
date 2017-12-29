import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',loadChildren:'app/home/home.module#HomeModule'},
  {path:'article',loadChildren:'app/article/article.module#ArticleModule'},
  {path:'image',loadChildren:'app/image/image.module#ImageModule'},
  {path:'map',loadChildren:'app/map/map.module#MapModule'},
  {path:'tag',loadChildren:'app/tag/tag.module#TagModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
