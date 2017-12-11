import {Component, OnInit} from '@angular/core';
// import * as $ from 'jquery';

const ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
// declare var $: any;

@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.scss']
})
export class RichTextComponent implements OnInit {

  constructor() {

    $(function () {
      console.log($('#p2p').html());

      ClassicEditor
        .create(document.querySelector('#editor'))
        .catch(error => {
          console.error(error);
        });
    });
  }

  ngOnInit() {
  }

}
