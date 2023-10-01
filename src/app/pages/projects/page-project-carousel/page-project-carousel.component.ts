import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-project-carousel',
  templateUrl: './page-project-carousel.component.html',
  styleUrls: ['./page-project-carousel.component.css']
})
export class PageProjectCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/3.jpg",
    title: "Carousel All Type",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Project-Carousel"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  carousel1 = [
    {
      image1: "assets/images/projects/square/pic4.jpg",
      image2: "assets/images/projects/portrait/pic4.jpg",
      title: "Life style building",
      description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us..."
    },
    {
      image1: "assets/images/projects/square/pic9.jpg",
      image2: "assets/images/projects/portrait/pic9.jpg",
      title: "Modern Bathroom",
      description: "Landscape plans for drainage problems may also entail planting beds away from the home’s foundation."
    },
    {
      image1: "assets/images/projects/square/pic10.jpg",
      image2: "assets/images/projects/portrait/pic10.jpg",
      title: "Dream House",
      description: "We provide a range of architectural 3D modeling services to our customers to aid the design, planning..."
    },
    {
      image1: "assets/images/projects/square/pic6.jpg",
      image2: "assets/images/projects/portrait/pic6.jpg",
      title: "Bellevue Projects",
      description: "Project management is the process by which our team plans and executes your project. We will develop..."
    },
    {
      image1: "assets/images/projects/square/pic7.jpg",
      image2: "assets/images/projects/portrait/pic7.jpg",
      title: "Modish Interior",
      description: "Our team also provides consultations on all architectural issues, even if you need specific info..."
    },
    {
      image1: "assets/images/projects/square/pic8.jpg",
      image2: "assets/images/projects/portrait/pic8.jpg",
      title: "Vilters",
      description: "Landscape plans for drainage problems may also entail planting beds away from the home’s foundation."
    },
    {
      image1: "assets/images/projects/square/pic9.jpg",
      image2: "assets/images/projects/portrait/pic9.jpg",
      title: "Dream Home",
      description: "We provide a range of architectural 3D modeling services to our customers to aid the design, planning..."
    },
    {
      image1: "assets/images/projects/square/pic2.jpg",
      image2: "assets/images/projects/portrait/pic2.jpg",
      title: "Living Room",
      description: "Project management is the process by which our team plans and executes your project. We will develop..."
    }
  ]

  carousel2 = [
    {
      image: "assets/images/projects/portrait/pic1.jpg",
      title: "Interior Work Avroko",
      place: "Muscat, Sultanate of Oman"
    },
    {
      image: "assets/images/projects/portrait/pic2.jpg",
      title: "Vilters",
      place: "Muscat, Sultanate of Oman"
    },
    {
      image: "assets/images/projects/portrait/pic3.jpg",
      title: "Industrial Design",
      place: "Muscat, Sultanate of Oman"
    },
    {
      image: "assets/images/projects/portrait/pic4.jpg",
      title: "House Bluprint",
      place: "Muscat, Sultanate of Oman"
    },
    {
      image: "assets/images/projects/portrait/pic5.jpg",
      title: "Modern Bathroom",
      place: "Muscat, Sultanate of Oman"
    },
    {
      image: "assets/images/projects/portrait/pic6.jpg",
      title: "Bellevue Project",
      place: "Muscat, Sultanate of Oman"
    },
    {
      image: "assets/images/projects/portrait/pic7.jpg",
      title: "Qatar Pavilion",
      place: "Muscat, Sultanate of Oman"
    },
    {
      image: "assets/images/projects/portrait/pic8.jpg",
      title: "Museum",
      place: "Muscat, Sultanate of Oman"
    },
    {
      image: "assets/images/projects/portrait/pic9.jpg",
      title: "Modern house",
      place: "Muscat, Sultanate of Oman"
    }
  ]

  carousel3 = [
    {
      image: "assets/images/gallery/pic1.jpg",
      title: "Interior Work Avroko",
      description: "Many of our projects cannot be featured in this section due to the Security levels of the space."
    },
    {
      image: "assets/images/gallery/pic2.jpg",
      title: "Interior Work Avroko",
      description: "Many of our projects cannot be featured in this section due to the Security levels of the space."
    },
    {
      image: "assets/images/gallery/pic3.jpg",
      title: "Interior Work Avroko",
      description: "Many of our projects cannot be featured in this section due to the Security levels of the space."
    }
  ]
}
