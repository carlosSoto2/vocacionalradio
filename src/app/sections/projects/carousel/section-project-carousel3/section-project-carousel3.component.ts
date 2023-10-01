import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-project-carousel3',
  templateUrl: './section-project-carousel3.component.html',
  styleUrls: ['./section-project-carousel3.component.css']
})
export class SectionProjectCarousel3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
