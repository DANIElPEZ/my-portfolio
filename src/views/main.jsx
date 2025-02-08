import { Main_button } from "./../components/main_button";
import { data_links_buttons } from "./../data/data_links";
import { Nav_bar } from "./../components/nav_bar";
import { Footer } from "./../components/footer";
import { Link } from "react-router";
import Logo from './../assets/DNV.png'
import './../styles/App.css'

export function Main() {
  const main_page_btn_links = data_links_buttons.Main_page;

  const Content = (
    <div className="flex flex-col w-full items-center h-full bg-[var(--main-content-bg-color)]">
      <section className="flex flex-col items-start w-73 sm:w-112">
        <div className="flex flex-col items-start w-full">
          <div className="flex justify-start h-20">
            <img src={Logo} alt="logo" className="w-20 h-20 rounded-full border-2 border-[var(--link-hover-color)]"/>
            <div className="flex flex-col ml-3 h-full justify-center">
              <h6 className="text-[var(--text-color)] text-xl">DANIEL</h6>
              <h6 className="text-[var(--text-color)] text-base">@Dnv</h6>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full justify-start sm:justify-between gap-1.5 my-5">
            <span className="flex text-[var(--text-color)] text-xs"><p className="mr-2 text-[var(--main-color-small-info)]">+2</p>Años en crear aplicaciones</span>
            <span className="flex text-[var(--text-color)] text-xs"><p className="mr-2 text-[var(--main-color-small-info)]">+17</p>proyectos realizados</span>
          </div>
        </div>
        <div className="text-justify w-full text-[var(--text-color)] text-sm mb-5">
        Bienvenid@s mi nombre es DANIEL GONZALEZ y soy estudiante de la carrera 💻 Ingeniería informatica. Ser un excelente programador en el lenguaje de programación Python3.
        </div>
        <div className="flex gap-3 w-full flex-start">
          <Link to='/projects/desktop' className="text-[var(--text-color)] text-sm rounded-lg px-3.5 py-2 bg-cyan-800 font-medium">Escritorio</Link>
          <Link to='/projects/mobile' className="text-neutral-100 text-sm rounded-lg px-3.5 py-2 bg-sky-400 font-medium">Movil</Link>
          <Link to='/projects/web' className="text-neutral-800 text-sm rounded-lg px-3.5 py-2 bg-yellow-300 font-medium">Web</Link>
        </div>
      </section>
      <section>
        {main_page_btn_links.map((item) => (
          <section className="text-[var(--text-color)] pt-8 " key={item.title_section}>
            <h5 className="pb-4 text-lg" key={item.title_section}>{item.title_section}</h5>
            {item.content.map((btn) => (
              <Main_button
                key={btn.title}
                icon={btn.icon}
                title={btn.title}
                creator={btn.creator}
                url={btn.url}
                bg_img={btn.bg_img}
                target={btn.target}
                bg_hover={'--resources-color'}
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
