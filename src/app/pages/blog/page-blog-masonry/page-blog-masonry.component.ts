import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-blog-masonry',
  templateUrl: './page-blog-masonry.component.html',
  styleUrls: ['./page-blog-masonry.component.css']
})
export class PageBlogMasonryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/9.jpg",
    title: "Blog Masonary Style",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Blog Masonry"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  blogs = [
    {
      image: "assets/images/blog/portrait/pic1.jpg",
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
      image: "assets/images/blog/portrait/pic2.jpg",
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
      image: "assets/images/blog/portrait/pic6.jpg",
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
