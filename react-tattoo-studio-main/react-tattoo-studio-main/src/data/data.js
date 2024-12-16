// import Logo from "../asset/header/logo.svg";
import GalleryImg1 from "../asset/gallery/image9.webp";
import GalleryImg2 from "../asset/gallery/image10.jpeg";
import GalleryImg3 from "../asset/gallery/image12.avif";
import GalleryImg4 from "../asset/gallery/image13.webp";
import GalleryImg5 from "../asset/gallery/image14.jpg";
import GalleryImg6 from "../asset/gallery/image15.jpg";
import GalleryImg7 from "../asset/gallery/image17.jpeg";
import GalleryImg8 from "../asset/gallery/image18.jpeg";
import QuoteImg from "../asset/testimonial/quote.svg";
import { GrFacebookOption } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";

export const headerData = {};

export const navData = {
  items: [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/gallery", name: "Gallery" },
    { href: "/interview", name: "Interview" },
    { href: "/contacts", name: "Contact" },
  ],
};

export const socialData = [
  { href: "/", icon: <GrFacebookOption /> },
  { href: "/", icon: <IoLogoInstagram /> },
  { href: "/", icon: <IoLogoPinterest /> },
  { href: "/", icon: <IoLogoTwitter /> },
  { href: "/", icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: "#Tattoos.",
  subtitle:
    "Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.",
  btnText: "read more",
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: "#beeyourstory",
  subtitle1:
    " Courageously own and share your unique stroy ,embracing the beauty of your individuality and the art of self-expression.",
  subtitle2:
    "Recognise that your stroy is a work of art, worthy of being celebratre,shared,and worm with pride.",
  btnText: "Know more",
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: "Check my gallery:",
  btnText: "View all",
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 350,
      height: 500,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 450,
      height: 480,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    "“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”",
  btnText: "Watch it now",
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "meet the team.They're fantastic.The entire team is extremely kind and friendly.They will properly consult with you.They're great at what they do! And it's unique.",
    name: "Doctor Woo",
    occupation: "Tattoo Artist",
    scroll: ">>>"
  },
  {
    quoteImg: QuoteImg,
    message:
      "Tattoo is a emotion it is create in body for life time ",
    name: "Doctor Woo",
    occupation: "Tattoo Artist",
    scroll: "<<<",
  },
];

export const contactData = {
  title: "Get in touch with me:",
  info: [
    {
      title: "LA office",
      subtitle:
        "In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "784 Norman Street, Los Angeles",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+49 93 30493943",
      },
      email: {
        icon: <FaEnvelope />,
        address: "contact@yourcompany.com",
      },
      link: "Get location",
    },
    {
      title: "NYC office",
      subtitle:
        "Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "1630 Elm Drive, New York City",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+49 34 36573355",
      },
      email: {
        icon: <FaEnvelope />,
        address: "contact@yourcompany.com",
      },
      link: "Get location",
    },
  ],
  form: {
    name: "Write your name here",
    email: "Write your email address",
    message: "Write your messages here",
    btnText: "Send it",
  },
};

export const footerData = {
  about: {
    title: "About void tattoo",
    subtitle:
      "Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus",
    address: {
      icon: <FaMapMarkerAlt />,
      name: "1630 Elm Drive, New York City",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "+49 34 36573355",
    },
    email: {
      icon: <FaEnvelope />,
      address: "contact@yourcompany.com",
    },
  },
  links: {
    title: "Useful links",
    items: [
      { href: "/about", name: "About me" },
      { href: "/gallary", name: "My gallery" },
      { href: "/services", name: "My services" },
      { href: "/contacts", name: "Contact me" },
    ],
  },
  program: {
    title: "Working Time",
    items: [
      { name: "Mon - Tue / Appointment" },
      { name: "Wed - Fri / 10:00 - 9:00pm" },
      { name: "Sat / 10:00 - 6:00pm" },
      { name: "Sun / no work on this day" },
    ],
  },
  newsletter: {
    title: "Newsletter",
    subtitle:
      "Elit duis porttitor massa tellus nun in velit arcu posuere integer.",
    form: {
      placeholder: "Your email address",
      icon: <FiSend />,
    },
  },
};
