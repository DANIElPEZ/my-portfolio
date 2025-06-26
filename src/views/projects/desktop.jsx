import { Nav_bar } from "./../../components/nav_bar.jsx";
import { Footer } from "./../../components/footer.jsx";
import { Project } from "../../components/project_section.jsx";
import algebra1 from "./../../assets/algebra1.jpeg";
import algebra2 from "./../../assets/algebra2.jpeg";
/* desktop tecnologies */
import python from "./../../assets/Python.png";
/* Files *.zip to download compiled project*/
import algebra from './../../assets/programas/algebra.zip'
import ulamspiral from './../../assets/programas/ulamspiral.zip'

export function Desktop() {
  const content = (
    <div className="flex flex-col w-full h-full items-center bg-[var(--main-content-bg-color)]">
      <div className="flex flex-col w-65 sm:w-100 items-start h-full">
        <h2 className="text-lg font-medium text-[var(--text-color)]">
          Proyectos de escritorio
        </h2>
        {Project({
          title:'Algebra Lineal',
          logos:[python],
          imgs:[algebra1, algebra2],
          url_github: 'https://github.com/DANIElPEZ/python-desktop/tree/master/matriz%20gauss%20jordan',
          file:algebra,
          type_button:true
        })}
        <h2 className="text-lg font-medium text-[var(--text-color)]">
          Otros proyectos
        </h2>
        {Project({
          title:'Espiral de Ulam',
          logos:[python],
          url_github: 'https://github.com/DANIElPEZ/python-desktop/blob/master/ulamspiral/ulamspiral.py',
          name:'Ulam Spiral.zip',
          file:ulamspiral,
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
