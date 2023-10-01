import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-faq',
  templateUrl: './page-faq.component.html',
  styleUrls: ['./page-faq.component.css']
})
export class PageFaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/7.jpg",
    title: "Frequently Asked Questions",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "FAQ"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }
}
