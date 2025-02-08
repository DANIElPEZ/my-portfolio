import linkedin from './../assets/LinkedIn.png'
import github from './../assets/Github.png'
import facebook from './../assets/Facebook.png'
import instagram from './../assets/Instagram.png'
import resources from './../assets/Resource.png'
import tools from './../assets/Tools.png'
import python from './../assets/Python.png'
import html_css from './../assets/html-css.webp'
import javascript from './../assets/js.png'
import sql from './../assets/sqlite.png'
import git_github from './../assets/git.png'
import w3schools from './../assets/w3s.png'
import chatgpt from './../assets/Chatgpt.webp'
import vscode from './../assets/vscode.png'
import sqlite from './../assets/sqlite.png'
import table from './../assets/tabla.png'
import analizer from './../assets/code.webp'

export const data_links_buttons = {
     //Main view
     Main_page: [
          {
               title_section: 'Redes de contacto',
               content:[{
                    icon: linkedin,
                    title: "LinkedIn",
                    creator: "Perfil de linkedin",
                    bg_hover: "--linkedin-color",
                    url: "https://www.linkedin.com/in/daniel-santiago-gonzalez-ubaque-84112b334/",
                    bg_img: true,
                    target: '_blank'
               },
               {
                    icon: github,
                    title: "GitHub",
                    creator: "Perfil de GitHub",
                    bg_hover: "--github-color",
                    url: "https://github.com/DANIElPEZ/",
                    bg_img: true,
                    target: '_blank'
               },
               {
                    icon: instagram,
                    title: "Instagram",
                    creator: "Perfil de Instagram",
                    bg_hover: "--instagram-color",
                    url: "https://www.instagram.com/dani.g.dev/?igsh=cnhlZTRqMnVwZzZp#",
                    bg_img: true,
                    target: '_blank'
               },
               {
                    icon: facebook,
                    title: "Facebook",
                    creator: "Perfil de Facebook",
                    bg_hover: "--facebook-color",
                    url: "https://www.facebook.com/danielsantiagoangel.gonzalezubaque?mibextid=ZbWKwL",
                    bg_img: true,
                    target: '_blank'
               }]
          },
          {
               title_section: 'Mi ruta de aprendizaje',
               content: [{
                    icon: resources,
                    title: "Recursos para estudiar",
                    creator: "MIs habilidades",
                    bg_hover: "--resources-color",
                    url: "/resources",
                    bg_img: false,
                    target: ''
               }]
          },
          {
               title_section: 'Otros enlaces',
               content: [{
                    icon: tools,
                    title: "Herramientas",
                    creator: "Paginas externas",
                    bg_hover: "--tools-color",
                    url: "/tools",
                    bg_img: false,
                    target: ''
               }]
          },
     ],
     //Resources view
     Resources: [
          {
               title_section: 'Python',
               content: [{
                    icon: python,
                    title: "Programacion basica",
                    creator: "La Geekipedia de Ernesto",
                    bg_hover: "--python-color",
                    url: "https://www.youtube.com/playlist?list=PLyvsggKtwbLW1j0d5yaCkRF9Axpdlhsxz",
                    bg_img: true,
                    target: '_blank'
               },
               {
                    icon: python,
                    title: "Programacion orientada a objetos",
                    creator: "Soy Dalto",
                    bg_hover: "--python-color",
                    url: "https://www.youtube.com/watch?v=HtKqSJX7VoM",
                    bg_img: true,
                    target: '_blank'
               }]
          },
          {
               title_section: "Desarrollo web",
               content: [{
                    icon: html_css,
                    title: "HTML & CSS",
                    creator: "Soy Dalto",
                    bg_hover: "--html-css-color",
                    url: "https://www.w3schools.com/html/",
                    bg_img: true,
                    target: '_blank'
               },
               {
                    icon: javascript,
                    title: "JavaScript",
                    creator: "JAVASCRIPT.INFO",
                    bg_hover: "--javascript-color",
                    url: "https://es.javascript.info/",
                    bg_img: true,
                    target: '_blank'
               }]
          },
          {
               title_section: "Base de datos",
               content: [{
                    icon: sql,
                    title: "SQL",
                    creator: "Soy Dalto",
                    bg_hover: "--sql-color",
                    url: "https://www.youtube.com/watch?v=DFg1V-rO6Pg",
                    bg_img: true,
                    target: '_blank'
               }]
          },
          {
               title_section: "Git & GitHub",
               content: [{
                    icon: git_github,
                    title: "Git & GitHub",
                    creator: "Soy Dalto",
                    bg_hover: "--git-gitHub-color",
                    url: "https://www.youtube.com/watch?v=9ZJ-K-zk_Go",
                    bg_img: true,
                    target: '_blank'
               }]
          },
          {
               title_section: "Recursos de W3Schools",
               content: [{
                    icon: w3schools,
                    title: "W3Schools",
                    creator: "Recursos de W3Schools",
                    bg_hover: "--w3schools-color",
                    url: "https://www.w3schools.com/",
                    bg_img: true,
                    target: '_blank'
               }]
          }
     ],
     //tools view
     Tools: [
          {
               title_section: "Inteligencia Artificial",
               content: [{
                    icon: chatgpt,
                    title: "ChatGPT",
                    creator: "Herramienta de IA",
                    bg_hover: "--chatgp-color",
                    url: "https://chat.openai.com/",
                    bg_img: true,
                    target: '_blank'
               }]
          },
          {
               title_section: "Editor de codigo",
               content: [{
                    icon: vscode,
                    title: "VSCode",
                    creator: "Editor de código",
                    bg_hover: "--vscode-color",
                    url: "https://code.visualstudio.com/",
                    bg_img: true,
                    target: '_blank'
               }]
          },
          {
               title_section: 'Control de versiones',
               content: [{
                    icon: git_github,
                    title: "Git",
                    creator: "Sistema de control de versiones",
                    bg_hover: "--git-color",
                    url: "https://git-scm.com/",
                    bg_img: true,
                    target: '_blank'
               },
               {
                    icon: github,
                    title: "GitHub",
                    creator: "Plataforma de desarrollo",
                    bg_hover: "--github-color",
                    url: "https://github.com/",
                    bg_img: true,
                    target: '_blank'
               }]
          },
          {
               title_section: 'Base de datos',
               content: [{
                    icon: sqlite,
                    title: "SQLite",
                    creator: "Base de datos",
                    bg_hover: "--sqlite-color",
                    url: "https://www.sqlite.org/",
                    bg_img: true,
                    target: '_blank'
               }]
          },
          {
               title_section: 'Expresiones regulares',
               content: [{
                    icon: table,
                    title: "Tabla",
                    creator: "Tabla de expresiones regulares",
                    bg_hover: "--table-color",
                    url: "https://cheatography.com/davechild/cheat-sheets/regular-expressions/?last=1584011681",
                    bg_img: true,
                    target: '_blank'
               },
               {
                    icon: analizer,
                    title: "Analizador",
                    creator: "nálisis de expresiones regulares",
                    bg_hover: "--analizer-color",
                    url: "https://regex101.com/",
                    bg_img: true,
                    target: '_blank'
               }]
          }
     ]
}