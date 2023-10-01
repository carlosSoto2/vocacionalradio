import { Component, AfterViewInit } from '@angular/core';

declare  var jQuery:  any;
declare  var load_rev_slider_3:  any;

@Component({
  selector: 'app-section-slider3',
  templateUrl: './section-slider3.component.html',
  styleUrls: ['./section-slider3.component.css']
})
export class SectionSlider3Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        load_rev_slider_3();
        }, 100);
      })(jQuery);
    }

}
