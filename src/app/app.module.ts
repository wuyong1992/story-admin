import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

import 'hammerjs';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddArticleService} from './service/add-article.service';

@NgModule({
  //声明：组件 指令 管道
  declarations: [
    AppComponent
  ],
  //声明：模块
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  //声明：服务
  providers: [
    AddArticleService
  ],
  //声明：主启动组件
  bootstrap: [AppComponent]
})
export class AppModule {
}
