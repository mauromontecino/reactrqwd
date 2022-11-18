// images
import Logo from "../src/assets/img/header/logoFizz.png";
import imag1 from "../src/assets/img/workouts/imag1.png";
import imag2 from "../src/assets/img/workouts/imag2.png";
import imag3 from "../src/assets/img/workouts/imag3.png";
import imag4 from "../src/assets/img/workouts/imag4.png";
import imag5 from "../src/assets/img/workouts/imag5.png";
import imag6 from "../src/assets/img/workouts/imag6.png";
import imag7 from "../src/assets/img/workouts/imag7.png";
import imag8 from "../src/assets/img/workouts/imag8.png";
import CommunityImg1 from "../src/assets/img/community/img1.png";
import CommunityImg2 from "../src/assets/img/community/img2.png";
import CommunityImg3 from "../src/assets/img/community/img3.png";
import CommunityImg4 from "../src/assets/img/community/img4.png";
import imgPrinc from "../src/assets/img/join/imgPrinc.png";
// icons
import UsersIcn from "../src/assets/img/about/icons/users-icn.svg";
import CalendarIcn from "../src/assets/img/workouts/icons/calendar.svg";
import PriceIcn from "../src/assets/img/pricing/icons/price.svg";
import CommunityIcn from "../src/assets/img/community/icons/community-icn.svg";
import QuestionMarkIcn from "../src/assets/img/faq/icons/question-mark.svg";

export const header = {
  logo: Logo,

  btnSignupText: "Contactanos",
};

export const nav = [
  { name: "Home", href: "/" },
  { name: "Sobre Nosotros", href: "/#salonPage" },
  { name: "Galería", href: "/#galeriaPage" },
  { name: "Servicios", href: "/#serviciosPage" },
  { name: "Reseñas", href: "/#resenasPage" },
  { name: "FAQ", href: "/#faqPage" },
  {
    name: "Fechas Disponibles",
    href: "https://salonfizz.com.ar/calendario/events/",
  },
];

export const banner = {
  titlePart1: "Fizz",
  titlePart2: "Salón de eventos",
  subtitle: "",
  textBtn: "Más información",
  wpp: "https://api.whatsapp.com/send?phone=+5492995175423&text=%C2%A1Hola!%20Quiero%20mas%20informacion%20sobre%20el%20Salon",
  img: "",
};

export const about = {
  icon: UsersIcn,
  title: "Trayectoria",
  subtitle1:
    "Somos una familia que hace 8 años estamos cumpliendo un sueño y gracias a las familias que han confiado en nosotros podemos seguir adelante y creciendo cada vez más. En estos años hemos realizado muchos y diversos eventos que nos han dado experiencias para estar preparados para todas las necesidades de las familias y empresas. ",
  subtitle2:
    "Hoy en dia contamos con el salón principal y con un salón de menor tamaño con parrilla para ofrecerles diferentes experiencias y que puedan festejar o realizar reuniones a su medida. ",
  link: "Reserva",
};

