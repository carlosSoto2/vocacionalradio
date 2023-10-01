import { Component, AfterViewInit } from '@angular/core';

declare  var jQuery:  any;
declare  var load_rev_slider_6:  any;

@Component({
  selector: 'app-section-slider6',
  templateUrl: './section-slider6.component.html',
  styleUrls: ['./section-slider6.component.css']
})
export class SectionSlider6Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        load_rev_slider_6();
        }, 100);
      })(jQuery);
    }

}
