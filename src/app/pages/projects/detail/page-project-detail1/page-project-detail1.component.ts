import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-project-detail1',
  templateUrl: './page-project-detail1.component.html',
  styleUrls: ['./page-project-detail1.component.css']
})
export class PageProjectDetail1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/2.jpg",
    title: "Project Details",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Project-detail"
  }

  footerData = {
    backExists: "0",
    wallpaper: "" 
  }

  project = {
    title: "A multitask profession which creates any land in beautiful creation",
    description: "Designers think everything done by someone else is awful, and that they could do it better themselves, which explains why I designed my own living room carpet, I suppose. the architect represents neither a Dionysian nor an Apollinian condition: here it is the mighty act of will, the will which moves mountains, the intoxication of the strong will, which demands artistic expression. The most powerful men have always inspired the architects; the architect has always been influenced by power.",
    date: "October 10, 2022",
    client: "Studio Massimo, Italy",
    type: "Contruction, Brading",
    location: "Mountain View CA 94043",
    year: "2022",
    title2: "Creating a sustainable future through building preservation, green architecture, and smart design",
    description2: "Designers think everything done by someone else is awful, and that they could do it better themselves, which explains why I designed my own living room carpet, I suppose. the architect represents neither a Dionysian nor an Apollinian condition: here it is the mighty act of will, the will which moves mountains, the intoxication of the strong will, which demands artistic expression. The most powerful men have always inspired the architects; the architect has always been influenced by power.",
    images: [
      "assets/images/projects/portrait/pic7.jpg",
      "assets/images/projects/portrait/pic4.jpg",
      "assets/images/projects/portrait/pic5.jpg"
    ],
    media: {
      thumb: "https://img.youtube.com/vi/Oy2QIiSQT2U/0.jpg",
      link: "https://www.youtube.com/watch?v=OfFFZnOtqFQ"
    }
  }

  similarProjects = [
    {
      image: "assets/images/projects/square/pic4.jpg",
      image2: "assets/images/projects/portrait/pic4.jpg",
      title: "Life style building",
      description: "Engineering your dreams with us the architect has always."
    },
    {
      image: "assets/images/projects/square/pic9.jpg",
      image2: "assets/images/projects/portrait/pic9.jpg",
      title: "Modern Bathroom",
      description: "Engineering your dreams with us the architect has always."
    },
    {
      image: "assets/images/projects/square/pic10.jpg",
      image2: "assets/images/projects/portrait/pic10.jpg",
      title: "Dream House",
      description: "Engineering your dreams with us the architect has always."
    },
    {
      image: "assets/images/projects/square/pic6.jpg",
      image2: "assets/images/projects/portrait/pic6.jpg",
      title: "Bellevue Projects",
      description: "Engineering your dreams with us the architect has always."
    },
    {
      image: "assets/images/projects/square/pic7.jpg",
      image2: "assets/images/projects/portrait/pic7.jpg",
      title: "Modish Interior",
      description: "Engineering your dreams with us the architect has always."
    },
    {
      image: "assets/images/projects/square/pic8.jpg",
      image2: "assets/images/projects/portrait/pic8.jpg",
      title: "Vilters",
      description: "Engineering your dreams with us the architect has always."
    },
    {
      image: "assets/images/projects/square/pic9.jpg",
      image2: "assets/images/projects/portrait/pic9.jpg",
      title: "Dream Home",
      description: "Engineering your dreams with us the architect has always."
    },
    {
      image: "assets/images/projects/square/pic2.jpg",
      image2: "assets/images/projects/portrait/pic2.jpg",
      title: "Living Room",
      description: "Engineering your dreams with us the architect has always."
    }
  ]
}
