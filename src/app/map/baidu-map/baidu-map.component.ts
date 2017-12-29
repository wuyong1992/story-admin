import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

declare let BMap: any;

@Component({
  selector: 'app-baidu-map',
  templateUrl: './baidu-map.component.html',
  styleUrls: ['./baidu-map.component.scss']
})
export class BaiduMapComponent implements OnInit, AfterViewInit {

  h: string;

  constructor() {
  }

  ngOnInit() {
    console.log(BMap);
    let map = new BMap.Map('baiduMapContainer');
    let point = new BMap.Point(117.238986, 31.824726);
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.centerAndZoom(point, 15);
    let marker = new BMap.Marker(point);        // 创建标注
    map.addOverlay(marker);
    let opts = {
      width: 200,     // 信息窗口宽度
      height: 80,     // 信息窗口高度
      title: '<p style=\'font-size: 20px;color: brown\'>安徽众生集团</p> <br>'  // 信息窗口标题
    };
    let infoWindow = new BMap.InfoWindow('<p>地址：合肥市政务区华邦世贸城B座</p><p>电话：0551-63712128</p>', opts);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.h = $(window).height() - $('#story_header').height() - $('#story_foot').height() - 40 + 'px';
    });
  }


}
