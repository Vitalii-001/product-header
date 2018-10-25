import {Component, ViewEncapsulation, TemplateRef, ViewChild, ElementRef, Input} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'product-header',
  template: `
    <nav class="angular-app-header" [style.background-color]="'darkorchid'" [style.opacity]="sliderValue/100">
        <span class="title">Hello from Angular app</span>
    </nav>
  `,
  styles: [`
    .angular-app-header {
        padding: 20px;
    }

    .angular-app-header .title {
        font-size: 16px;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductHeaderComponent {

    @Input() sliderValue: any;
  constructor() {

  }
}