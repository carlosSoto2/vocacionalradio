import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-services1',
  templateUrl: './section-services1.component.html',
  styleUrls: ['./section-services1.component.css']
})
export class SectionServices1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