export const workouts = {
  icon: CalendarIcn,
  title: "Galería",
  programs: [
    {
      image: imag1,
      name: "Descripción",
    },
    {
      image: imag2,
      name: "Descripción",
    },
    {
      image: imag3,
      name: "Descripción",
    },
    {
      image: imag4,
      name: "Descripción",
    },
    {
      image: imag5,
      name: "Descripción",
    },
    {
      image: imag6,
      name: "Descripción",
    },
    {
      image: imag7,
      name: "Descripción",
    },
    {
      image: imag8,
      name: "Descripción",
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: "Servicios",
  plans: [
    {
      price: "Salón principal",
      list: [
        { name: "Comida (consultar menú) " },
        { name: "Servicio de mozos" },
        { name: "Limpieza de baños" },
        { name: "Guardias de seguridad" },
        { name: "DJ con luces" },
        { name: "Servicio de cocina para el armado de platos" },
        { name: "Livings en el patio" },
        { name: "Estacionamiento dentro del predio" },
      ],
      descrip: `Puede ser “completo”: con comida (consultar menú) y servicios.  O “con servicios”: es solo el personal. 
        En caso de no necesitar catering, se puede alquilar el salón con los servicios mencionados.
        El salón incluye mesas, sillas, vajilla, mantelería y cortinado blanco.`,
      wpp: "https://api.whatsapp.com/send?phone=+5492995175423&text=%C2%A1Hola!%20Quiero%20mas%20informacion%20sobre%20el%20Salon%20principal",
      delay: 500,
    },
    {
      price: "Quincho",
      list: [
        { name: "Parrilla" },
        { name: "Living" },
        { name: "Metegol" },
        { name: "Jenga grande" },
        { name: "Tejo y juegos de mesa" },
        { name: "Rocola" },
        { name: "Frízer" },
        { name: "Heladera" },
        { name: "Mesas" },
        { name: "Sillas" },
      ],
      descrip: "*En caso de no necesitar algo de esto se puede retirar*",
      wpp: "https://api.whatsapp.com/send?phone=+5492995175423&text=Hola!%20Quiero%20mas%20informacion%20sobre%20el%20Quincho",
      delay: 500,
    },
    {
      price: "Adicionables",
      list: [
        { name: "Comida y/o bebida" },
        { name: "Barra de tragos con o sin alcohol" },
        { name: "Lluvia de luces led" },
        { name: "Fundas y lazos para sillas" },
        { name: "Servilletas de tela" },
        { name: "Cascada de chocolate" },
        { name: "Juegos de niños" },
        { name: `Mesa dulce – candybar – tartas o postres` },
        { name: "Se puede adicionar mas cantidad de personas " },
        { name: "Mesas y sillas" },
        {
          name: "Descartables (vasos, platos, cucharas/tenedores, servilletas)",
        },
        { name: "Columnas de colores" },
        { name: "Alfombra roja" },
        { name: "Living dentro del salón" },
        { name: "Proyector" },
        { name: "Carrito de helados" },
        { name: "Telón con luces led" },
      ],
      descrip: "",
      wpp: "https://api.whatsapp.com/send?phone=+5492995175423&text=%C2%A1Hola!%20Quiero%20mas%20informacion%20sobre%20los%20Adicionables",
      delay: 500,
    },
  ],
};

export const pricing2 = {
  icon: PriceIcn,
  title: "Eventos infantiles",
  plans: [
    {
      price: "Cumple base",
      list: [
        { name: "3 mesas redondas de adultos, 1 mesa de niños" },
        { name: "Mesa cuadrada para la torta y sorpresitas" },
        { name: "Vasos de vidrio y plástico" },
        { name: "Mantelería (Color a elección)" },
        { name: "Atención de mesas y Cuidado de niños durante el cumpleaños" },
        { name: "Servicio de cocina" },
        { name: "Plaza blanda con juegos para todas las edades" },
        {
          name: "3 peloteros, Ping pong, metegol, tejo, jenga gigante, canchita de futbol",
        },
        { name: "Cama elástica con juegos para niños en el patio" },
      ],
      descrip: "Hasta 55 personas entre niños/as y adultos y 3 horas reloj.",
      wpp: "https://api.whatsapp.com/send?phone=+5492995175423&text=%C2%A1Hola!%20Quiero%20mas%20informacion%20sobre%20los%20Eventos%20infantiles",
      delay: 500,
    },
    {
      price: "Adicionables",
      list: [
        { name: "Combo de niños/as" },
        { name: "Cocción de panchos" },
        { name: "Combos de comida de adultos" },
        { name: "Bebidas" },
        { name: "Preparación de comidas (Pizza, hamburgueza, etc)" },
        { name: "Pelotero acuático en verano (Con toallas)" },
        { name: "Ampliar la capacidad de personas" },
        { name: "Cascada de chocolate o candy bar" },
        { name: "Helado" },
        { name: "Banners temáticos o cartel de feliz cumpleaños" },
      ],
      descrip: "Consulte para otros adicionables",
      wpp: "https://api.whatsapp.com/send?phone=+5492995175423&text=%C2%A1Hola!%20Quiero%20mas%20informacion%20sobre%20los%20Adicionables%20infantiles",
      delay: 500,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: "Reseñas",
  testimonials: [
    {
      image: CommunityImg1,
      name: "Marcos A.",
      message: "“Hermoso lugar, buen precio, dueños amables.”",
    },
    {
      image: CommunityImg2,
      name: "Laurita T.",
      message: `“Hermoso salón para festejar un cumpleaños de niños, tiene peloteros y juegos dentro y fuera del salón...
      Muy buena atención y ambientación.”`,
    },
    {
      image: CommunityImg3,
      name: "Falconero H.",
      message:
        "“Lugar muy lindo, ordenado, limpio. Peloteros nuevos y en cuanto a sus motores con protección ante accidentes. Fácil de llegar y estacionamiento en la calle muy amplio. La atención de la Dueña es magnífico! Dulce, simpática, agradable y muy muy atenta a todo. Las asistentes (mozo) lo mismo. Excelente su atención y amabilidad. Cuidando a los chicos en todo momento. Super super recomiendo el lugar.!”",
    },
    {
      image: CommunityImg4,
      name: "Julieta G.",
      message:
        "“Completo. Servicio de mozos. Cuidado protocolar. Muchos juegos juguetes y espacios confortables.”",
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: "FAQ",
  accordions: [
    {
      question: "¿Cuánto tiempo antes se puede reservar?",
      answer:
        "Las agendas para el año actual y el siguiente están abiertas todo el año. ",
    },
    {
      question: "¿Qué NO incluye el alquiler del salon base?",
      answer: "El salon NO incluye decoración, descartables, comida/bebida. ",
    },
    {
      question: "¿Qué días se puede acceder al salon para verlo?",
      answer:
        "Todos los días aunque la franja horaria puede variar. Consultar por wpp.",
    },
    {
      question: "Si entrego la seña, ¿Se congela el precio?",
      answer:
        "No, la seña solo es para reservar el lugar. Los precios se actualizan pero hay descuentos para las personas que reservan con anticipación.",
    },
    {
      question: "¿Cuánto tiempo antes del evento se puede ingresar al salón?",
      answer:
        "El salón abre sus puertas 15 minutos antes de cada evento. Sin excepción. ",
    },
    {
      question: "¿La decoración viene incluida?",
      answer:
        "No, la decoración no viene incluida. Sin embargo, podemos facilitarte varios contactos. ",
    },
    {
      question: "¿Los adicionales cuando se pueden abonar?",
      answer:
        "Se pueden abonar desde el momento de la reserva hasta la finalización del cumpleaños. ",
    },
    {
      question: "¿Hasta cuándo puedo avisar si quiero unos de los adicionales?",
      answer:
        "Es importante que si quieren algún adicional avisen 72hs antes para asegurarnos de poder brindárselos. ",
    },
  ],
};

export const join = {
  image: imgPrinc,
  title: "¿Necesitas más información?",
  subtitle: "Escribinos o consultá las",
  btnText: "Fechas disponibles",
};

export const footer = {
  logo: Logo,
  copyrightText: "Sitio web diseñado por ",
};
