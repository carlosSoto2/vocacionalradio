import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-team1',
  templateUrl: './page-team1.component.html',
  styleUrls: ['./page-team1.component.css']
})
export class PageTeam1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/3.jpg",
    title: "Our Experts",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Team"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  team = [
    {
      image: "assets/images/our-team5/1.jpg",
      name: "Johnny Jackman",
      role: "Architect"
    },
    {
      image: "assets/images/our-team5/2.jpg",
      name: "Daniel Rickman",
      role: "Architect"
    },
    {
      image: "assets/images/our-team5/3.jpg",
      name: "Mark Norwich",
      role: "Finance"
    },
    {
      image: "assets/images/our-team5/4.jpg",
      name: "Nich Jonas",
      role: "Finance"
    },
    {
      image: "assets/images/our-team5/5.jpg",
      name: "Johnny Jackman",
      role: "Architect"
    },
    {
      image: "assets/images/our-team5/6.jpg",
      name: "Daniel Rickman",
      role: "Architect"
    },
    {
      image: "assets/images/our-team5/7.jpg",
      name: "Mark Norwich",
      role: "Finance"
    },
    {
      image: "assets/images/our-team5/8.jpg",
      name: "Nich Jonas",
      role: "Finance"
    }
  ]
}
