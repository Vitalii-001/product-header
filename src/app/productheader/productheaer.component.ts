import {Component, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'product-header',
  templateUrl: './productheader.component.html',
  styleUrls: ['./productheader.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductHeaderComponent {

    @Input() sliderValue: any;
  constructor() {

  }
}