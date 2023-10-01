import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-blog-single',
  templateUrl: './page-blog-single.component.html',
  styleUrls: ['./page-blog-single.component.css']
})
export class PageBlogSingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/10.jpg",
    title: "Blog Single Style",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Blog Single"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  blog = {
    thumb: "assets/images/blog/default/thum1.jpg",
    day: "20",
    date: "October 2022",
    author: "Admin",
    area: "Architecture",
    title: "Blog post with image slider there are many variations of passages.",
    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</p><blockquote class=\"bdr-1 bdr-solid bdr-gray author-quote\"><h4 class=\"m-b0\">We let our quality work and commitment to customer satisfaction be our slogan. quality you deserve and dependability you can count on.<i class=\"fa fa-quote-left\"></i> </h4><div class=\"p-t15\"><strong>Jessica Mcdade</strong><span>Interior Designer</span></div></blockquote><div class=\"row\"><div class=\"col-md-6\"><div class=\"sx-box m-b30\"><div class=\"sx-media\"><img src=\"assets/images/blog/default/thum1.jpg\" alt=\"\"></div></div></div><div class=\"col-md-6\"><div class=\"sx-box m-b30\"><div class=\"sx-media\"><img src=\"assets/images/blog/default/thum2.jpg\" alt=\"\"></div></div></div></div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with the . Proin tincidunt tellus ac porta volutpat. Cras mattis congue lacus id bibendum. Mauris ut sodales libero. Maecenas feugiat sit amet enim in accumsan. Here, then, is what I wanted to tell you of my architecture. I created it with courage and idealism, but also with an awareness of the fact that what is important is life, friends, and attempting to make this unjust world a better place in which to live.</p>",
    tags: [
      "Kitchen",
      "Food",
      "Planining",
      "Between ",
      "Chairs",
      "Lawn",
      "Table",
      "Mantinance",
      "Room",
      "Landscape ",
      "Bedroom "
    ],
    similarBlogs: [
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
      }
    ],
    comments: [
      {
        profileImage: "assets/images/testimonials/pic4.jpg",
        date: "20 Oct 2022",
        username: "Schiocchet",
        comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        reply: [
          {
            profileImage: "assets/images/testimonials/pic3.jpg",
            date: "22 Oct 2022",
            username: "Brayden",
            comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
            reply: [
              {
                profileImage: "assets/images/testimonials/pic2.jpg",
                date: "24 Oct 2022",
                username: "Diego",
                comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
                reply: [] 
              }
            ]
          }
        ]
      }
    ]
  }
}
