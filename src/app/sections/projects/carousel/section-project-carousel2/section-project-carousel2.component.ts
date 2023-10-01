import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-project-carousel2',
  templateUrl: './section-project-carousel2.component.html',
  styleUrls: ['./section-project-carousel2.component.css']
})
export class SectionProjectCarousel2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
