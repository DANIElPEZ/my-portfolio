import { Nav_bar } from "./../../components/nav_bar.jsx";
import { Footer } from "./../../components/footer.jsx";
import { Project } from "../../components/project_section.jsx";
import docker from "./../../assets/docker.png";
import weather from "./../../assets/weather.png";
/* web tecnologies */
import reflex from "./../../assets/reflex.jpg";
import html from './../../assets/html.webp'
import css from './../../assets/css.png'
import js from './../../assets/js.webp'

export function Web() {

  const content = (
    <div className="flex flex-col w-full h-full items-center bg-[var(--main-content-bg-color)]">
      <div className="flex flex-col w-65 sm:w-100 items-start h-full">
        <h2 className="text-lg font-medium text-[var(--text-color)]">
          Proyectos de web
        </h2>
        {Project({
          title: "Docker Guide",
          logos: [reflex],
          imgs: [docker],
          url_github: "https://github.com/DANIElPEZ/docker-guide",
          url_web: "https://docker-guide.vercel.app/",
          type_layout:true
        })}

        {Project({
          title: "Weather for pilots",
          logos:[html, css, js],
          imgs: [weather],
          url_github: "https://github.com/DANIElPEZ/weather-for-pilots",
          url_web: "https://weather-for-pilots.vercel.app/",
          type_layout:true
        })}

        <h2 className="text-lg font-medium text-[var(--text-color)]">
          Otros proyectos
        </h2>
        {Project({
          title: "Tetris Game",
          logos:[html, css, js],
          url_github: "https://github.com/DANIElPEZ/tetris-clone",
          url_web: "https://tetris-clone-dnv.vercel.app/",
        })}
        {Project({
          title: "Snake Game",
          logos:[html, css, js],
          url_github: "https://github.com/DANIElPEZ/snake-game-css-grid",
          url_web: "https://snake-game-dnv.vercel.app/",
        })}
        {Project({
          title: "Brick Breaker Game",
          logos:[html, css, js],
          url_github: "https://github.com/DANIElPEZ/brick-breaker-clone",
          url_web: "https://brick-breaker-dnv.vercel.app/",
        })}
        {Project({
          title: "Paint js",
          logos:[html, css, js],
          url_github: "https://github.com/DANIElPEZ/Paint-js",
          url_web: "https://paint-js-dnv.vercel.app/",
        })}
        {Project({
          title: "Tier Maker",
          logos:[html, css, js],
          url_github: "https://github.com/DANIElPEZ/tier-maker",
          url_web: "https://tier-maker-dnv.vercel.app/",
        })}
        {Project({
          title: "IA Privado",
          logos:[html, css, js],
          url_github: "https://github.com/DANIElPEZ/ia-privado",
          url_web: "https://chatgpt-privado-dnv.vercel.app/",
        })}
      </div>
    </div>
  );

  return (
    <>
      <Nav_bar />
      {content}
      <Footer />
    </>
  );
}
