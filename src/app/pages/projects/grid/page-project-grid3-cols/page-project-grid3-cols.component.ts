import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-project-grid3-cols',
  templateUrl: './page-project-grid3-cols.component.html',
  styleUrls: ['./page-project-grid3-cols.component.css']
})
export class PageProjectGrid3ColsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/3.jpg",
    title: "Grid 3 Columns",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: " Project With Grid 3 Columns"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  projects = [
    {
      category: "cat-1",
      title: "Interior Work Avroko",
      place: "Muscat, Sultanate of Oman",
      image: "assets/images/projects/portrait/pic1.jpg"
    },
    {
      category: "cat-2",
      title: "Vilters",
      place: "Muscat, Sultanate of Oman",
      image: "assets/images/projects/portrait/pic2.jpg"
    },
    {
      category: "cat-3",
      title: "Industrial Design",
      place: "Muscat, Sultanate of Oman",
      image: "assets/images/projects/portrait/pic3.jpg"
    },
    {
      category: "cat-4",
      title: "House Bluprint",
      place: "Muscat, Sultanate of Oman",
      image: "assets/images/projects/portrait/pic4.jpg"
    },
    {
      category: "cat-5",
      title: "Modern Bathroom",
      place: "Muscat, Sultanate of Oman",
      image: "assets/images/projects/portrait/pic5.jpg"
    },
    {
      category: "cat-4",
      title: "Bellevue Project",
      place: "Muscat, Sultanate of Oman",
      image: "assets/images/projects/portrait/pic6.jpg"
    },
    {
      category: "cat-3",
      title: "Qatar Pavilion",
      place: "Muscat, Sultanate of Oman",
      image: "assets/images/projects/portrait/pic7.jpg"
    },
    {
      category: "cat-2",
      title: "Museum",
      place: "Muscat, Sultanate of Oman",
      image: "assets/images/projects/portrait/pic8.jpg"
    },
    {
      category: "cat-1",
      title: "Modern house",
      place: "Muscat, Sultanate of Oman",
      image: "assets/images/projects/portrait/pic9.jpg"
    }
  ]
}
