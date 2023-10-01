import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  footerData = {
    backExists: "1",
    wallpaper: "assets/images/background/f-bg.jpg"
  }

  about = {
    image: "assets/images/background/bg5.jpg",
    title: "Our floors are designed to last a lifetime",
    description: "Since 1999, we have been providing great flooring solutions and customer service for homeowners and commercial clients. among flooring materials, none is more elegant and luxurious than natural stone."
  }

  whatwedo = {
    title: "What We Do",
    work: [
      {
        title: "Architecture",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us...",
        serial: "01"
      },
      {
        title: "Planning",
        description: "Landscape plans for drainage problems may also entail planting beds away from the home’s foundation.",
        serial: "02"
      },
      {
        title: "Exterior",
        description: "We offer comprehensive Architectural Engineering Services including Interior design, Master planning...",
        serial: "03"
      },
      {
        title: "Decoration",
        description: "We provide a range of architectural 3D modeling services to our customers to aid the design, planning...",
        serial: "04"
      },
      {
        title: "Interior Planing",
        description: "Project management is the process by which our team plans and executes your project. We will develop...",
        serial: "05"
      },
      {
        title: "Style Selection",
        description: "Our team also provides consultations on all architectural issues, even if you need specific info about working...",
        serial: "06"
      }
    ]
  }

  projects = {
    title: "Our Projects",
    projects: [
      {
        category: "cat-1",
        image: "assets/images/projects/portrait/pic1.jpg",
        title: "Interior Work Avroko",
        place: "Muscat, Sultanate of Oman"
      },
      {
        category: "cat-2",
        image: "assets/images/projects/portrait/pic2.jpg",
        title: "Vilters",
        place: "Muscat, Sultanate of Oman"
      },
      {
        category: "cat-3",
        image: "assets/images/projects/portrait/pic3.jpg",
        title: "Industrial Design",
        place: "Muscat, Sultanate of Oman"
      },
      {
        category: "cat-4",
        image: "assets/images/projects/portrait/pic4.jpg",
        title: "House Bluprint",
        place: "Muscat, Sultanate of Oman"
      },
      {
        category: "cat-5",
        image: "assets/images/projects/portrait/pic5.jpg",
        title: "Modern Bathroom",
        place: "Muscat, Sultanate of Oman"
      },
      {
        category: "cat-4",
        image: "assets/images/projects/portrait/pic6.jpg",
        title: "Bellevue Project",
        place: "Muscat, Sultanate of Oman"
      },
      {
        category: "cat-3",
        image: "assets/images/projects/portrait/pic7.jpg",
        title: "Qatar Pavilion",
        place: "Muscat, Sultanate of Oman"
      },
      {
        category: "cat-2",
        image: "assets/images/projects/portrait/pic8.jpg",
        title: "Museum",
        place: "Muscat, Sultanate of Oman"
      },
      {
        category: "cat-1",
        image: "assets/images/projects/portrait/pic9.jpg",
        title: "Modern house",
        place: "Muscat, Sultanate of Oman"
      }
    ]
  }

  team = {
    title: "Our Experts",
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
      }
    ]
  }

  services = {
    title: "Services",
    services: [
      {
        image: "assets/images/services/service-projects/1.jpg",
        serial: "01",
        icon: "flaticon-sketch",
        title: "Plans and Projects",
        description: ""
      },
      {
        image: "assets/images/services/service-projects/2.jpg",
        serial: "02",
        icon: "flaticon-stairs",
        title: "Interior",
        description: ""
      },
      {
        image: "assets/images/services/service-projects/3.jpg",
        serial: "03",
        icon: "flaticon-window",
        title: "Exterior",
        description: ""
      },
      {
        image: "assets/images/services/service-projects/4.jpg",
        serial: "04",
        icon: "flaticon-skyline",
        title: "Architecture",
        description: ""
      },
      {
        image: "assets/images/services/service-projects/5.jpg",
        serial: "05",
        icon: "flaticon-bed",
        title: "Furniture",
        description: ""
      },
      {
        image: "assets/images/services/service-projects/7.jpg",
        serial: "06",
        icon: "flaticon-door",
        title: "Decoration",
        description: ""
      }
    ]
  }

  blogs = {
    title: "Blog",
    blogs: [
      {
        image: "assets/images/blog/blog-grid/pic4.jpg",
        day: "05",
        month: "Sept",
        author: "John",
        comments: "05",
        title: "We’ll nail your next project, because nobody wants..."
      },
      {
        image: "assets/images/blog/blog-grid/pic2.jpg",
        day: "25",
        month: "Sept",
        author: "John",
        comments: "05",
        title: "Flooring Pro's Secrets That Can Raise Your Home Value..."
      },
      {
        image: "assets/images/blog/blog-grid/pic3.jpg",
        day: "05",
        month: "Sept",
        author: "John",
        comments: "05",
        title: "Best Laminate & Hardwood Flooring Trends For 2022..."
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
