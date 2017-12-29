import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImageComponent} from './image.component';
import {UploadComponent} from './upload/upload.component';

const routes: Routes = [
  {
    path:'',
    component:ImageComponent,
    children:[
      {path:'upload',component:UploadComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageRoutingModule { }
