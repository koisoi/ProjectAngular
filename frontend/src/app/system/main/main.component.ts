import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination, Autoplay } from "swiper";


SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  ScreenWidth: any;
  fourEl: number = 4;


  constructor() {
    this.ScreenWidth = window.screen.width;
  }

  ngOnInit(): void {

    if (this.ScreenWidth <= 992) {
      this.fourEl = 3;
    }
    if (this.ScreenWidth <= 576) {
      this.fourEl = 2;
    }
  }



}
