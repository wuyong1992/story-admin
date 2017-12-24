import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from '../../../environments/environment';
import {AddArticleService} from '../../service/add-article.service';
// import * as $ from 'jquery';

// declare var $: any;

@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.scss']
})
export class RichTextComponent implements OnInit {

  @Output()
  froala: EventEmitter<string> = new EventEmitter();

  @Input()
  froalaText: string;
  // @Input()
  saveBtnClick: boolean;
  /*以流的形式订阅才有效果*/


  options: object;

  constructor(private addArticleService: AddArticleService) {
    this.initRichText();

  }

  ngOnInit() {
    this.addArticleService.isSaveArticleBtnClick.subscribe(
      data => {
        this.saveBtnClick = data;
        if (this.saveBtnClick) {
          this.froala.emit(this.froalaText);
        }
      }
    );
  }

  initRichText() {
    this.froalaText = '';
    let that = this;
    this.options = {
      height: 500,        //初始化高度
      language: 'zh_cn', //配置语言
      placeholderText: '请输入内容', // 文本框提示内容
      charCounterCount: true, // 是否开启统计字数
      //charCounterMax: 200, // 最大输入字数,目前只支持英文字母
      // 注意导航条的配置, 按照官方的文档,无法配置,只能使用toolbarButtons来配置了。
      // toolbarButtons: ['fullscreen', '|', 'bold', 'italic', 'underline', 'strikeThrough', 'align', 'insertLink', 'insertImage', 'insertHR', 'subscript', 'superscript'],
      codeMirror: true, // 高亮显示html代码
      codeMirrorOptions: { // 配置html代码参数
        tabSize: 4
      },
      // 上传图片，视频等稳健配置
      imageAllowedTypes: ['jpg', 'jpeg', 'png', 'gif', 'svg+xml'],
      imageUploadURL:environment.richTextImgUpload,
      imageUploadParams: {},//接口其他传参,默认为空对象{},
      imageMaxSize: 1024 * 1024 * 10,
      imagePaste: true,
      imageDefaultDisplay: 'block',
      // imageMultipleStyles: true,
      // imageAltButtons: ['imageBack']
      imageDefaultAlign: 'center',  //图片显示对齐方式
      imageDefaultWidth: 0,         //默认宽度，0表示不设置宽度
      //文件上传
      fileAllowedTypes: ['*'],
      fileMaxSize: 1073741824,  //1G 字节为单位
      fileUploadMethod: 'POST',
      fileUploadURL: environment.richTextImgUpload,

      //事件
      /*events: {
        'froalaEditor.keyup': function (e, editor,keyupEvent) {
          that.froala.emit(keyupEvent.target.innerHTML);
          //console.log(that.froalaText);
          //console.log(keyupEvent.target.innerHTML);
        },
        "froalaEditor.blur":function (e,editor,keyupEvent) {
          that.froala.emit(keyupEvent.target.innerHTML);
          //console.log(keyupEvent.target.innerHTML)
        }
      }*/
    };
  }


}
