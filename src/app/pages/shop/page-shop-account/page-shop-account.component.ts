import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-shop-account',
  templateUrl: './page-shop-account.component.html',
  styleUrls: ['./page-shop-account.component.css']
})
export class PageShopAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/5.jpg",
    title: "My Account",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "My Account"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }
}
