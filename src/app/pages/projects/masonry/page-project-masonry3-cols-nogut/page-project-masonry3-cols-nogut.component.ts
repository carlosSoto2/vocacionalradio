import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-project-masonry3-cols-nogut',
  templateUrl: './page-project-masonry3-cols-nogut.component.html',
  styleUrls: ['./page-project-masonry3-cols-nogut.component.css']
})
export class PageProjectMasonry3ColsNogutComponent implements OnInit {

  @Input() data: any;
  @Input() shadow: any;
  @Input() gap: any;
  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/8.jpg",
    title: "Masonry 3 Columns No Gap",
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
    }
  ]
}
