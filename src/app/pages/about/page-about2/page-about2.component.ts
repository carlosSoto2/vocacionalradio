import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-about2',
  templateUrl: './page-about2.component.html',
  styleUrls: ['./page-about2.component.css']
})
export class PageAbout2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/pagebanner.png",
    title: "About Company",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "About 2"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  about = {
    title: "A small efficient interior design team.",
    description: "<p>Inteshape is a team of highly talented, experienced, and award-winning architects and designers. Our company has been the leading provider of architecture services to clients throughout the USA since 1999. We pay attention to every demand...</p> <ul class=\"list-angle-right anchor-line\"> <li><a href='/about/about1'>We provide a architectural 3D modeling services.</a></li> <li><a href='/about/about1'>Our specialists are ready to consult you on any topic.</a></li> <li><a href='/about/about1'>We develop and implement better interior design.</a></li> <li><a href='/about/about1'>We provide high-quality interior services for clients.</a></li> </ul>",
    media: "https://youtu.be/OmI7B6R6EmQ?t=154",
    experience: "25 Years"
  }

  whatwedo = {
    title: "What We Do",
    work: [
      {
        image: "assets/images/services/service-projects/1.jpg",
        serial: "01",
        title: "Architecture"
      },
      {
        image: "assets/images/services/service-projects/2.jpg",
        serial: "02",
        title: "Planning"
      },
      {
        image: "assets/images/services/service-projects/3.jpg",
        serial: "03",
        title: "Exterior"
      },
      {
        image: "assets/images/services/service-projects/4.jpg",
        serial: "04",
        title: "Decoration"
      },
      {
        image: "assets/images/services/service-projects/5.jpg",
        serial: "05",
        title: "Interior Planing"
      },
      {
        image: "assets/images/services/service-projects/6.jpg",
        serial: "06",
        title: "Style Selection"
      },
      {
        image: "assets/images/services/service-projects/7.jpg",
        serial: "07",
        title: "Architecture"
      },
      {
        image: "assets/images/services/service-projects/8.jpg",
        serial: "08",
        title: "Planning"
      }
    ]
  }

  counter = [
    {
      count: "24",
      title: "Our Experience"
    },
    {
      count: "340",
      title: "Project Taken"
    },
    {
      count: "86",
      title: "Awards Won"
    },
    {
      count: "36K",
      title: "Twitter Followers"
    }
  ]

  team = {
    title: "Super Team",
    team: [
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
        image: "assets/images/our-team5/4.jpg",
        name: "Nich Jonas",
        role: "Architect"
      }
    ]
  }

  clients = {
    title: "Our Clients",
    title2: "Clients",
    clients: [
      "assets/images/client-logo/logo1.png",
      "assets/images/client-logo/logo2.png",
      "assets/images/client-logo/logo3.png",
      "assets/images/client-logo/logo4.png",
      "assets/images/client-logo/logo5.png",
      "assets/images/client-logo/logo6.png",
      "assets/images/client-logo/logo7.png",
      "assets/images/client-logo/logo8.png"
    ]
  }
}
