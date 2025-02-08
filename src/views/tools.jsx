import { Nav_bar } from "./../components/nav_bar.jsx";
import { Footer } from "./../components/footer.jsx";
import { Main_button } from "./../components/main_button";
import logo from './../assets/Tools.png'
import { data_links_buttons } from "./../data/data_links";

export function Tools() {
const resources_page_btn_links=data_links_buttons.Tools

  const content=(
    <div className="flex flex-col w-full items-center h-full bg-[var(--main-content-bg-color)]">
          <section className="flex flex-col items-center w-73 sm:w-112">
            <img src={logo} alt="logo" className="w-20 h-20 rounded-full border-2 border-[var(--link-hover-color)]"/>
            <h3 className="pt-5 text-xl font-semibold text-[#54c0eb]">Herramientas</h3>
            <div className="text-center w-full text-[var(--text-color)] text-sm my-5">
            Aqui encontraras link externos y herramientas para acelerar tu trabajo.
            </div>
            
          </section>
          <section>
            {resources_page_btn_links.map((item) => (
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
  )

  return (
    <>
      <Nav_bar />
      {content}
      <Footer />
    </>
  );
}
