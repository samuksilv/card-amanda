import { Component, ViewChild } from '@angular/core';
import 'hammerjs';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'card-amanda';
  images: Array<any> = [
    { index: 1, source: '../assets/images/card-1.png' },
    { index: 2, source: '../assets/images/card-2.png' },
    { index: 3, source: '../assets/images/card-3.png' },
    { index: 4, source: '../assets/images/card-4.png' },
    { index: 5, source: '../assets/images/card-5.png' },
    { index: 6, source: '../assets/images/card-6.png' },
    { index: 7, source: '../assets/images/card-7.png' },
    { index: 8, source: '../assets/images/card-8.png' },
    { index: 9, source: '../assets/images/card-9.png' },
    { index: 10, source: '../assets/images/card-10.png' },
    { index: 11, source: '../assets/images/card-11.png' },
    { index: 12, source: '../assets/images/card-12.png' },
    { index: 13, source: '../assets/images/card-13.png' },
    { index: 14, source: '../assets/images/card-14.png' },
    { index: 15, source: '../assets/images/card-15.png' },
    { index: 16, source: '../assets/images/card-16.png' },
    { index: 17, source: '../assets/images/card-17.png' },
    { index: 18, source: '../assets/images/card-18.png' },
    { index: 19, source: '../assets/images/card-19.png' },
    { index: 20, source: '../assets/images/card-20.png' },
    { index: 21, source: '../assets/images/card-21.png' },
    { index: 22, source: '../assets/images/card-22.png' },
    { index: 23, source: '../assets/images/card-23.png' },
    { index: 24, source: '../assets/images/card-24.png' },
    { index: 25, source: '../assets/images/card-25.png' },
    { index: 26, source: '../assets/images/card-26.png' },
    { index: 27, source: '../assets/images/card-27.png' },
    { index: 28, source: '../assets/images/card-28.png' },
  ];
  
  @ViewChild("carousel") carousel: NgbCarousel;

  constructor(config: NgbCarouselConfig){
    config.interval=0;
  }

  nextCard() {
    this.carousel.next();
  }

  previousCard() {    
    if(this.carousel.activeId!=='ngb-slide-0')
      this.carousel.prev();
  }

  
}
