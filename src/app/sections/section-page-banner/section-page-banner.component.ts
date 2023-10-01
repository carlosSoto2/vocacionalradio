import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-page-banner',
  templateUrl: './section-page-banner.component.html',
  styleUrls: ['./section-page-banner.component.css']
})
export class SectionPageBannerComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
