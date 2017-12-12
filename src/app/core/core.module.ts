import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeadComponent} from './head/head.component';
import {SharedModule} from '../shared/shared.module';
import { FootComponent } from './foot/foot.component';
import { SidebarComponent } from './sidebar/sidebar.component';

/**
 * 主模块,放置只在系统中加载一次的组件或者服务
 */
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HeadComponent,
    FootComponent,
    SidebarComponent
  ],
  //导出，否则出了这个模块，其他模块不可使用
  exports:[
    HeadComponent,
    FootComponent,
    SidebarComponent
  ],
  providers: []
})
export class CoreModule {

  /**
   * 初始化，该模块在系统中只加载一次
   * @param {CoreModule} parent 主模块
   * 注解
   * 1.@SkipSelf() 去系统中当前注解的父级依赖池中寻找,避免无限循环
   * 2.Optional() 可选的，表示当前的依赖是可选，如果有就执行有的方法，没有执行没有的方法。避免第一次加载时不执行
   */
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载');
    }
  }
}
