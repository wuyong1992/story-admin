import {Component, OnInit, ViewChild} from '@angular/core';
import {NzInputDirectiveComponent} from 'ng-zorro-antd';
import {TagService} from '../../service/tag.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit {

  constructor(private tagService: TagService) {
  }

  public tags = [];

  ngOnInit() {
    this.tagService.getTagList().subscribe(
      (value: any) => {
        console.log(value.data);
        let tagList = [];
        value.data.forEach(item => {
          this.tags.push(item.tagName);
        });
        console.log(this.tags);
      },
      error2 => {
        console.log(error2);
      },
      () => {
        console.log('http over');
      }
    );
  }


  public inputVisible = false;
  public inputValue = '';
  @ViewChild('input') input: NzInputDirectiveComponent;

  /* 删掉tag回调 */
  handleClose(removedTag: any): void {
    this.tags = this.tags.filter(tag => tag !== removedTag);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    // slice 字符串截取
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 10);
  }

  handleInputConfirm(): void {
    if (this.inputValue) {
      this.tags.push(this.inputValue);
    }
    this.inputValue = '';
    this.inputVisible = false;
  }

}
