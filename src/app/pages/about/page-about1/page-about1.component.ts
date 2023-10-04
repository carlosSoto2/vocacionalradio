import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';


// declare function customInitFunctions():void;

declare var jQuery: any;
declare var initializeOnReady: any;
declare var initializeOnLoad: any;


@Component({
  selector: 'app-page-about1',
  templateUrl: './page-about1.component.html',
  styleUrls: ['./page-about1.component.css']
})
export class PageAbout1Component implements OnInit, AfterViewInit {

  constructor(private router: Router) { }



  ngAfterViewInit(): void {
    this.router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    )
    .subscribe(event => {
      this.reinitializeThings();
    });

    // customInitFunctions()
  }

  reinitializeThings() {
    console.log("reinitializeThings");
    (function ($) {
      setTimeout(function () {
        initializeOnLoad();
        initializeOnReady();
      }, 500);
    })(jQuery);
  }


  ngOnInit(): void {


    // customInitFunctions();
  }

  banner = {
    image: "assets/images/banner/pagebanner.png",
    title: "La Vocacional Radio",
    // description: "The essenc of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Nosotros"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  about = {
    image: "assets/images/background/radio-image445.webp",
    title: "Vocacional Radio",
    description: "Somos la emisora oficial de La Dirección General de las Escuelas Vocacionales de las Fuerzas Armadas y la Policía Nacional (DIGEV), VOCACIONALRADIO.COM, nuestra programación está enfocada a programas educativos culturales, musicales y de orientación, con la participación de profesionales de diferentes áreas del mundo académico del país. La idea fundamental de la instalación de esta emisora es que sirva de plataforma a los estudiantes, profesores y colaboradores de la institución a nivel nacional y nuestros oyentes, para que puedan difundir sus ideas, proyectos y acciones operativas e innovadoras realizadas en cada una de sus demarcaciones.",
    description2: "En 2022, se tuvo la iniciativa de incursionar con un medio propio pero diferente con ideas y filosofías bien definidas que refresque el espectro radial online como un aporte a la sociedad tanto educativamente como en motivación para que realicen sus labores de una forma animada y positiva. Bajo ésta responsabilidad y premisa se forma lo que es hoy VOCACIONALRADIO.COM, la cual se caracteriza por transmitir una programación  fundamentada en información, orientación, educación y entretenimiento, dirigida a la comunidad educativa técnico-profesional del país y el mundo. ",
    description3:"La Dirección General de las Escuelas Vocacionales de las Fuerzas Armadas y la Policía Nacional (DIGEV) es un organismo para dotar a los miembros de las Fuerzas Armadas, la Policía Nacional y personas de la clase civil de conocimientos necesarios permitiéndoles ejercer un oficio productivo. La DIGEV fue creada el día 10 de Mayo del año 1966 mediante la Ley No.205 emitida por el Presidente Provisional de la República, Lic. Héctor  García Godoy. Es una institución dependiente del Ministerio de Defensa (MIDE) de la Republica Dominicana, investida de personalidad jurídica, de carácter no lucrativo y patrimonio propio y dirigida por un Director General.",

  }

  whatwedo = {
    title: "Galeria de Fotos",
    work: [
      {
        image: "assets/images/what-we-do/whatwedo5.png",
        // title: "Interior Design",
        serial: "01"
      },
      {
        image: "assets/images/what-we-do/whatwedo6.png",
        // title: "Locutorur",
        serial: "02"
      },
      {
        image: "assets/images/what-we-do/whatwedo7.png",
        // title: "Floor Plan",
        serial: "03"
      }
    ],
    subtitle: "",
    description: ""
  }

  whatwedo2 = {
    title: "What We Do",
    work: [
      {
        title: "Mision",
        description: "Hacernos parte de nuestra audiencia, de su alegría diaria, de su convivir y que nuestra programación sirva además de entretener, también para culturizar, informar, orientar, motivar y guiar de una forma sana, basados en nuestra filosofía de transmitir buenas noticias con una actitud positiva y motivadora en el día a día de nuestros estudiantes, profesores y colaboradores de la institución a nivel nacional y nuestros oyentes, y que estos les permitan incorporarse al mercado laboral productivo, inculcando en ellos una cultura de emprendedurismo para fortalecer de este modo el desarrollo nacional.",
        serial: "01"
      },
      {
        title: "Vision",
        description: "Llegar a los más altos estándares de calidad en servicio a nuestra audiencia, con excelente sonido, fidelidad y ofreciendo información fresca, real, interesante, entregada con respeto y objetividad, de forma que la audiencia sea parte de la programación con su participación, ideas e inclusión en temas, propuestas y mejoras, y que esto conlleve al éxito de la radio y por ende de la sociedad.",
        serial: "02"
      },
      {
        title: "Valores",
        description1: "Lealtad",
        description2: "Disciplina",
        description3: "Credibilidad",
        description4: "Transparencia",
        description5: "Responsabilidad",
        description6: "Integridad",
        description7: "Profesionalidad",
        serial: "03"
      }
    ]
  }

  awards = {
    title: "Egresados de Convenio Digev-Propeep ",
    achievements: [
      {

        years: "2017",
        title: "417"
      },
      {
        years: "2021",
        title: "5,198"

      },
      {

        years: "2018",
        title: "1,910"
      },
      {

        years: "2022",
        title: "3,293"
      },
      {
        years: "2019",
        title: "8,191"
      },
      {

        years: "2023",
        title: "3,320"
      },
      {

        years: "2020",
        title: "3,293"
      },
      {

        years: "Total",
        title: "28,042"
      }
    ]
  }

  team = {
    title: "Nuestro Staff",
    team: [
      {
        image: "assets/images/our-team5/katerine-lorenzo.png",
        name: "Katerinne Lorenzo Mora ",
        role: "Encargada",
        facebook:"",
        twitter:"",
        instagram:""
      },
      {
        image: "assets/images/our-team5/1.jpg",
        name: "Ross Peña ",
        role: "Asesor",
        facebook:"https://www.facebook.com/ross.pena.3",
        twitter:"https://twitter.com/i/flow/login?redirect_after_login=%2Frosspea",
        instagram:"https://www.instagram.com/rosanopena/?hl=en"
      },
      {
        image: "assets/images/our-team5/1.jpg",
        name: "Leidy Minaya",
        role: "Coord. Administrativa",
        facebook:"",
        twitter:"",
        instagram:""
      },
      {
        image: "assets/images/our-team5/bolivar-miranda.png",
        name: "Bolívar Miranda",
        role: "Locutor",
        facebook:"",
        twitter:"",
        instagram:""
      },
      {
        image: "assets/images/our-team5/raymond-mendez.png",
        name: "Raymond Méndez",
        role: "Locutor",
        facebook:"",
        twitter:"",
        instagram:""
      },
      {
        image: "assets/images/our-team5/franklin-ramirez.png",
        name: "Franklin Ramírez",
        role: "Locutor",
        facebook:"",
        twitter:"",
        instagram:""
      },
      {
        image: "assets/images/our-team5/norberto-soriano.png",
        name: "Norberto Soriano",
        role: "Locutor",
        facebook:"",
        twitter:"",
        instagram:""
      },
      {
        image: "assets/images/our-team5/1.jpg",
        name: "Saulo Cuevas",
        role: "Locutor",
        facebook:"",
        twitter:"",
        instagram:""
      },
      {
        image: "assets/images/our-team5/guillermo-diaz.png",
        name: "Guillermo Díaz",
        role: "Locutor",
        facebook:"",
        twitter:"",
        instagram:""
      }
    ]
  }



  testimonials = {
    title: "Testimonios",
    testimonials: [
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
