import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from './map.component';
import {BaiduMapComponent} from './baidu-map/baidu-map.component';
import {GoogleMapComponent} from './google-map/google-map.component';

const routes: Routes = [
  {
    path:'',
    component:MapComponent,
    children:[
      {
        path:'',
        redirectTo:'baiduMap',
        pathMatch:'full'
      },
      {
        path:'baiduMap',
        component:BaiduMapComponent
      },
      {
        path:'googleMap',
        component:GoogleMapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
