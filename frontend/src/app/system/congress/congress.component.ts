import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-congress',
  templateUrl: './congress.component.html',
  styleUrls: ['./congress.component.scss']
})
export class CongressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
