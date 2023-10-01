import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-services2',
  templateUrl: './section-services2.component.html',
  styleUrls: ['./section-services2.component.css']
})
export class SectionServices2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
