import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-project-carousel1',
  templateUrl: './section-project-carousel1.component.html',
  styleUrls: ['./section-project-carousel1.component.css']
})
export class SectionProjectCarousel1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
