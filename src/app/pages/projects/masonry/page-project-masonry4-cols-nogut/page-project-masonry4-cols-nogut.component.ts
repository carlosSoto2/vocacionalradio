import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-project-masonry4-cols-nogut',
  templateUrl: './page-project-masonry4-cols-nogut.component.html',
  styleUrls: ['./page-project-masonry4-cols-nogut.component.css']
})
export class PageProjectMasonry4ColsNogutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/10.jpg",
    title: "Masonry 4 Columns No Gap",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Project-Masonry"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  projects = [
    {
      category: "cat-1",
      image1: "assets/images/projects/portrait/pic4.jpg",
      image2: "assets/images/projects/portrait/pic4.jpg",
      title: "Life style building",
      description: "Project management is the process by which our team plans and executes..."
    },
    {
      category: "cat-2",
      image1: "assets/images/projects/square/pic9.jpg",
      image2: "assets/images/projects/square/pic9.jpg",
      title: "Modern Bathroom",
      description: "We combine Interior and Exterior Design services and often provide..."
    },
    {
      category: "cat-3",
      image1: "assets/images/projects/square/pic10.jpg",
      image2: "assets/images/projects/square/pic10.jpg",
      title: "Dream House",
      description: "Project management is the process by which our team plans and executes..."
    },
    {
      category: "cat-4",
      image1: "assets/images/projects/portrait/pic6.jpg",
      image2: "assets/images/projects/portrait/pic6.jpg",
      title: "Bellevue Projects",
      description: "Landscape plans for drainage problems may also entail planting beds..."
    },
    {
      category: "cat-5",
      image1: "assets/images/projects/square/pic7.jpg",
      image2: "assets/images/projects/square/pic7.jpg",
      title: "Modish Interior",
      description: "Our team also provides consultations on all architectural issues, even if you need..."
    },
    {
      category: "cat-4",
      image1: "assets/images/projects/square/pic8.jpg",
      image2: "assets/images/projects/square/pic8.jpg",
      title: "Vilters",
      description: "We combine Interior and Exterior Design services and often provide..."
    },
    {
      category: "cat-3",
      image1: "assets/images/projects/portrait/pic9.jpg",
      image2: "assets/images/projects/portrait/pic9.jpg",
      title: "Dream Home",
      description: "Our team also provides consultations on all architectural issues, even if you need..."
    },
    {
      category: "cat-2",
      image1: "assets/images/projects/square/pic2.jpg",
      image2: "assets/images/projects/square/pic2.jpg",
      title: "Living Room",
      description: "Landscape plans for drainage problems may also entail planting beds..."
    },
    {
      category: "cat-3",
      image1: "assets/images/projects/portrait/pic2.jpg",
      image2: "assets/images/projects/portrait/pic2.jpg",
      title: "Wall Interior",
      description: "Project management is the process by which our team plans and executes..."
    },
    {
      category: "cat-3",
      image1: "assets/images/projects/portrait/pic3.jpg",
      image2: "assets/images/projects/portrait/pic3.jpg",
      title: "Queens Museum",
      description: "We combine Interior and Exterior Design services and often provide..."
    },
    {
      category: "cat-1",
      image1: "assets/images/projects/square/pic1.jpg",
      image2: "assets/images/projects/square/pic1.jpg",
      title: "Hotel Shears",
      description: "Our team also provides consultations on all architectural issues, even if you need..."
    },
    {
      category: "cat-2",
      image1: "assets/images/projects/square/pic3.jpg",
      image2: "assets/images/projects/square/pic3.jpg",
      title: "Life style building",
      description: "We combine Interior and Exterior Design services and often provide..."
    }
  ]
}
