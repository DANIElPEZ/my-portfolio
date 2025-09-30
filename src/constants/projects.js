import db from './../assets/db.png'
import docker from './../assets/docker.png'

export const projects = [
  {
    id: 1,
    nombre: "Docker guide",
    tipo: "web",
    descripcion: "Docker Guide es una guía practica para aprender los fundamentos de Docker de una manera simple y estructurada.",
    imagen: docker,
    github: "https://github.com/DANIElPEZ/docker-guide",
    link: "https://docker-guide.vercel.app/",
    tecnologias: [
      "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
    ]
  },
  {
    id: 2,
    nombre: "Database guide",
    tipo: "web",
    descripcion: "Database Guide es un proyecto web que explica cómo normalizar una base de datos paso a paso, desde la primera forma normal (1NF) hasta la tercera forma normal (3NF).",
    imagen: db,
    github: "https://github.com/DANIElPEZ/database-guide",
    link: "https://database-guide.vercel.app/",
    tecnologias: [
      "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
    ]
  },
  {
    id: 3,
    nombre: "Fly in Sky",
    tipo: "movil",
    descripcion: "Fly in Sky es una aplicación móvil diseñada para entusiastas de la simulación de vuelo. Ofrece herramientas y recursos esenciales para que tus vuelos virtuales sean más realistas y divertidos.",
    imagen: "https://play-lh.googleusercontent.com/4FBC005Io7926A5Q-yEu2g1ylaNQyPNF618ar2z3N9DafLzu_7radSdepT3GK_xLnw_XNGg3PTQnGlen5k3fpA=w2560-h1440-rw",
    github: "https://github.com/DANIElPEZ/flyinsky",
    link: "https://play.google.com/store/apps/details?id=com.dnv.flyinsky",
    tecnologias: [
      "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white",
      "https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white"
    ]
  },
  {
    id: 4,
    nombre: "Iconic Music",
    tipo: "movil",
    descripcion: "Iconic Music es una aplicación móvil diseñada para quienes buscan música única y original. Permite escuchar canciones exclusivas y guardar tus favoritas para acceder a ellas rápidamente.",
    imagen: "https://play-lh.googleusercontent.com/j0Fja7HoYn4Y_QhJ41QnBIacJdFnsckYWFGBnYCC-0HoG9WOUEWBF2FhD3oiABis-GI=w2560-h1440-rw",
    github: "https://github.com/DANIElPEZ/iconic-music",
    link: "https://play.google.com/store/apps/details?id=com.dnv.dev.iconicmusic",
    tecnologias: [
      "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white",
      "https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white"
    ]
  },
  {
    id: 5,
    nombre: "Crispy Chikis",
    tipo: "movil",
    descripcion: "Crispy Chikis es una aplicación móvil de entrega de comida a domicilio, inspirada en las plataformas de restaurantes modernas. Los clientes pueden pedir en línea, seguir sus entregas.",
    imagen: "https://play-lh.googleusercontent.com/JgqfmXzsc-Oextja0gqizHhr_JVXFVzjEyN9i8fV2OtvIgCsKeSFVsQWfXGtHSF9kz51=w2560-h1440-rw",
    github: "https://github.com/DANIElPEZ/crispy-chikis-app",
    link: "https://play.google.com/store/apps/details?id=com.dnv.dev.crispychikis",
    tecnologias: [
      "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white",
      "https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white"
    ]
  },
];

export const stack = {
  web: [
    "https://img.shields.io/badge/node.js-qwe?style=for-the-badge&logo=node.js&logoColor=%23fff&color=%235FA04E",
    "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    "https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    "https://img.shields.io/badge/espress-qwe?style=for-the-badge&logo=express&logoColor=%23fff&color=%23000000",
    "https://img.shields.io/badge/nestjs-qwe?style=for-the-badge&logo=nestjs&logoColor=%23fff&color=%23E0234E",
    "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
    "https://img.shields.io/badge/mysql-qwe?style=for-the-badge&logo=mysql&logoColor=%23fff&color=%234479A1",
    "https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white",
    "https://img.shields.io/badge/docker-qwe?style=for-the-badge&logo=docker&logoColor=%23fff&color=%232496ED"
  ],
  movil: [
    "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white",
    "https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white"
  ],
};
