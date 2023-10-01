import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-shop-tabs',
  templateUrl: './section-shop-tabs.component.html',
  styleUrls: ['./section-shop-tabs.component.css']
})
export class SectionShopTabsComponent implements OnInit {

  @Input() data: any;
    
  constructor() { }

  ngOnInit(): void {
  }

}
