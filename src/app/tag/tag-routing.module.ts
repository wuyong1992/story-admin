import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TagComponent} from './tag.component';
import {AddTagComponent} from './add-tag/add-tag.component';

const routes: Routes = [
  {
    path:'',
    component:TagComponent,
    children:[
      {
        path:'',
        redirectTo:'add_tag',
        pathMatch:'full'
      },
      {
        path:'add_tag',
        component:AddTagComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagRoutingModule { }
