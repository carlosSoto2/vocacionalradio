import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-what-we-do2',
  templateUrl: './section-what-we-do2.component.html',
  styleUrls: ['./section-what-we-do2.component.css']
})
export class SectionWhatWeDo2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
