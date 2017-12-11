import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextComponent } from './rich-text/rich-text.component';

/**
 * 共享模块
 */
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    RichTextComponent
  ],
  exports:[
    CommonModule,
    RichTextComponent
  ]
})
export class SharedModule { }
