import { Nav_bar } from "./../../components/nav_bar.jsx";
import { Footer } from "./../../components/footer.jsx";
import { Project } from "../../components/project_section.jsx";
import docker from "./../../assets/docker.png";
import weather from "./../../assets/weather.png";
import dbguide from './../../assets/dbguide.png'
/* web tecnologies */
import tailwind from "./../../assets/Tailwind.png";
import reflex from "./../../assets/reflex.jpg";
import react from './../../assets/react.webp'
import mui from './../../assets/mui.png'
import html from "./../../assets/html.webp";
import css from "./../../assets/css.png";
import js from "./../../assets/js.webp";

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
          type_layout: true,
        })}

        {Project({
          title: "Database Guide",
          logos: [react, mui],
          imgs: [dbguide],
          url_github: "https://github.com/DANIElPEZ/database-guide",
          url_web: "https://database-guide.vercel.app/",
          type_layout: true,
        })}

        {Project({
          title: "Weather for pilots",
          logos: [html, css, js],
          imgs: [weather],
          url_github: "https://github.com/DANIElPEZ/weather-for-pilots",
          url_web: "https://weather-for-pilots.vercel.app/",
          type_layout: true,
        })}

        <h2 className="text-lg font-medium text-[var(--text-color)]">
          Otros proyectos
        </h2>
        {Project({
          title:'Games and simulations',
          logos:[react, tailwind],
          url_github:'https://github.com/DANIElPEZ/games-and-simulations',
          url_web:'https://games-and-simulations.vercel.app'
        })}
        {Project({
          title: "Paint js",
          logos: [html, css, js],
          url_github: "https://github.com/DANIElPEZ/Paint-js",
          url_web: "https://paint-js-dnv.vercel.app/",
        })}
        {Project({
          title: "Tier Maker",
          logos: [html, css, js],
          url_github: "https://github.com/DANIElPEZ/tier-maker",
          url_web: "https://tier-maker-dnv.vercel.app/",
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
