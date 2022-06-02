import {Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-history-ngtu',
  templateUrl: './history-ngtu.component.html',
  styleUrls: ['./history-ngtu.component.scss']
})
export class HistoryNgtuComponent implements OnInit {

  scrolled: boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll(e: Event) {
    if (window.pageYOffset >= 400) {
      this.scrolled = true;
    }
    else {
      this.scrolled = false;
    };
  }

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToTop(): void {
    this.scroll.scrollToPosition([0, 0]);
  }

}

