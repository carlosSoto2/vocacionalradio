import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.css']
})
export class Home4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  about = {
    title: "About us",
    subtitle: "We are competitive in architecture solutions",
    description: "Landscape design is a process of developing practical and pleasing outdoor living space. there are six principles of design that have been used by artists for centuries throughout all art forms, painting and floral design.",
    images: [
      {
        image: "assets/images/about-slider/1.jpg"
      },
      {
        image: "assets/images/about-slider/2.jpg"
      },
      {
        image: "assets/images/about-slider/3.jpg"
      },
      {
        image: "assets/images/about-slider/4.jpg"
      },
      {
        image: "assets/images/about-slider/5.jpg"
      }
    ]
  }

  whatwedo = {
    title: "What We do",
    work: [
      {
        image: "assets/images/pic1.jpg",
        title: "Interior Design",
        serial: "01"
      },
      {
        image: "assets/images/pic2.jpg",
        title: "Architectur",
        serial: "02"
      },
      {
        image: "assets/images/pic3.jpg",
        title: "Floor Plan",
        serial: "03"
      }
    ],
    subtitle: "We present the idea with impressive details.",
    description: "Vivid colors and abstract patterns, combined with unique uses of light, textures, and space, create an outdoor space that magnifies..."
  }

  testimonials = {
    experience: {
      title: "Infographic",
      items: [
        {
          count: "24",
          title: "Years of Experience"
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
          count: "36",
          title: "Twitter Followers"
        }
      ]
    },
    testimonials: {
      title: "Testimonial",
      content: [
        {
          image: "assets/images/testimonials/pic1.jpg",
          name: "Rosalina D. William",
          role: "Architect",
          quote: "“Amazing fast and reliable customer support! The team of developers are willing to go mile for customer service! Thanks! which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
        },
        {
          image: "assets/images/testimonials/pic2.jpg",
          name: "Mitchal Jhon",
          role: "Architect",
          quote: "“Amazing fast and reliable customer support! The team of developers are willing to go mile for customer service! Thanks! which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
        },
        {
          image: "assets/images/testimonials/pic3.jpg",
          name: "Barney Smith",
          role: "Interior designer",
          quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
        },
        {
          image: "assets/images/testimonials/pic4.jpg",
          name: "Rosalina D. William",
          role: "Architect",
          quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
        },
        {
          image: "assets/images/testimonials/pic3.jpg",
          name: "Rosalina D. William",
          role: "CEO, Intearch",
          quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
        }
      ]
    }
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

  projects = {
    title: "All Projects",
    projects: [
      {
        category: "col-one",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic1.jpg"
      },
      {
        category: "col-two",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic2.jpg"
      },
      {
        category: "col-three",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic3.jpg"
      },
      {
        category: "col-four",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic4.jpg"
      },
      {
        category: "col-three",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic5.jpg"
      },
      {
        category: "col-two",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic6.jpg"
      },
      {
        category: "col-one",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic7.jpg"
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
}
