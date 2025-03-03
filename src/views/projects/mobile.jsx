import { Nav_bar } from "./../../components/nav_bar.jsx";
import { Footer } from "./../../components/footer.jsx";
import { Project } from "../../components/project_section.jsx";
import iconic1 from "./../../assets/iconic1.png";
import iconic2 from "./../../assets/iconic2.png";
import wd1 from './../../assets/playWD1.png';
import wd2 from './../../assets/playWD2.png';
/* mobile tecnologies */
import flutter from "./../../assets/flutter.webp";
/* Files *.apk to download compiled project*/
import iconic_apk from "./../../assets/programas/iconicMusic.apk";
import ctos_apk from "./../../assets/programas/CTOS.apk";

export function Mobile() {
  const content = (
    <div className="flex flex-col w-full h-full items-center bg-[var(--main-content-bg-color)]">
      <div className="flex flex-col w-65 sm:w-100 items-start h-full">
        <h2 className="text-lg font-medium text-[var(--text-color)]">
          Proyectos de movil
        </h2>
        {Project({
          title: "Iconic Music",
          logos: [flutter],
          imgs:[iconic1, iconic2],
          url_github:"https://github.com/DANIElPEZ/iconic-music",
          file:iconic_apk,
          type_button:true
        })}
        {Project({
          title:'CTOS play',
          logos:[flutter],
          imgs:[wd1, wd2],
          url_github:'https://github.com/DANIElPEZ/watch-dogs-hack-play',
          file:ctos_apk,
          type_button:true
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
