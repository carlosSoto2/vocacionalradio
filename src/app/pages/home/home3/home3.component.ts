import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about = {
    title: "A small efficient interior design team.",
    description: "<p>Inteshape is a team of highly talented, experienced, and award-winning architects and designers. Our company has been the leading provider of architecture services to clients throughout the USA since 1999. We pay attention to every demand...</p> <ul class=\"list-angle-right anchor-line\"> <li><a href='/about/about1'>We provide a architectural 3D modeling services.</a></li> <li><a href='/about/about1'>Our specialists are ready to consult you on any topic.</a></li> <li><a href='/about/about1'>We develop and implement better interior design.</a></li> <li><a href='/about/about1'>We provide high-quality interior services for clients.</a></li> </ul>",
    media: "https://player.vimeo.com/video/34741214?color=ffffff&title=0&byline=0&portrait=0",
    experience: "25 Years"
  }

  awards = {
    title: "We Achieved",
    achievements: [
      {
        day: "01",
        month: "Oct",
        years: "2013",
        title: "Global Kitchen and Bath",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        day: "20",
        month: "Mar",
        years: "2014",
        title: "Kitchen & Bath Gallery",
        description: "A multitask profession which creates any land in beautiful creation"
      },
      {
        day: "28",
        month: "Aug",
        years: "2014",
        title: "International Fine Art",
        description: "Don’t know how to go with plan, give everything to interior design with calm."
      },
      {
        day: "20",
        month: "Oct",
        years: "2015",
        title: "Newyork Creative Art",
        description: "Every work has its professional which can perform their task with all the best standards."
      },
      {
        day: "27",
        month: "Nov",
        years: "2015",
        title: "Building Center of UAE",
        description: "Giving your home a new style every style. good design for good moments."
      },
      {
        day: "07",
        month: "Mar",
        years: "2016",
        title: "Art Contest in USA",
        description: "Interior design, a fine line with more shine a design gives you, your deam house"
      },
      {
        day: "19",
        month: "July",
        years: "2017",
        title: "Asia Creative Competition",
        description: "Give your consent, we design a perfect bend choose the style, we complete with our file"
      },
      {
        day: "27",
        month: "May",
        years: "2018",
        title: "Center of Gloucester",
        description: "Scrambled it to make a type specimen book. remaining essentially."
      }
    ]
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

  projects = {
    title: "Similar Project",
    projects: [
      {
        image1: "assets/images/projects/square/pic4.jpg",
        image2: "assets/images/projects/portrait/pic4.jpg",
        title: "Life style building",
        description: "We provide a range of architectural 3D modeling services to our customers to aid the design"
      },
      {
        image1: "assets/images/projects/square/pic9.jpg",
        image2: "assets/images/projects/portrait/pic9.jpg",
        title: "Modern Bathroom",
        description: "Analysis and planning services that help both the client and architects to work out the forthcoming project..."
      },
      {
        image1: "assets/images/projects/square/pic10.jpg",
        image2: "assets/images/projects/portrait/pic10.jpg",
        title: "Dream House",
        description: "We offer comprehensive Architectural Engineering Services including Interior design, Master planning."
      },
      {
        image1: "assets/images/projects/square/pic6.jpg",
        image2: "assets/images/projects/portrait/pic6.jpg",
        title: "Bellevue Projects",
        description: "Project management is the process by which our team plans and executes your project. We will develop it..."
      },
      {
        image1: "assets/images/projects/square/pic7.jpg",
        image2: "assets/images/projects/portrait/pic7.jpg",
        title: "Modish Interior",
        description: "Our team also provides consultations on all architectural issues, even if you need specific..."
      },
      {
        image1: "assets/images/projects/square/pic8.jpg",
        image2: "assets/images/projects/portrait/pic8.jpg",
        title: "Vilters",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us..."
      },
      {
        image1: "assets/images/projects/square/pic9.jpg",
        image2: "assets/images/projects/portrait/pic9.jpg",
        title: "Dream Home",
        description: "Project management is the process by which our team plans and executes your project. We will develop it..."
      },
      {
        image1: "assets/images/projects/square/pic2.jpg",
        image2: "assets/images/projects/portrait/pic2.jpg",
        title: "Living Room",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us..."
      }
    ]
  }

  blogs = {
    title: "Blog",
    blogs: [
      {
        images: [],
        thumb: "https://img.youtube.com/vi/Oy2QIiSQT2U/0.jpg",
        media: "https://www.youtube.com/watch?v=OfFFZnOtqFQ",
        day: "20",
        date: "Sep 2022",
        author: "John",
        comments: "0",
        title: "You don’t get framed by the Decor.",
        description: "Asperiores, tenetur, blanditiis, quaerat pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis"
      },
      {
        images: [
          "assets/images/blog/default/thum1.jpg",
          "assets/images/blog/default/thum2.jpg",
          "assets/images/blog/default/thum3.jpg"
        ],
        thumb: "",
        media: "",
        day: "20",
        date: "Sep 2022",
        author: "John",
        comments: "0",
        title: "When it comes to your house",
        description: "Asperiores, tenetur, blanditiis, quaerat pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis"
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

  pricing = {
    title: "Our Plans",
    plans: [
      {
        plan: "Basic",
        price: "$29",
        term: "Month",
        features: [
          "Phone & Email Support",
          "3 Social Account",
          "Branded Reports"
        ]
      },
      {
        plan: "Pro",
        price: "$39",
        term: "Month",
        features: [
          "Phone & Email Support",
          "3 Social Account",
          "Branded Reports"
        ]
      },
      {
        plan: "Premium",
        price: "$49",
        term: "Month",
        features: [
          "Phone & Email Support",
          "3 Social Account",
          "Branded Reports"
        ]
      }
    ]
  }

  clients = [
    "assets/images/client-logo/1.png",
    "assets/images/client-logo/2.png",
    "assets/images/client-logo/3.png",
    "assets/images/client-logo/4.png",
    "assets/images/client-logo/5.png",
    "assets/images/client-logo/6.png"
  ]
}
