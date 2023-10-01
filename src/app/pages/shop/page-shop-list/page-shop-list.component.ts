import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-shop-list',
  templateUrl: './page-shop-list.component.html',
  styleUrls: ['./page-shop-list.component.css']
})
export class PageShopListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/5.jpg",
    title: "Shop List Style",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Shop List Style"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  shopItems = [
    {
      sale: "0",
      image: "assets/images/products/pic-1.jpg",
      title: "Happy Ninja",
      oldPrice: "",
      price: "36.00",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      sale: "1",
      image: "assets/images/products/pic-2.jpg",
      title: "Flying Ninja",
      oldPrice: "45.00",
      price: "36.00",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      sale: "0",
      image: "assets/images/products/pic-3.jpg",
      title: "Half White",
      oldPrice: "",
      price: "29.00",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      sale: "0",
      image: "assets/images/products/pic-4.jpg",
      title: "Woo Ninja",
      oldPrice: "",
      price: "59.00",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      sale: "1",
      image: "assets/images/products/pic-5.jpg",
      title: "Woo logo",
      oldPrice: "45.00",
      price: "36.00",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      sale: "0",
      image: "assets/images/products/pic-6.jpg",
      title: "Happy Ninja",
      oldPrice: "",
      price: "99.00",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      sale: "0",
      image: "assets/images/products/pic-7.jpg",
      title: "Woo Ninja",
      oldPrice: "",
      price: "45.00",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      sale: "0",
      image: "assets/images/products/pic-8.jpg",
      title: "Happy Ninja",
      oldPrice: "",
      price: "36.00",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      sale: "0",
      image: "assets/images/products/pic-1.jpg",
      title: "Danger black",
      oldPrice: "",
      price: "29.00",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      sale: "0",
      image: "assets/images/products/pic-2.jpg",
      title: "Happy Ninja",
      oldPrice: "",
      price: "59.00",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
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
