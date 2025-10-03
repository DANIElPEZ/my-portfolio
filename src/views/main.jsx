import React from "react";
import { Link } from "react-router";
import { Nav_bar } from "./../components/nav_bar";
import { Footer } from "./../components/footer";
import { Temporal } from "temporal-polyfill";
import { projects, stack } from "./../constants/projects";
import profile from "./../assets/profile.png";
import cv from "./../assets/CV.pdf";

export function Main() {
  const years = Temporal.Now.zonedDateTimeISO().year - 2023;
  const [filter, setFilter] = React.useState("todos");

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "cv.pdf";
    link.click();
  };

  const filteredProjects =
    filter === "todos" ? projects : projects.filter((p) => p.tipo === filter);

  const Content = (
    <div className="flex flex-col w-full items-center px-4 py-8 sm:px-8 bg-[var(--main-content-bg-color)]">
      <section className="flex flex-col items-center w-full max-w-3xl gap-6 md:px-9">
        <div className="flex items-center justify-center">
          <img
            src={profile}
            alt="logo"
            className="w-20 h-20 rounded-full border-2 border-[var(--link-hover-color)] object-cover bg-[var(--nav-bar-bg-color)]"
          />
          <div className="flex flex-col ml-4 justify-center">
            <h6 className="text-[var(--text-color)] text-xl font-bold">
              DANIEL
            </h6>
            <h6 className="text-[var(--text-color)] text-base">@Daniel.dev</h6>
          </div>
        </div>

        <div className="flex gap-13 text-sm text-[var(--text-color)]">
          <span className="flex">
            <p className="mr-1 text-[var(--main-color-small-info)]">+{years}</p>
            Años como desarrollador
          </span>
          <span className="flex">
            <p className="mr-1 text-[var(--main-color-small-info)]">+20</p>
            proyectos realizados
          </span>
        </div>
      </section>

      <p className="mt-3 max-w-3xl text-center md:text-left text-sm text-[var(--text-color)]">
        ¡Hola! Soy Daniel González. Me especializo en desarrollo web y móvil,
        actualmente me estoy formando en Big Data. Siempre busco de nuevos retos
        para crecer como desarrollador.
      </p>

      <div className="flex gap-4 mt-4">
        <Link
          target="_blank"
          to={"https://github.com/DANIElPEZ"}
          style={{ clipPath: "url(#squircleClip)" }}
          className="w-12 h-12 bg-[#172c4d] rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition hover:scale-110 hover:-translate-y-2"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
          </svg>
        </Link>
        <Link
          target="_blank"
          to={"https://www.linkedin.com/in/daniel-g-dev"}
          style={{ clipPath: "url(#squircleClip)" }}
          className="w-12 h-12 bg-[#172c4d] rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition hover:scale-110 hover:-translate-y-2"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
          </svg>
        </Link>
        <button
          onClick={handleDownloadCV}
          style={{ clipPath: "url(#squircleClip)" }}
          className="w-12 h-12 bg-[#172c4d] text-white font-bold text-lg rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition hover:scale-110 hover:-translate-y-2"
        >
          CV
        </button>
      </div>

      <section className="w-full max-w-6xl mt-1">
        <h3 className="text-2xl font-medium text-[var(--text-color)] mb-3">
          Proyectos
        </h3>
        <div className="flex mb-6 ml-4 rounded-2xl border-2 border-[#4a5568] bg-[#1e2635] overflow-hidden w-fit">
          {["todos", "web", "movil"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 text-sm font-medium transition-colors duration-200
        ${
          filter === f
            ? "bg-[var(--link-hover-color)] text-white"
            : "text-gray-300 hover:bg-[#2a3348] hover:text-white"
        }
      `}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="flex flex-col bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-700"
            >
              <div className="p-2">
                <h2 className="font-medium text-xl text-white mb-3">{p.nombre}</h2>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                  {p.imagenes.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${p.nombre} ${index + 1}`}
                      className="max-h-[200px] object-contain rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-2">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {p.titulo}
                </h4>
                <p className="text-gray-300 text-sm">{p.descripcion}</p>
                <div className="flex flex-col h-full justify-between mt-3">
                  <div className="flex flex-col">
                    <h2 className="font-medium text-lg text-white">
                      Tecnologías
                    </h2>
                    <div className="flex gap-1 mt-3">
                      {p.tecnologias.map((tec, index) => (
                        <li key={index}>
                          <img src={tec} alt="tecnología" className="h-9" />
                        </li>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4 bottom-0">
                    <Link
                      to={p.github}
                      target="_blank"
                      className="cursor-pointer text-white flex gap-2 items-center bg-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#111] transition-all ease-in duration-200"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 fill-white"
                      >
                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
                      </svg>
                      Codigo
                    </Link>

                    {p.tipo === "web" && (
                      <Link
                        to={p.link}
                        target="_blank"
                        className="cursor-pointer text-white flex gap-2 items-center bg-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#111] transition-all ease-in duration-200"
                      >
                        <svg
                          className="w-7"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="style=fill">
                            <g id="web">
                              <g id="Vector">
                                <path
                                  d="M15.3222 10.383C15.3796 10.9457 15.4125 11.4903 15.4125 12C15.4125 12.9541 15.2972 14.0315 15.1208 15.1208C14.0315 15.2972 12.9541 15.4125 12 15.4125C11.0502 15.4125 9.97313 15.2975 8.87911 15.1205C8.70281 14.0312 8.5875 12.954 8.5875 12C8.5875 11.4905 8.62039 10.9458 8.67789 10.383C9.82608 10.5668 10.9715 10.6875 12 10.6875C13.0286 10.6875 14.174 10.5668 15.3222 10.383Z"
                                  fill="#fff"
                                />
                                <path
                                  d="M16.8752 10.0994C16.9462 10.7579 16.9875 11.399 16.9875 12C16.9875 12.8769 16.8997 13.8389 16.7599 14.8153C18.7425 14.4016 20.575 13.8731 21.5567 13.5722C21.8739 13.475 21.9986 13.4363 22.1658 13.3694C22.2494 13.336 22.326 13.302 22.4259 13.2543C22.4748 12.843 22.5 12.4244 22.5 12C22.5 10.878 22.324 9.79714 21.9982 8.78346L21.9133 8.81017C20.8868 9.12245 18.9652 9.6745 16.8752 10.0994Z"
                                  fill="#fff"
                                />
                                <path
                                  d="M21.4017 7.31948C20.3698 7.63221 18.579 8.14039 16.6599 8.53603C16.2178 5.84926 15.443 3.16951 15.0702 1.95598C17.8422 2.80227 20.1273 4.76467 21.4017 7.31948Z"
                                  fill="#fff"
                                />
                                <path
                                  d="M15.1117 8.82229C14.0253 8.99781 12.9513 9.1125 12 9.1125C11.0487 9.1125 9.97477 8.99781 8.88843 8.8223C9.30471 6.28005 10.0478 3.68306 10.4278 2.44333C10.525 2.12606 10.5637 2.00144 10.6306 1.83418C10.664 1.75062 10.698 1.67398 10.7457 1.57414C11.157 1.52518 11.5756 1.5 12 1.5C12.4434 1.5 12.8803 1.52748 13.3093 1.58083C13.3184 1.61564 13.3268 1.64679 13.3351 1.67626C13.3597 1.76333 13.3982 1.8857 13.4628 2.09104L13.4696 2.11261C13.7935 3.14223 14.6519 6.01401 15.1117 8.82229Z"
                                  fill="#fff"
                                />
                                <path
                                  d="M7.34004 8.536C7.7801 5.86107 8.54986 3.19576 8.92192 1.98181L8.92983 1.95597C6.15777 2.80225 3.8727 4.76465 2.59835 7.31946C3.63018 7.63219 5.42095 8.14036 7.34004 8.536Z"
                                  fill="#fff"
                                />
                                <path
                                  d="M2.00184 8.78345C1.67598 9.79714 1.5 10.878 1.5 12C1.5 12.4389 1.52693 12.8715 1.57923 13.2963L1.74471 13.3515L1.74603 13.3519L1.74765 13.3525L1.74879 13.3528C1.80205 13.3705 3.36305 13.886 5.41878 14.3975C5.99886 14.5418 6.61307 14.6844 7.24006 14.8151C7.10025 13.8388 7.0125 12.8769 7.0125 12C7.0125 11.3988 7.05374 10.7577 7.12472 10.0994C5.03428 9.67436 3.11218 9.12212 2.08597 8.80989L2.07883 8.80771L2.00184 8.78345Z"
                                  fill="#fff"
                                />
                                <path
                                  d="M12 16.9875C12.8769 16.9875 13.8389 16.8997 14.8153 16.7599C14.4016 18.7425 13.8731 20.575 13.5722 21.5566C13.475 21.8739 13.4363 21.9985 13.3694 22.1658C13.336 22.2494 13.302 22.326 13.2543 22.4259C12.843 22.4748 12.4244 22.5 12 22.5C11.5756 22.5 11.157 22.4748 10.7457 22.4259C10.698 22.326 10.664 22.2494 10.6306 22.1658C10.5637 21.9986 10.525 21.8739 10.4278 21.5567C10.1269 20.5751 9.59846 18.7427 9.18478 16.7603C10.1579 16.8996 11.1201 16.9875 12 16.9875Z"
                                  fill="#fff"
                                />
                                <path
                                  d="M5.0385 15.9259C3.73853 15.6024 2.63135 15.2775 1.95597 15.0702C2.97258 18.4002 5.59982 21.0274 8.92983 22.044L8.92192 22.0182C8.59705 20.9582 7.96897 18.7917 7.52191 16.4784C6.6525 16.3103 5.80722 16.1171 5.0385 15.9259Z"
                                  fill="#fff"
                                />
                                <path
                                  d="M22.0182 15.0781C20.9582 15.403 18.7915 16.0311 16.4781 16.4781C16.0311 18.7915 15.403 20.9581 15.0781 22.0182L15.0702 22.044C18.4002 21.0274 21.0274 18.4002 22.044 15.0702L22.0182 15.0781Z"
                                  fill="#fff"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                        Web
                      </Link>
                    )}
                    {p.tipo === "movil" && (
                      <Link
                        to={p.link}
                        target="_blank"
                        className="cursor-pointer text-white flex gap-2 items-center bg-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#111] transition-all ease-in duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-6"
                          viewBox="0 0 512 512"
                        >
                          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                        </svg>
                        Descargar
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-medium text-[var(--text-color)] my-4">
          Stack tecnológico
        </h3>
        <div className="flex gap-3 flex-col">
          <div>
            <h2 className="font-semibold text-xl text-white mb-3">Web</h2>
            <div className="flex flex-wrap gap-3">
              {stack.web.map((tec, index) => (
                <img key={index} src={tec} alt="tecnología" className="h-9" />
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-xl text-white mb-3">Móvil</h2>
            <div className="flex flex-wrap gap-3">
              {stack.movil.map((tec, index) => (
                <img key={index} src={tec} alt="tech" className="h-9" />
              ))}
            </div>
          </div>
        </div>
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
