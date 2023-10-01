import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-team2',
  templateUrl: './page-team2.component.html',
  styleUrls: ['./page-team2.component.css']
})
export class PageTeam2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/2.jpg",
    title: "Our Experts 2",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Team Style 2"
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
      role: "Architect"
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
      role: "Architect"
    }
  ]
}
