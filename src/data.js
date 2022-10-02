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
  { name: "Sobre Nosotros", href: "/" },
  { name: "Galería", href: "/" },
  { name: "Servicios", href: "/" },
  { name: "Reseñas", href: "/" },
  { name: "FAQ", href: "/" },
];

export const banner = {
  titlePart1: "Título",
  titlePart2: "– Título2",
  subtitle: "Lema - Descripción",
  textBtn: "Reserva",
  img: "",
};

export const about = {
  icon: UsersIcn,
  title: "El salón",
  subtitle1:
    "Descripción del salon - empresa. Descripción del salon - empresa. Descripción del salon - empresa. Descripción del salon - empresa. Descripción del salon - empresa. Descripción del salon - empresa. Descripción del salon - empresa. Descripción del salon - empresa. Descripción del salon - empresa. Descripción del salon - empresa. ",
  subtitle2:
    "Descripción del salon - empresa. Descripción del salon - empresa. Descripción del salon - empresa. Descripción del salon - empresa. Descripción del salon - empresa. Descripción del salon - empresa. Descripción del salon - empresa. Descripción del salon - empresa. ",
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
      name: "Basico",
      price: "000000",
      list: [
        { name: "Beneficio 1" },
        { name: "Beneficio 2" },
        { name: "Beneficio 3" },
      ],
      delay: 600,
    },
    {
      name: "Premium",
      price: "000000",
      list: [
        { name: "Beneficio 1" },
        { name: "Beneficio 2" },
        { name: "Beneficio 3" },
        { name: "Beneficio 4" },
      ],
      delay: 800,
    },
    {
      name: "Elite",
      price: "000000",
      list: [
        { name: "Beneficio 1" },
        { name: "Beneficio 2" },
        { name: "Beneficio 3" },
        { name: "Beneficio 4" },
        { name: "Beneficio 5" },
      ],
      delay: 1000,
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
      name: "Lauren K.",
      message:
        "“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”",
    },
    {
      image: CommunityImg3,
      name: "Jhon D.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
    {
      image: CommunityImg4,
      name: "Anne R.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
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
  btnText: "Reserva",
};

export const footer = {
  logo: Logo,
  copyrightText: "Copyright (c)",
};
