import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about3',
  templateUrl: './section-about3.component.html',
  styleUrls: ['./section-about3.component.css']
})
export class SectionAbout3Component implements OnInit {

  @Input() data: any;
  @Input() colorInvert: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
