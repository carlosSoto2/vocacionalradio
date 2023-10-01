import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services2',
  templateUrl: './services2.component.html',
  styleUrls: ['./services2.component.css']
})
export class Services2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/5.jpg",
    title: "Service Style Two",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Services 2"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  services = {
    title: "All Services",
    title2: "Services",
    services: [
      {
        serial: "01",
        icon: "flaticon-sketch",
        title: "Plans and Projects",
        description: "We provide a range of architectural 3D modeling services to our customers to aid the design, planning and..."
      },
      {
        serial: "02",
        icon: "flaticon-stairs",
        title: "Interior",
        description: "Analysis and planning services that help both the client and architects to work out the forthcoming project..."
      },
      {
        serial: "03",
        icon: "flaticon-window",
        title: "Exterior",
        description: "We offer comprehensive Architectural Engineering Services including Interior design, Master planning, 3D modeling..."
      },
      {
        serial: "04",
        icon: "flaticon-skyline",
        title: "Architecture",
        description: "Project management is the process by which our team plans and executes your project. We will develop it..."
      },
      {
        serial: "05",
        icon: "flaticon-bed",
        title: "Furniture",
        description: "Our team also provides consultations on all architectural issues, even if you need specific info about working..."
      },
      {
        serial: "06",
        icon: "flaticon-door",
        title: "Decoration",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us..."
      }
    ]
  }

  about = {
    title: "A small efficient interior design team.",
    description: "<p>Inteshape is a team of highly talented, experienced, and award-winning architects and designers. Our company has been the leading provider of architecture services to clients throughout the USA since 1999. We pay attention to every demand...</p> <ul class=\"list-angle-right anchor-line\"> <li><a>We provide a architectural 3D modeling services.</a></li> <li><a>Our specialists are ready to consult you on any topic.</a></li> <li><a>We develop and implement better interior design.</a></li> <li><a>We provide high-quality interior services for clients.</a></li> </ul>",
    media: "https://player.vimeo.com/video/34741214?color=ffffff&title=0&byline=0&portrait=0",
    experience: "25 Years"
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

  testimonials = {
    title: "Testimonial",
    testimonials: [
      {
        image: "assets/images/testimonials/pic1.jpg",
        role: "Architect",
        name: "Rosalina D. William",
        quotes: "Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support."
      },
      {
        image: "assets/images/testimonials/pic2.jpg",
        role: "Architect",
        name: "Mitchal Jhon",
        quotes: "Amazing fast and reliable customer support! The team of willing to go mile for customer service! Thanks!"
      },
      {
        image: "assets/images/testimonials/pic3.jpg",
        role: "Interior designer",
        name: "Barney Smith",
        quotes: "Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support."
      },
      {
        image: "assets/images/testimonials/pic4.jpg",
        role: "Architect",
        name: "Rosalina D. William",
        quotes: "Amazing fast and reliable customer support! The team of willing to go mile for customer service! Thanks!"
      }
    ]
  }
}
