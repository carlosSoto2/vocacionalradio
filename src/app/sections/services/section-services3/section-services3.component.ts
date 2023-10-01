import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-services3',
  templateUrl: './section-services3.component.html',
  styleUrls: ['./section-services3.component.css']
})
export class SectionServices3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
