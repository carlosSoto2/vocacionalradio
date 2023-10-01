import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-project-masonry3-cols',
  templateUrl: './page-project-masonry3-cols.component.html',
  styleUrls: ['./page-project-masonry3-cols.component.css']
})
export class PageProjectMasonry3ColsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/9.jpg",
    title: "Masonry With 3 Columns",
    url: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Project-Masonry"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  projects = [
    {
      category: "cat-1",
      image1: "assets/images/newspapers/diariolibre.png",
      image2: "assets/images/newspapers/diariolibre.png",
      title: "Diario Libre",
      url:"https://www.diariolibre.com/"
      // url: "Project management is the process by which our team plans and executes..."
    },
    {
      category: "cat-2",
      image1: "assets/images/newspapers/the-new-york-times.png",
      image2: "assets/images/newspapers/the-new-york-times.png",
      title: "The New York Times",
      url: "https://www.nytimes.com/"
    },
    {
      category: "cat-1",
      image1: "assets/images/newspapers/listindiario.png",
      image2: "assets/images/newspapers/listindiario.png",
      title: "Listin Diario",
      url:"https://listindiario.com/"
      // url: "We combine Interior and Exterior Design services and often provide..."
    },
    {
      category: "cat-1",
      image1: "assets/images/newspapers/periodicohoy.png",
      image2: "assets/images/newspapers/periodicohoy.png",
      title: "Hoy",
      url: "https://hoy.com.do/"
    },
    {
      category: "cat-2",
      image1: "assets/images/newspapers/usatoday.png",
      image2: "assets/images/newspapers/usatoday.png",
      title: "USA Today",
      url: "https://www.usatoday.com/"
    },

    {
      category: "cat-1",
      image1: "assets/images/newspapers/elnacional.jpeg",
      image2: "assets/images/newspapers/elnacional.jpeg",
      title: "El Nacional",
      url: "https://elnacional.com.do/"
    },
    {
      category: "cat-2",
      image1: "assets/images/newspapers/thebostonglobe.png",
      image2: "assets/images/newspapers/thebostonglobe.png",
      title: "The Boston Globe",
      url: "https://www.bostonglobe.com/"
    },
    {
      category: "cat-1",
      image1: "assets/images/newspapers/eldia.jpeg",
      image2: "assets/images/newspapers/eldia.jpeg",
      title: "El Dia",
      url: "https://eldia.com.do/"
    },
    {
      category: "cat-1",
      image1: "assets/images/newspapers/elnuevodiario.jpg",
      image2: "assets/images/newspapers/elnuevodiario.jpg",
      title: "El Nuevo Diario",
      url: "https://elnuevodiario.com.do/"
    },


    {
      category: "cat-1",
      image1: "assets/images/newspapers/elcaribe.png",
      image2: "assets/images/newspapers/elcaribe.png",
      title: "El Caribe",
      url: "https://www.elcaribe.com.do/"
    },

    {
      category: "cat-2",
      image1: "assets/images/newspapers/WashPostStacked.jpg",
      image2: "assets/images/newspapers/WashPostStacked.jpg",
      title: "The Washington Post",
      url: "https://www.washingtonpost.com/"
    },

    {
      category: "cat-2",
      image1: "assets/images/newspapers/El-Mundo.jpg",
      image2: "assets/images/newspapers/El-Mundo.jpg",
      title: "El Mundo",
      url: "https://www.elmundo.es/"
    },
    {
      category: "cat-2",
      image1: "assets/images/newspapers/larazon.png",
      image2: "assets/images/newspapers/larazon.png",
      title: "La Razon",
      url: "https://www.larazon.es/"
    },
    {
      category: "cat-2",
      image1: "assets/images/newspapers/correodelorinoco.png",
      image2: "assets/images/newspapers/correodelorinoco.png",
      title: "Correo del Orinoco",
      url: "http://www.correodelorinoco.gob.ve/"
    },
    {
      category: "cat-2",
      image1: "assets/images/newspapers/EL-COLOMBIANO-C.png",
      image2: "assets/images/newspapers/EL-COLOMBIANO-C.png",
      title: "El Colombiano",
      url: "https://www.elcolombiano.com/"
    }
  ]
}
