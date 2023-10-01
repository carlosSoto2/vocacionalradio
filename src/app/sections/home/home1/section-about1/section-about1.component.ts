import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about1',
  templateUrl: './section-about1.component.html',
  styleUrls: ['./section-about1.component.css']
})
export class SectionAbout1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
