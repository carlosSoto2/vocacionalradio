import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-specializations1',
  templateUrl: './section-specializations1.component.html',
  styleUrls: ['./section-specializations1.component.css']
})
export class SectionSpecializations1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
