'use client';

import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export function Nav_bar() {
  const [sidebarmode, setopensidebar] = useState(false);

  const toggle_sidebar = () => {
    setopensidebar(!sidebarmode);
  };

  return (
    <>
      <header className="bg-(--nav-bar-bg) h-17 z-10 w-full flex sticky top-0 left-0 items-center px-7 justify-between md:justify-center">
        <button
          className="material-symbols-outlined text-(--text-color) scale-170 cursor-pointer md:hidden"
          onClick={toggle_sidebar}
        >
          <AiOutlineMenu />
        </button>
        <nav className="hidden md:flex gap-10 text-(--text-color) text-lg font-medium">
          <Link 
            href="/" 
            className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-(--text-color) after:transition-all after:duration-300 hover:after:w-full"
          >
            Inicio
          </Link>
          <Link 
            href="/comments" 
            className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-(--text-color) after:transition-all after:duration-300 hover:after:w-full"
          >
            Comentarios
          </Link>
          <Link 
            href="/game" 
            className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-(--text-color) after:transition-all after:duration-300 hover:after:w-full"
          >
            Juego
          </Link>
        </nav>
      </header>
      <nav
        className={`fixed inset-0 z-20 w-full h-full bg-(--side-bar-bg) transition-transform duration-500 md:hidden flex flex-col ${
          sidebarmode ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ul className="flex items-center w-full flex-col pt-4 relative">
          <span
            className="material-symbols-outlined left-6 absolute scale-200 text-(--text-color) cursor-pointer hover:scale-170 duration-300"
            onClick={toggle_sidebar}
          >
            <AiOutlineClose />
          </span>

          <div className="flex flex-col items-center w-full pt-8">
            <Link
              href="/"
              onClick={toggle_sidebar}
              className="text-(--text-color) text-xl py-2 hover:bg-(--link-hover-color) w-full text-center duration-200"
            >
              Inicio
            </Link>
            <Link
              href="/comments"
              onClick={toggle_sidebar}
              className="text-(--text-color) text-xl py-2 hover:bg-(--link-hover-color) w-full text-center duration-200"
            >
              Deja tu comentario
            </Link>
            <Link
              href="/game"
              onClick={toggle_sidebar}
              className="text-(--text-color) text-xl py-2 hover:bg-(--link-hover-color) w-full text-center duration-200"
            >
              Piedra, papel o tijera
            </Link>
          </div>
        </ul>
      </nav>

      <div className="bg-(--main-content-bg-color) h-17 w-full"></div>
    </>
  );
}