import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about2',
  templateUrl: './section-about2.component.html',
  styleUrls: ['./section-about2.component.css']
})
export class SectionAbout2Component implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
