import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-history',
  templateUrl: './page-history.component.html',
  styleUrls: ['./page-history.component.css']
})
export class PageHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/5.jpg",
    title: "Our History",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Our History"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  history = [
    {
      image: "assets/images/our-history/4.jpg",
      title: "Strategic Planning and Programming.",
      description: "I just wanted to say thank you and the team very much for the brilliant service around renovating the floors at our house. You were absolutely brilliant and we can see you’ve gone the extra mile matching the floors between rooms etc. You’ve kept the place really tidy too, cannot ask for more."
    },
    {
      image: "assets/images/our-history/1.jpg",
      title: "Concept Development.",
      description: "Fantastic service from start to finish. After our ceiling collapsed we never thought our damaged floor would look so good again. These guys worked in a tight time frame and were very accommodating to the other trades working in the same area to produce brilliant results and restore our badly damaged floor to look like new!"
    },
    {
      image: "assets/images/our-history/2.jpg",
      title: "Design Development.",
      description: "The floor looks magnificent and the parquet in the hall sets it off beautifully. Your men were excellent, you were delightful and nothing was too much trouble for you. You have very tidy workers, covering everything, and the house was left in a good shape as the condition allowed."
    },
    {
      image: "assets/images/our-history/3.jpg",
      title: "Construction Documentation.",
      description: "I just wanted to say thank you and the team very much for the brilliant service around renovating the floors at our house. You were absolutely brilliant and we can see you’ve gone the extra mile matching the floors between rooms etc. You’ve kept the place really tidy too, cannot ask for more."
    }
  ]
}
