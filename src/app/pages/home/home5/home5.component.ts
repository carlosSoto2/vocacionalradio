import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home5',
  templateUrl: './home5.component.html',
  styleUrls: ['./home5.component.css']
})
export class Home5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  footerData = {
    backExists: "1",
    wallpaper: "assets/images/background/f-bg.jpg"
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

  projects = {
    title: "All Projects",
    projects: [
      {
        category: "cat-1",
        image: "assets/images/projects/portrait/pic4.jpg",
        title: "Life style building"
      },
      {
        category: "cat-2",
        image: "assets/images/projects/square/pic9.jpg",
        title: "Modern Bathroom"
      },
      {
        category: "cat-3",
        image: "assets/images/projects/square/pic10.jpg",
        title: "Dream House"
      },
      {
        category: "cat-4",
        image: "assets/images/projects/portrait/pic6.jpg",
        title: "Bellevue Projects"
      },
      {
        category: "cat-5",
        image: "assets/images/projects/square/pic7.jpg",
        title: "Modish Interior<"
      },
      {
        category: "cat-4",
        image: "assets/images/projects/square/pic8.jpg",
        title: "Vilters"
      },
      {
        category: "cat-3",
        image: "assets/images/projects/portrait/pic9.jpg",
        title: "Dream Home"
      },
      {
        category: "cat-2",
        image: "assets/images/projects/square/pic2.jpg",
        title: "Living Room"
      },
      {
        category: "cat-3",
        image: "assets/images/projects/portrait/pic2.jpg",
        title: "Wall Interior"
      },
      {
        category: "cat-3",
        image: "assets/images/projects/portrait/pic3.jpg",
        title: "Queens Museum"
      },
      {
        category: "cat-1",
        image: "assets/images/projects/square/pic1.jpg",
        title: "Hotel Shears"
      },
      {
        category: "cat-2",
        image: "assets/images/projects/square/pic3.jpg",
        title: "Life style building"
      },
      {
        category: "cat-1",
        image: "assets/images/projects/portrait/pic4.jpg",
        title: "Life style building"
      },
      {
        category: "cat-2",
        image: "assets/images/projects/square/pic9.jpg",
        title: "Modern Bathroom"
      },
      {
        category: "cat-3",
        image: "assets/images/projects/square/pic10.jpg",
        title: "Dream House"
      }
    ]
  }

  similarproj = {
    title: "Similar Project",
    projects: [
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

  clients = [
    "assets/images/client-logo/1.png",
    "assets/images/client-logo/2.png",
    "assets/images/client-logo/3.png",
    "assets/images/client-logo/4.png",
    "assets/images/client-logo/5.png",
    "assets/images/client-logo/6.png"
  ]
}
