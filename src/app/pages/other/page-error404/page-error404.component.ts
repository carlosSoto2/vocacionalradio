import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-error404',
  templateUrl: './page-error404.component.html',
  styleUrls: ['./page-error404.component.css']
})
export class PageError404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/8.jpg",
    title: "Error 404",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Error"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }
}
