import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageRoutingModule } from './image-routing.module';
import { ImageComponent } from './image.component';
import { UploadComponent } from './upload/upload.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ImageRoutingModule
  ],
  declarations: [ImageComponent, UploadComponent]
})
export class ImageModule { }
