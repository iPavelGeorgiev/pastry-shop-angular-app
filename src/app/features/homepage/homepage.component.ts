import { Component } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from '../../core/const';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  carouselData: any[] = CAROUSEL_DATA_ITEMS;
}
