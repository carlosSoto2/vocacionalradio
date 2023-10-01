import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-shop-related-products',
  templateUrl: './section-shop-related-products.component.html',
  styleUrls: ['./section-shop-related-products.component.css']
})
export class SectionShopRelatedProductsComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
