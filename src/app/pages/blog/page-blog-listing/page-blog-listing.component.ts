import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-blog-listing',
  templateUrl: './page-blog-listing.component.html',
  styleUrls: ['./page-blog-listing.component.css']
})
export class PageBlogListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/8.jpg",
    title: "Blog List Style",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Blog Listing"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  blogs = [
    {
      images: [],
      animthumb: "",
      thumb: "",
      media: "",
      day: "20",
      date: "Dec 2022",
      author: "John",
      comments: "0",
      title: "Creating quality urban lifestyles, building stronger communities.",
      description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis"
    },
    {
      images: [],
      animthumb: "assets/images/blog/default/thum1.jpg",
      thumb: "",
      media: "",
      day: "20",
      date: "Dec 2022",
      author: "John",
      comments: "0",
      title: "Creating quality urban lifestyles, building stronger communities.",
      description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis"
    },
    {
      images: [
        "assets/images/blog/default/thum1.jpg",
        "assets/images/blog/default/thum2.jpg",
        "assets/images/blog/default/thum3.jpg"
      ],
      animthumb: "",
      thumb: "",
      media: "",
      day: "20",
      date: "Dec 2022",
      author: "John",
      comments: "0",
      title: "When it comes to your house, don’t mess with the trust the best",
      description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis"
    },
    {
      images: [],
      animthumb: "",
      thumb: "",
      media: "https://www.youtube.com/embed/7n6cpvIFdfY",
      day: "20",
      date: "Dec 2022",
      author: "John",
      comments: "0",
      title: "Making your vision come true, that is what we do.",
      description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis"
    },
    {
      images: [],
      animthumb: "",
      thumb: "",
      media: "https://player.vimeo.com/video/2215313",
      day: "20",
      date: "Dec 2022",
      author: "John",
      comments: "0",
      title: "Putting a plan to action, to assure your satisfaction!",
      description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis"
    },
    {
      images: [],
      animthumb: "",
      thumb: "https://img.youtube.com/vi/Oy2QIiSQT2U/0.jpg",
      media: "https://www.youtube.com/watch?v=OfFFZnOtqFQ",
      day: "20",
      date: "Dec 2022",
      author: "John",
      comments: "0",
      title: "You Tube Video don’t get framed by the competition, trust our solid reputation.",
      description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis"
    },
    {
      images: [],
      animthumb: "",
      thumb: "https://i.vimeocdn.com/video/497807626_590x332.jpg",
      media: "https://player.vimeo.com/video/112734492",
      day: "20",
      date: "Dec 2022",
      author: "John",
      comments: "0",
      title: "Vimeo Video don’t get framed by the competition, trust our solid reputation.",
      description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis"
    }
  ]

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
        date: "25 Dec 2022"
      },
      {
        image: "assets/images/blog/recent-blog/pic2.jpg",
        title: "building your dream house shouldn’t",
        date: "25 Dec 2022"
      },
      {
        image: "assets/images/blog/recent-blog/pic3.jpg",
        title: "Helping you and your house.",
        date: "25 Dec 2022"
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
