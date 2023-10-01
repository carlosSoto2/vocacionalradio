import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-shop-cart',
  templateUrl: './page-shop-cart.component.html',
  styleUrls: ['./page-shop-cart.component.css']
})
export class PageShopCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/5.jpg",
    title: "Shopping Cart",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Shopping Cart"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  cart = {
    items: [
      {
        image: "assets/images/cart/pic-1.jpg",
        product: "DJI Inspire 2",
        price: "35.00",
        stock: "In Stock",
        total: "Add to Cart"
      },
      {
        image: "assets/images/cart/pic-2.jpg",
        product: "Mavic Pro Platinum",
        price: "15.00",
        stock: "In Stock",
        total: "Add to Cart"
      }
    ],
    subtotal: "50.00",
    shipping: "20.00",
    total: "70.00"
  }
}
