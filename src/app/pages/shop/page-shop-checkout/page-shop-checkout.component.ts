import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-shop-checkout',
  templateUrl: './page-shop-checkout.component.html',
  styleUrls: ['./page-shop-checkout.component.css']
})
export class PageShopCheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/5.jpg",
    title: "Checkout",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Checkout"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  order = {
    items: [
      {
        title: "Happy Ninja",
        price: "15.00"
      },
      {
        title: "Angry Ninja Black",
        price: "150.00"
      }
    ],
    subtotal: "165.00",
    shipping: "50.00",
    total: "215.00"
  }
}
