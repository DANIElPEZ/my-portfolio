import React from "react";
import { Link } from "react-router";

export function Nav_bar() {
  const [sidebarmode, setopensidebar] = React.useState(false);
  const [isMdUp, setIsMdUp] = React.useState(window.innerWidth >= 768);
  const toggle_sidebar = () => {
    setopensidebar(!sidebarmode);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsMdUp(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const side_nav_bar = (
    <nav
      className={
        "h-full flex flex-col z-20 top-0 fixed w-full bg-[var(--side-bar-bg)] transition-transform duration-500" +
        (sidebarmode ? " translate-y" : " translate-y-full")
      }
    >
      <ul className="flex items-center w-full flex-col pt-2 relative">
        <span
          className="material-symbols-outlined left-2 absolute scale-140 text-[var(--text-color)] cursor-pointer hover:scale-150 duration-300"
          onClick={() => toggle_sidebar()}
        >
          close
        </span>
        <div className="flex flex-col items-center w-full pt-8">
          <Link
            to={"/"}
            onClick={() => toggle_sidebar()}
            className="text-[var(--text-color)] text-base hover:bg-[var(--link-hover-color)] w-full text-center duration-200 cursor-pointer"
          >
            Inicio
          </Link>
          <Link
            to={"/comments"}
            onClick={() => toggle_sidebar()}
            className="text-[var(--text-color)] text-base hover:bg-[var(--link-hover-color)] w-full text-center duration-200 cursor-pointer"
          >
            Deja tu comentario
          </Link>
          <Link
            to={"/game"}
            onClick={() => toggle_sidebar()}
            className="text-[var(--text-color)] text-base hover:bg-[var(--link-hover-color)] w-full text-center duration-200 cursor-pointer"
          >
            Piedra, papel o tijera
          </Link>
        </div>
      </ul>
    </nav>
  );

  return (
    <>
      {isMdUp ? (
        <header className="bg-[var(--nav-bar-bg)] h-17 z-10 w-full flex justify-center sticky items-center top-0 left-0">
  <nav className="flex gap-10 text-[var(--text-color)] text-lg font-medium">
    <Link
      to={"/"}
      className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--text-color)] after:transition-all after:duration-300 hover:after:w-full"
    >
      Inicio
    </Link>
    <Link
      to={"/comments"}
      className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--text-color)] after:transition-all after:duration-300 hover:after:w-full"
    >
      Comentarios
    </Link>
    <Link
      to={"/game"}
      className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--text-color)] after:transition-all after:duration-300 hover:after:w-full"
    >
      Juego
    </Link>
  </nav>
</header>
      ) : (
        <>
          <header className="bg-[var(--nav-bar-bg)] h-17 z-10 w-full flex justify-between sticky items-center px-7 top-0 left-0">
            <button
              className="material-symbols-outlined text-[var(--text-color)] scale-145 cursor-pointer"
              onClick={toggle_sidebar}
            >
              menu
            </button>
          </header>
          {side_nav_bar}
        </>
      )}
      <div className="bg-[var(--main-content-bg-color)] h-17"></div>
    </>
  );
}
