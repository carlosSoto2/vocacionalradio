import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-contact-us',
  templateUrl: './page-contact-us.component.html',
  styleUrls: ['./page-contact-us.component.css']
})
export class PageContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/9.jpg",
    title: "Contact Us Form",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Contact Us"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }
}
