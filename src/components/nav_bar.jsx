import { data_side_bar } from "./../data/data_side_bar";
import React from "react";
import { Link } from "react-router";

export function Nav_bar() {
  const [sidebarmode ,setopensidebar] = React.useState(false);

  const toggle_sidebar = () => {
    setopensidebar(!sidebarmode);
  }

  const side_nav_bar = (
    <nav className={"h-full flex flex-col z-20 top-0 fixed w-full bg-[var(--side-bar-bg)] transition-transform duration-500" + 
    (sidebarmode ? " translate-y" : " translate-y-full")}>
      <ul className="flex items-center w-full flex-col pt-2 relative">
        <span className="material-symbols-outlined left-2 absolute scale-140 text-[var(--text-color)] cursor-pointer hover:scale-150 duration-300" onClick={() => toggle_sidebar()}>
          close
        </span>
        <div className="flex flex-col items-center w-full pt-8">
          {data_side_bar.map((index) => {
              return (
                <Link
                  to={index.url}
                  key={index.title}
                  onClick={() => toggle_sidebar()}
                  className="text-[var(--text-color)] text-base hover:bg-[var(--link-hover-color)] w-full text-center duration-200 cursor-pointer"
                >
                  {index.title}
                </Link>
              );
          })}
        </div>
      </ul>
    </nav>
  );

  return (
    <>
      <header className="bg-[var(--nav-bar-bg)] h-17 z-10 w-full flex justify-between sticky items-center px-7 top-0 lef-0">
        <Link to='/' className="text-[var(--text-color)] text-2xl">Dnv</Link>
        <button className="material-symbols-outlined text-[var(--text-color)] scale-145 cursor-pointer" onClick={() => toggle_sidebar()}>
          menu
        </button>
      </header>
      <div className="bg-[var(--main-content-bg-color)] h-17"></div>
      {side_nav_bar}
    </>
  );
}
