import { Component, AfterViewInit } from '@angular/core';

declare  var jQuery:  any;
declare  var load_rev_slider_2:  any;

@Component({
  selector: 'app-section-slider2',
  templateUrl: './section-slider2.component.html',
  styleUrls: ['./section-slider2.component.css']
})
export class SectionSlider2Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        load_rev_slider_2();
        }, 100);
      })(jQuery);
    }

}
