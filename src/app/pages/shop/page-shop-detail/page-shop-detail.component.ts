import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-shop-detail',
  templateUrl: './page-shop-detail.component.html',
  styleUrls: ['./page-shop-detail.component.css']
})
export class PageShopDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/5.jpg",
    title: "Shop Detail",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Shop Detail"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  itemDetail = {
    productImages: [
      "assets/images/products/pic-1.jpg",
      "assets/images/products/pic-2.jpg",
      "assets/images/products/pic-3.jpg",
      "assets/images/products/pic-4.jpg",
      "assets/images/products/pic-5.jpg"
    ],
    productThumbs: [
      "assets/images/products/thumb/pic-1.jpg",
      "assets/images/products/thumb/pic-2.jpg",
      "assets/images/products/thumb/pic-3.jpg",
      "assets/images/products/thumb/pic-4.jpg",
      "assets/images/products/thumb/pic-5.jpg"
    ],
    rating: "4",
    reviewCount: "4",
    title: "Happy Ninja",
    oldPrice: "45",
    price: "36",
    description: "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p><p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>",
    sku: "05",
    categories: "Constrction Tools",
    stock: "500"
  }

  tabData = {
    description: [
      {
        key: "Size",
        value: "Small, Medium, Large & Extra Large"
      },
      {
        key: "Color",
        value: "Read, Blue, Green & Black"
      },
      {
        key: "Length",
        value: "35 cm"
      },
      {
        key: "Fabric",
        value: "Cotton, Silk & Synthetic"
      },
      {
        key: "Warranty",
        value: "6 Months"
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

  relatedProducts = [
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
    }
  ]
}
