import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-team-detail',
  templateUrl: './page-team-detail.component.html',
  styleUrls: ['./page-team-detail.component.css']
})
export class PageTeamDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/1.jpg",
    title: "Single Team Detail",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: " Team Detail"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  details = {
    image: "assets/images/our-team5/1.jpg",
    name: "Johnny Smith",
    role: "Architect",
    email: "7xteam@gmail.com",
    contact: "(+298) 012-3456-789",
    address: "756 Livingston Street, Brooklyn, NY 11201, US",
    website: "www.7xtheme-site.com",
    experience: {
      time: "15 Years",
      fields: [
        {
          title: "Architecher",
          percentage: "95"
        },
        {
          title: "Construction",
          percentage: "85"
        },
        {
          title: "Interior",
          percentage: "65"
        }
      ],
      summary: [
        {
          day: "01",
          month: "Jan",
          year: "2019",
          title: "Global Kitchen and Bath",
          description: "A multitask profession which creates any land in beautiful creation"
        },
        {
          day: "20",
          month: "Nov",
          year: "2017",
          title: "Kitchen & Bath Gallery",
          description: "Give your consent, we design a perfect bend choose the style."
        },
        {
          day: "28",
          month: "Dec",
          year: "2016",
          title: "International Fine Art",
          description: "Every work has its professional which can perform their task with all the best."
        }
      ]
    }
  }
}
