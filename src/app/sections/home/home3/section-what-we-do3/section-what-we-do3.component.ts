import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-what-we-do3',
  templateUrl: './section-what-we-do3.component.html',
  styleUrls: ['./section-what-we-do3.component.css']
})
export class SectionWhatWeDo3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
