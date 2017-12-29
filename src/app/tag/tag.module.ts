import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TagRoutingModule} from './tag-routing.module';
import {TagComponent} from './tag.component';
import {AddTagComponent} from './add-tag/add-tag.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TagRoutingModule
  ],
  declarations: [
    TagComponent,
    AddTagComponent
  ]
})
export class TagModule {
}
