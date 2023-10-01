import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-shop-description',
  templateUrl: './section-shop-description.component.html',
  styleUrls: ['./section-shop-description.component.css']
})
export class SectionShopDescriptionComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
