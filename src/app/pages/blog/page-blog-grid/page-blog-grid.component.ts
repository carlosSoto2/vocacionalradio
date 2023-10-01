import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-blog-grid',
  templateUrl: './page-blog-grid.component.html',
  styleUrls: ['./page-blog-grid.component.css']
})
export class PageBlogGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/7.jpg",
    title: "Blog Grid Style",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Blog Grid"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  blogs = [
    {
      image: "assets/images/blog/blog-grid/pic4.jpg",
      day: "05",
      month: "Sept",
      author: "John",
      comments: "05",
      title: "We’ll nail your next project, because nobody wants..."
    },
    {
      image: "assets/images/blog/blog-grid/pic1.jpg",
      day: "25",
      month: "Sept",
      author: "John",
      comments: "05",
      title: "Helping you and your house become better acquainted."
    },
    {
      image: "assets/images/blog/blog-grid/pic2.jpg",
      day: "26",
      month: "Sept",
      author: "John",
      comments: "05",
      title: "Creating quality urban lifestyles, building..."
    },
    {
      image: "assets/images/blog/blog-grid/pic3.jpg",
      day: "16",
      month: "Sept",
      author: "John",
      comments: "03",
      title: "When it comes to your house, don’t mess..."
    },
    {
      image: "assets/images/blog/blog-grid/pic4.jpg",
      day: "18",
      month: "Sept",
      author: "John",
      comments: "05",
      title: "Don’t get framed by the competition, trust our..."
    },
    {
      image: "assets/images/blog/blog-grid/pic5.jpg",
      day: "15",
      month: "Sept",
      author: "John",
      comments: "02",
      title: "We’re the construction kings, building up great..."
    }
  ]
}
