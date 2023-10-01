import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-blog-post-right-sidebar',
  templateUrl: './page-blog-post-right-sidebar.component.html',
  styleUrls: ['./page-blog-post-right-sidebar.component.css']
})
export class PageBlogPostRightSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/4.jpg",
    title: "Post With Right Sidebar",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Post right sidebar"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  blog = {
    thumb: "assets/images/blog/default/thum1.jpg",
    day: "20",
    date: "December 2022",
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

  sidebar = {
    priceRange: {
      min: "10",
      max: "100",
      minValue: "20",
      maxValue: "80"
    },
    recentPosts: [
      {
        image: "assets/images/blog/recent-blog/pic1.jpg",
        title: "Don’t get framed by the competition.",
        date: "25 Sep 2022"
      },
      {
        image: "assets/images/blog/recent-blog/pic2.jpg",
        title: "building your dream house shouldn’t",
        date: "25 Sep 2022"
      },
      {
        image: "assets/images/blog/recent-blog/pic3.jpg",
        title: "Helping you and your house.",
        date: "25 Sep 2022"
      }
    ],
    categories: [
      {
        title: "Home",
        value: "28"
      },
      {
        title: "Hotel",
        value: "05"
      },
      {
        title: "Rooms",
        value: "24"
      },
      {
        title: "Lawn",
        value: "15"
      },
      {
        title: "Appartment",
        value: "20"
      },
      {
        title: "Bathroom",
        value: "90"
      }
    ],
    archives: [
      "January 2022",
      "February 2022",
      "March 2022",
      "April 2022",
      "May 2022",
      "June 2022"
    ],
    gallery: [
      {
        thumb: "assets/images/gallery/pic1.jpg",
        src: "assets/images/gallery/thumb/pic1.jpg"
      },
      {
        thumb: "assets/images/gallery/pic2.jpg",
        src: "assets/images/gallery/thumb/pic2.jpg"
      },
      {
        thumb: "assets/images/gallery/pic3.jpg",
        src: "assets/images/gallery/thumb/pic3.jpg"
      },
      {
        thumb: "assets/images/gallery/pic4.jpg",
        src: "assets/images/gallery/thumb/pic4.jpg"
      },
      {
        thumb: "assets/images/gallery/pic5.jpg",
        src: "assets/images/gallery/thumb/pic5.jpg"
      },
      {
        thumb: "assets/images/gallery/pic6.jpg",
        src: "assets/images/gallery/thumb/pic6.jpg"
      },
      {
        thumb: "assets/images/gallery/pic7.jpg",
        src: "assets/images/gallery/thumb/pic7.jpg"
      },
      {
        thumb: "assets/images/gallery/pic8.jpg",
        src: "assets/images/gallery/thumb/pic8.jpg"
      }
    ],
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
    ]
  }
}
