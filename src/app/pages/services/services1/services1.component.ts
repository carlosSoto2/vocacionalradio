import { Component, OnInit } from '@angular/core';


declare function customInitFunctions():void;

@Component({
  selector: 'app-services1',
  templateUrl: './services1.component.html',
  styleUrls: ['./services1.component.css']
})
export class Services1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {


    customInitFunctions();


  }

  banner = {
    image: "assets/images/banner/pagebanner.png",
    title: "Programacion",
    description: "Disfrute de nuestra progrmacion variada",
    page: "Programacion"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  whatwedo = {
    title: "What We do",
    work: [
      {
        image: "assets/images/pic1.jpg",
        title: "Interior Design",
        serial: "01"
      },
      {
        image: "assets/images/pic2.jpg",
        title: "Architectur",
        serial: "02"
      },
      {
        image: "assets/images/pic3.jpg",
        title: "Floor Plan",
        serial: "03"
      }
    ],
    subtitle: "",
    description: ""
  }

  services = {
    title: "Nuestra Programacion",
    services: [
      {
        title: "Martes, Miercoles, Jueves  ",
        hour:"(9:00am a 2:00pm)",
        description: "Noticias, efemérides, estado Del tiempo, música.",
        locutor:"Bolivar Miranda",
        serial: "01"
      },
      {
        title: "Lunes y Viernes",
        hour:"9:00am A 2:00pm",
        description: "Noticias, clasificada en segmentos, música, deportes, entrevista.",
        locutor:"Raymond Méndez",
        serial: "02"
      },
      {
        title: "Jueves",
        hour:"9:00am A 5:00pm",
        description: "Contenido cristiano, noticias, reflexiones, Efemérides, música, entrevistas.",
        locutor:"Franklin Ramírez",
        serial: "03"
      },
      {
        title: "Lunes",
        hour:"2:00pm A 5:00pm",
        description: "Segmentos de motivación, música. ",
        locutor:"Norberto Soriano ",
        serial: "04"
      },
      {
        title: "Viernes",
        hour: "2:00pm A 5:00pm",
        description: "Deportes, mezcla de baladas nuevas con baladas del ayer. ",
        locutor:"Saulo Cuevas ",
        serial: "05"
      },
      {
        title: "Sabado",
        hour:"9:00am A 5:00pm",
        description: "Notas informativas, entrevista, historia cultural, curiosidades. ",
        locutor:"Guillermo Diaz",
        serial: "06"
      }
      ,
      {
        title: "Miercoles y Jueves",
        hour:"9:00am A 11:00am",
        description: "Entrevista Especial",
        locutor:"Katerinne Lorenzo",
        serial: "06"
      }
    ]
  }

  specializations = [
    {
      image: "assets/images/services/service-projects/1.jpg",
      serial: "01",
      icon: "flaticon-sketch",
      title: "Smartly Execute",
      description: "Our team also provides consultations on all architectural issues, even if you need."
    },
    {
      image: "assets/images/services/service-projects/2.jpg",
      serial: "02",
      icon: "flaticon-stairs",
      title: "Perfect Design",
      description: "We combine Interior and Exterior Design services and often provide them as a single solution."
    },
    {
      image: "assets/images/services/service-projects/3.jpg",
      serial: "03",
      icon: "flaticon-window",
      title: "Carefully planned",
      description: "Landscape plans for drainage problems may also entail planting beds away"
    }
  ]

  clients = [
    {
      image:"assets/images/client-logo/dgev.png",
      url:"https://www.digev.mil.do/"

    },
    {
      image:"assets/images/client-logo/disponible.png",
      url:"https://www.digev.mil.do/"

    },
    {
      image:"assets/images/client-logo/disponible.png",
      url:"https://www.digev.mil.do/"

    },
    {
      image:"assets/images/client-logo/disponible.png",
      url:"https://www.digev.mil.do/"

    }
  ]
}


