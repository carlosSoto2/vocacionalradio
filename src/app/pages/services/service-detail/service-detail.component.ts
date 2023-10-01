import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/4.jpg",
    title: "Service Details",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Service detail"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  moreServices = [
    "Architecture",
    "Interior",
    "Decoration",
    "Furniture",
    "Floor Plan",
    "Exterior"
  ]

  service = {
    thumb: "assets/images/gallery/pic5.jpg",
    title: "Interior design, a fine line with more shine a design gives you.",
    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p><h4 class=\"m-t30 sx-tilte\">Professional Interior Design Service</h4><div class=\"single-service-list\"><div class=\"row\"><div class=\"col-lg-6 col-md-12\"><ul class=\"list-angle-right anchor-line\"><li><a href='/services/services1'>We provide high quality design services.</a></li><li><a href='/services/services1'>We are confident about our projects.</a></li><li><a href='/services/services1'>A good Work Environment For work</a></li><li><a href='/services/services1'>Communication Skills to getting in touch</a></li><li><a href='/services/services1'> Renovations Benefit of Service</a></li></ul></div><div class=\"col-lg-6 col-md-12\"><ul class=\"list-angle-right anchor-line\"><li><a href='/services/services1'>Sustainability and modern tech.</a></li><li><a href='/services/services1'>A Career Overview opportunity Available</a></li><li><a href='/services/services1'>Scientific Skills For getting a better result</a></li><li><a href='/services/services1'> Historic Renovations and Restorations.</a></li><li><a href='/services/services1'>Project on time and Latest Design</a></li></ul></div></div></div><div class=\"sx-media sx-img-effect zoom-slow\"><div class=\"sx-thum-bx sx-img-overlay1 sx-img-effect yt-thum-box\"><img src=\"https://img.youtube.com/vi/Oy2QIiSQT2U/0.jpg\" alt=\"\"><a href=\"https://www.youtube.com/watch?v=OfFFZnOtqFQ\" class=\"mfp-video play-now\"><i class=\"icon fa fa-play\"></i><span class=\"ripple\"></span></a></div></div>",
    faq: [
      {
        title: "Choose between rates or instant payment",
        description: "Motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque."
      },
      {
        title: "Come to see a live preview",
        description: "Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success."
      },
      {
        title: "Choose the correct service",
        description: "The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese."
      }
    ],
    more: [
      {
        icon: "flaticon-door",
        title: "Decoration",
        description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning."
      },
      {
        icon: "flaticon-ruler-1",
        title: "Solution",
        description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning."
      }
    ]
  }
}
