import { Main_button } from "./../components/main_button";
import { data_links_buttons } from "./../data/data_links";
import { data_habilities } from './../data/data_habilities';
import { Nav_bar } from "./../components/nav_bar";
import { Footer } from "./../components/footer";
import { Link } from "react-router";
import { Temporal } from "temporal-polyfill";
import Logo from "./../assets/DNV.png";
import cv from "./../assets/CV.pdf";
import "./../styles/buttons_projects.css";

export function Main() {
  const main_page_btn_links = data_links_buttons.Main_page;
  const years = Temporal.Now.zonedDateTimeISO().year - 2023;

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "CV.pdf";
    link.click();
  };

  const Content = (
    <div className="flex flex-col w-full items-center h-full bg-[var(--main-content-bg-color)]">
      <section className="flex flex-col items-start w-73 sm:w-112">
        <div className="flex flex-col items-start w-full">
          <div className="flex justify-start h-20">
            <img
              src={Logo}
              alt="logo"
              className="w-20 h-20 rounded-full border-2 border-[var(--link-hover-color)]"
            />
            <div className="flex flex-col ml-3 h-full justify-center">
              <h6 className="text-[var(--text-color)] text-xl">DANIEL</h6>
              <h6 className="text-[var(--text-color)] text-base">@Dnv</h6>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full justify-start sm:justify-between gap-1.5 my-5">
            <span className="flex text-[var(--text-color)] text-xs">
              <p className="mr-2 text-[var(--main-color-small-info)]">
                +{years}
              </p>
              Años en crear aplicaciones
            </span>
            <span className="flex text-[var(--text-color)] text-xs">
              <p className="mr-2 text-[var(--main-color-small-info)]">+17</p>
              proyectos realizados
            </span>
          </div>
        </div>
        <div className="text-left text-balance w-full text-[var(--text-color)] text-sm mb-5">
          ¡Hola! Soy Daniel González. Me especializo en desarrollo web y móvil, actualmente me estoy formando en Big Data. Siempre busco de nuevos retos para crecer como desarrollador.
        </div>
        <div
          onClick={handleDownloadCV}
          className="mb-4 inline-flex items-center gap-2 rounded-md bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-200 cursor-pointer shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
          Descargar CV
        </div>

        <h3 className="text-2xl mb-4 ml-4 font-medium text-[var(--text-color)]">
          Proyectos
        </h3>
        <div className="flex flex-col sm:flex-row gap-3 w-full flex-start">
          <Link to="/projects/desktop" className="desktop w-full">
            Escritorio
          </Link>
          <Link to="/projects/mobile" className="mobile w-full">
            Movil
          </Link>
          <Link to="/projects/web" className="web">
            Web
          </Link>
        </div>
        <h3 className="text-2xl mt-4 ml-4 font-medium text-[var(--text-color)]">
          Habilidades tecnicas
        </h3>
        <div className="flex flex-wrap sm:flex-row gap-3 flex-start mt-4 w-full">
          {data_habilities.map((img)=>(
            <img
            className="h-10"
            key={img}
            src={img}/>
          ))}
        </div>
      </section>
      <section>
        {main_page_btn_links.map((item) => (
          <section
            className="text-[var(--text-color)] pt-8 "
            key={item.title_section}
          >
            <h5 className="pb-4 text-lg" key={item.title_section}>
              {item.title_section}
            </h5>
            {item.content.map((btn) => (
              <Main_button
                key={btn.title}
                icon={btn.icon}
                title={btn.title}
                creator={btn.creator}
                url={btn.url}
                bg_img={btn.bg_img}
                target={btn.target}
                bg_hover={btn.bg_hover}
              />
            ))}
          </section>
        ))}
      </section>
    </div>
  );

  return (
    <>
      <Nav_bar />
      {Content}
      <Footer />
    </>
  );
}
