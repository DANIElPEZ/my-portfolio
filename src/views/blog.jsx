import { Nav_bar } from "./../components/nav_bar.jsx";
import { Footer } from "./../components/footer.jsx";
import { Temporal } from "temporal-polyfill";
import dnv from "./../assets/DNV.png";
import power_toys from "./../assets/pwtoys.jpg";
import Xplane_11 from "./../assets/xplane-11.jpg";
import concorde_inside from "./../assets/concorde-inside.webp";
import concorde_outside from "./../assets/concorde-outside.webp";
import rene from "./../assets/rene.jpg";

export function Blog() {
  const pw_tools = [
    "Always On Top.",
    "PowerToys Awake.",
    "Selector de colores.",
    "No se encontró el comando.",
    "Recortar y bloquear.",
    "Variables de entorno.",
    "FancyZones.",
    "Complementos de File Explorer.",
    "File Locksmith.",
    'Editor del archivo "Hosts".',
    "Cambio de tamaño de imágenes.",
    "Administrador de teclado.",
    "Utilidades del mouse.",
    "Mouse sin límites.",
    "Pegar como texto sin formato.",
    "Ojear.",
    "PowerRename.",
    "PowerToys Run.",
    "Acento rápido.",
    "Vista previa del Registro.",
    "Regla en pantalla.",
    "Guía de métodos abreviados de teclado.",
    "Extractor de texto,",
    "Silencio de videoconferencia.",
  ];

  const years = Temporal.Now.zonedDateTimeISO().year - 2019;

  const games = [
    "No se puede hacer más lento.",
    "El soneto.",
    "La carta ambiciosa.",
    "Mi juego credencial.",
    "As, dos, tres, cuatro.",
    "Adivinando.",
  ];

  const content = (
    <div className="bg-[var(--main-content-bg-color)] flex flex-col h-full w-full items-center">
      <div className="flex flex-col items-start w-73 sm:w-112">
        <section className="flex w-full items-center">
          <img
            src={dnv}
            alt="Mi logo"
            className="w-[96px] h-[96px] rounded-2xl mr-3"
          />
          <p className="text-[var(--text-color)] leading-4.5 text-justify text-sm">
            Hola yo soy Daniel Santiago Angel Gonzalez Ubaque, aquí comparto lo
            que me gusta y otras cosas mi vida cotidiana.
          </p>
        </section>

        <section className="flex flex-col items-start mt-7 mb-5">
          <h4 className="text-[#17ae9b] text-xl font-semibold mb-3">
            Power Toys
          </h4>
          <img src={power_toys} alt="power toys" className="rounded-lg" />
          <p className="text-[var(--text-color)] leading-4.5 text-justify text-sm my-3">
            Power Toys es una herramienta, donde tiene varias aplicaciones, el
            uso más común que yo hago es obtener color de forma rápida, esta
            herramienta incluye:
          </p>
          <ul className="list-disc">
            {pw_tools.map((tool) => (
              <li key={tool} className="text-[var(--text-color)] text-sm ml-4">{tool}</li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col items-start">
          <h4 className="text-[#3ea7e9] text-2xl font-semibold mb-3">
            Hobbies
          </h4>
          <h5 className="text-xl text-[#94ccf0] font-medium">Volar</h5>
          <p className="text-[var(--text-color)] leading-4.5 text-justify text-sm my-3">
            La aviación sigue siendo uno de mis hobbies principales, para ello
            uso XPlane-11 el cual este simulador esta certificado por la FAA. Es
            usado por pilotos reales:
          </p>
          <span className="text-[var(--text-color)] text-xs">
            <span className="text-[var(--main-color-small-info)]">
              +{years}{" "}
            </span>
            Años volando con el simulador
          </span>
          <img
            src={Xplane_11}
            alt="xplane-11"
            className="mt-3 mb-4 rounded-lg"
          />
          <h5 className="text-xl text-[#94ccf0] font-medium">
            El avion concorde
          </h5>
          <p className="text-[var(--text-color)] leading-4.5 text-justify text-sm my-3">
            Fue un avion comercial del siglo pasado, el cual su velocidad de
            crucero es de 2.02 mach, los vuelos duraban la mitad de lo que
            duraba un avion que volava por debajo de la barrera del sonido, el
            concorde volaba a 2 veces la velocidad del sonido, fue una creacion
            ingeniosa, pero tenia un problema que era el coste de mantemiento.
          </p>
          <img src={concorde_inside} alt="concorde" className="rounded-lg" />
          <img
            src={concorde_outside}
            alt="concorde"
            className="rounded-lg mt-3 mb-4"
          />
        </section>

        <section className="flex flex-col items-start">
          <h5 className="text-xl text-[#ff2e2e] font-medium">Cartomagia</h5>
          <p className="text-[var(--text-color)] leading-4.5 text-justify text-sm my-3">
            El ilusionismo es mi segundo hobbie, la lentidigitación fue una
            creacion del ilusionista argentino de una sola mano Hector Rene
            Lavandera, los juegos que gusta son:
          </p>
          <ul className="list-disc">
            {games.map((tool) => (
              <li key={tool} className="text-[var(--text-color)] text-sm ml-4">{tool}</li>
            ))}
          </ul>
          <img src={rene} alt="rene lavand" className="mt-3 mb-4 rounded-lg" />
        </section>
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
