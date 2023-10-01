import { Component, AfterViewInit } from '@angular/core';

declare  var jQuery:  any;
declare  var load_rev_slider_1:  any;

@Component({
  selector: 'app-section-slider1',
  templateUrl: './section-slider1.component.html',
  styleUrls: ['./section-slider1.component.css']
})
export class SectionSlider1Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        load_rev_slider_1();
        }, 100);
      })(jQuery);
    }
}
