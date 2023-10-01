import { Component, OnInit } from '@angular/core';

declare function customInitFunctions():void;

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {


  constructor() { }

  ngOnInit(): void {
    customInitFunctions();

  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  about = {
    title: "Nosotros",
    subtitle: "Vocacional Radio",
    description: "Somos la emisora oficial de La Dirección General de las Escuelas Vocacionales de las Fuerzas Armadas y la Policía Nacional (DIGEV), nuestra programación está enfocada a programas educativos culturales, musicales y de orientación, con la participación de profesionales de diferentes áreas del mundo académico del país.",
    images: [
      {
        image: "assets/images/about-slider/1.png"
      },
      {
        image: "assets/images/about-slider/2.png"
      },
      {
        image: "assets/images/about-slider/3.png"
      },
      {
        image: "assets/images/about-slider/4.png"
      }
      ,
      // {
      //   image: "assets/images/about-slider/5.jpg"
      // }
    ]
  }

  whatwedo = {
    title: "Nuestra Pasion",
    work: [
      {
        image: "assets/images/what-we-do/whatwedo1.png",
        // title: "Interior Design",
        serial: "01"
      },
      {
        image: "assets/images/what-we-do/whatwedo3.png",
        // title: "Architectur",
        serial: "02"
      },
      {
        image: "assets/images/what-we-do/whatwedo5.png",
        // title: "Floor Plan",
        serial: "03"
      }
    ],
    // subtitle: "We present the idea with impressive details.",
    // description: "Vivid colors and abstract patterns, combined with unique uses of light, textures, and space, create an outdoor space that magnifies..."
  }

  testimonials = {
    experience: {
      title: "Academicos",
      items: [
        {
          count: "420,849",
          title: "Egresados desde 1966 a 2023"
        },
        {
          count: "3,279",
          title: "Cursos Talleres de Capacitaciones"
        },
        // {
        //   count: "36",
        //   title: "Twitter Followers"
        // }
      ]
    },
    testimonials: {
      title: "Testimonios",
      content: [
        {
          image: "assets/images/testimonials/fran-tapia.png",
          name: "Fran Tapia",
          role: "Refrigeracion",
          quote: "“Me motivo a estudiar refrigeración la falta de empleo que hay en la sociedad, ya que aquí puedo agotar el tiempo, porque no tengo trabajo, y también  obtengo nuevos conocimientos y le puedo sacar provecho. Gracias a las Escuelas Vocacionales de las Fuerzas Armadas y Policía Nacional luego de capacitarme puede emprender en mi propio negocio. ”"
        },
        {
          image: "assets/images/testimonials/eulalia-pimentel.png",
          name: "Eulalia Pimentel",
          role: "Idiomas",
          quote: "“Para mí, las Escuelas Vocacionales son muy importantes ya que nos ofrecen muchas oportunidades para que podamos ser alguien en el futuro. Y aprender el idioma english es fundamental para las personas.”"
        },
        {
          image: "assets/images/testimonials/Mayrenis-Guerrero.png",
          name: "Mayrenis Guerrero",
          role: "Masaje Corporal",
          quote: "“En primero lugar para enriquecer mis conocimientos, ya que tengo mi propio negocio y segundo porque me gusta este taller de masaje corporal, la medicina y spa. Y gracias a la Escuelas Vocacionales puedo capacitarme más. ”"
        },
        {
          image: "assets/images/testimonials/Felipe-Silverio.png",
          name: "Felipe Silverio Ramírez ",
          role: "Tecnico",
          quote: "“Me siento muy contento por estar capacitándome en las Escuelas Vocacionales, es una gran oportunidad con todo absolutamente gratis, y luego de adquirir nuevos conocimientos puedo emprender en mi propio negocio.”"
        },
        {
          image: "assets/images/testimonials/Iris-Sierra.png",
          name: "Iris Sierra Diaz ",
          role: "Belly Dance",
          quote: "“La danza es para mí un arte, llena mis expectativas, me cambio la vida por completo emocional y físicamente; gracias a las Escuelas Vocacionales por la oportunidad. ”"
        }
      ]
    }
  }

  services = {
    title: "All Services",
    title2: "Services",
    services: [
      {
        serial: "01",
        icon: "flaticon-sketch",
        title: "Plans and Projects",
        description: "We provide a range of architectural 3D modeling services to our customers to aid the design, planning and..."
      },
      {
        serial: "02",
        icon: "flaticon-stairs",
        title: "Interior",
        description: "Analysis and planning services that help both the client and architects to work out the forthcoming project..."
      },
      {
        serial: "03",
        icon: "flaticon-window",
        title: "Exterior",
        description: "We offer comprehensive Architectural Engineering Services including Interior design, Master planning, 3D modeling..."
      },
      {
        serial: "04",
        icon: "flaticon-skyline",
        title: "Architecture",
        description: "Project management is the process by which our team plans and executes your project. We will develop it..."
      },
      {
        serial: "05",
        icon: "flaticon-bed",
        title: "Furniture",
        description: "Our team also provides consultations on all architectural issues, even if you need specific info about working..."
      },
      {
        serial: "06",
        icon: "flaticon-door",
        title: "Decoration",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us..."
      }
    ]
  }

  projects = {
    title: "All Projects",
    projects: [
      {
        category: "col-one",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic1.jpg"
      },
      {
        category: "col-two",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic2.jpg"
      },
      {
        category: "col-three",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic3.jpg"
      },
      {
        category: "col-four",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic4.jpg"
      },
      {
        category: "col-three",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic5.jpg"
      },
      {
        category: "col-two",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic6.jpg"
      },
      {
        category: "col-one",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic7.jpg"
      }
    ]
  }

  clients = {
    title: "Patrocinadores",
    title2: "Clientes",
    clients: [
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

  team = {
    title: "Super Team",
    team: [
      {
        image: "assets/images/our-team5/1.jpg",
        name: "Johnny Jackman",
        role: "Architect"
      },
      {
        image: "assets/images/our-team5/2.jpg",
        name: "Daniel Rickman",
        role: "Architect"
      },
      {
        image: "assets/images/our-team5/3.jpg",
        name: "Mark Norwich",
        role: "Architect"
      },
      {
        image: "assets/images/our-team5/4.jpg",
        name: "Nich Jonas",
        role: "Architect"
      }
    ]
  }
}
