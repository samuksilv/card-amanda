import { Component, ViewChild } from '@angular/core';
import 'hammerjs';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'card-amanda';

  @ViewChild("carousel") carousel: NgbCarousel;

  nextCard() {
    this.carousel.next();
  }

  previousCard() {
    this.carousel.prev();
  }

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
}
