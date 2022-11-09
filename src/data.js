// images
import Logo from "../src/assets/img/header/logoFizz.png";
import ResistanceImg from "../src/assets/img/workouts/resistance.png";
import BoxingImg from "../src/assets/img/workouts/boxing.png";
import BodyPumpImg from "../src/assets/img/workouts/body-pump.png";
import YogaImg from "../src/assets/img/workouts/yoga.png";
import FullBodyImg from "../src/assets/img/workouts/full-body.png";
import FitnessImg from "../src/assets/img/workouts/fitness.png";
import BattleRopeImg from "../src/assets/img/workouts/battle-rope.png";
import CommunityImg1 from "../src/assets/img/community/img1.png";
import CommunityImg2 from "../src/assets/img/community/img2.png";
import CommunityImg3 from "../src/assets/img/community/img3.png";
import CommunityImg4 from "../src/assets/img/community/img4.png";
import JoinImg from "../src/assets/img/join/woman.png";
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
  { name: "Sobre Nosotros", href: "#salonPage" },
  { name: "Galería", href: "#galeriaPage" },
  { name: "Servicios", href: "#serviciosPage" },
  { name: "Reseñas", href: "#resenasPage" },
  { name: "FAQ", href: "#faqPage" },
  { name: "Fechas Disponibles", href: "#fdPage" },
];

export const banner = {
  titlePart1: "Fizz",
  titlePart2: "Salón de eventos",
  subtitle: "Lema - Descripción",
  textBtn: "Más información",
  wpp: "https://api.whatsapp.com/send?phone=+5492995175495&text=%C2%A1Hola!%20Quiero%20mas%20informacion%20sobre%20el%20Salon",
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
      image: ResistanceImg,
      name: "Descripción",
    },
    {
      image: BoxingImg,
      name: "Descripción",
    },
    {
      image: BodyPumpImg,
      name: "Descripción",
    },
    {
      image: YogaImg,
      name: "Descripción",
    },
    {
      image: FullBodyImg,
      name: "Descripción",
    },
    {
      image: FitnessImg,
      name: "Descripción",
    },
    {
      image: BattleRopeImg,
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
        El salón se alquila con mesas, sillas, vajilla, mantelería y cortinado.`,
      wpp: "https://api.whatsapp.com/send?phone=+5492995175495&text=%C2%A1Hola!%20Quiero%20mas%20informacion%20sobre%20el%20Salon%20principal",
      delay: 500,
    },
    {
      price: "Salón pequeño",
      list: [
        { name: "Parrilla" },
        { name: "Living" },
        { name: "Metegol" },
        { name: "Jenga grande" },
        { name: "Rocola" },
        { name: "Frízer" },
        { name: "Microondas" },
        { name: "Heladera" },
        { name: "Mesas" },
        { name: "Sillas" },
      ],
      descrip: "*En caso de no necesitar algo de esto se puede retirar*",
      wpp: "https://api.whatsapp.com/send?phone=+5492995175495&text=%C2%A1Hola!%20Quiero%20mas%20informacion%20sobre%20el%20Salon%20peque%C3%B1o",
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
      ],
      descrip: "",
      wpp: "https://api.whatsapp.com/send?phone=+5492995175495&text=%C2%A1Hola!%20Quiero%20mas%20informacion%20sobre%20los%20Adicionables",
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
      wpp: "https://api.whatsapp.com/send?phone=+5492995175495&text=%C2%A1Hola!%20Quiero%20mas%20informacion%20sobre%20los%20Eventos%20infantiles",
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
      ],
      descrip: "Consulte para otros adicionables",
      wpp: "https://api.whatsapp.com/send?phone=+5492995175495&text=%C2%A1Hola!%20Quiero%20mas%20informacion%20sobre%20los%20Adicionables%20infantiles",
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
      name: "Marcos A.",
      message: "“Hermoso lugar, buen precio, dueños amables.”",
    },
    {
      image: CommunityImg3,
      name: "Marcos A.",
      message: "“Hermoso lugar, buen precio, dueños amables.”",
    },
    {
      image: CommunityImg4,
      name: "Marcos A.",
      message: "“Hermoso lugar, buen precio, dueños amables.”",
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: "FAQ",
  accordions: [
    {
      question: "¿Como puedo reservar?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "¿Como puedo reservar?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "¿Como puedo reservar?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "¿Como puedo reservar?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "¿Como puedo reservar?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "¿Como puedo reservar?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
  ],
};

export const join = {
  image: JoinImg,
  title: "¿Necesitas más información?",
  subtitle: "Subtitulo",
  btnText: "Fechas disponibles",
};

export const footer = {
  logo: Logo,
  copyrightText: "Copyright",
};
