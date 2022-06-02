import {Component, HostListener, OnInit} from '@angular/core';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import {ViewportScroller} from "@angular/common";

SwiperCore.use([Pagination, Autoplay]);
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  ScreenWidth: any;
  fourEl: number = 3;
  scrolled:boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll(e: Event) {
    if (window.pageYOffset >= 400) {
      this.scrolled = true;
    }
    else {
      this.scrolled = false;
    };
  }


  constructor( private scroll: ViewportScroller) {
    this.ScreenWidth = window.screen.width;
  }

  ngOnInit(): void {
    if (this.ScreenWidth <= 992) {
      this.fourEl = 2;
    }
    if (this.ScreenWidth <= 576) {
      this.fourEl = 1;
    }
  }

  scrollToTop(): void {
    this.scroll.scrollToPosition([0, 0]);
  }
}
