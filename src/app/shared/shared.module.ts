import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * 共享模块
 */
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule
  ],
  declarations: []
})
export class SharedModule { }
