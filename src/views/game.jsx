import { Nav_bar } from "./../components/nav_bar.jsx";
import { Footer } from "./../components/footer.jsx";
import tijera from "./../assets/tijera.png";
import papel from "./../assets/papel.png";
import piedra from "./../assets/piedra.png";
import React from "react";
import thinking from "./../assets/question.png";

export function Game() {
  let [points_user, set_points_user] = React.useState(0);
  let [points_ia, set_points_ia] = React.useState(0);
  const [who_win, set_who_win] = React.useState("");
  let [color_who_win, set_color_who_win] = React.useState("#ffffff");

  const [title_ia, set_title_ia] = React.useState("");
  const [img_ia, set_img_ia] = React.useState(thinking);

  const playing = (option) => {
    const ia_option = Math.floor(Math.random() * 3) + 1;
    set_img_ia(thinking);
    set_color_who_win("#fff");
    set_who_win("¿Quien Ganara?");
    set_title_ia("Pensando");
    setTimeout(() => {
      if (option === ia_option) {
        set_who_win("Empate");
        set_color_who_win("#7fffd4");
      } else if (
        (ia_option === 3 && option === 1) ||
        (ia_option === 1 && option === 2) ||
        (ia_option === 2 && option === 3)
      ) {
        set_who_win("Gana Jugador");
        set_points_user((prevPoints) => prevPoints + 1);
        set_color_who_win("#0f0");
      } else {
        set_who_win("Gana La Ia");
        set_points_ia((prevPoints) => prevPoints + 1);
        set_color_who_win("#f00");
      }
      if (ia_option === 1) {
        set_title_ia("Piedra");
        set_img_ia(piedra);
      } else if (ia_option === 2) {
        set_title_ia("Papel");
        set_img_ia(papel);
      } else if (ia_option === 3) {
        set_title_ia("Tijera");
        set_img_ia(tijera);
      }
    }, 1500);
  };

  const reboot = () => {
    set_img_ia(thinking);
    set_color_who_win("");
    set_who_win("");
    set_title_ia("");
    set_points_ia(0);
    set_points_user(0);
  };

  const btn_choice = ({ title, img, option }) => (
    <button
      className="flex flex-col items-center my-3 mx-3"
      onClick={() => playing(option)}
    >
      <span className="text-[#00ffbf] mb-3">{title}</span>
      <img
        src={img}
        alt={img}
        className="bg-white rounded-3xl h-33 border-3 border-sky-300 duration-200 hover:border-sky-700 hover:opacity-60 cursor-pointer"
      />
    </button>
  );

  const content = (
    <div className="flex flex-col w-full h-full items-center bg-[var(--main-content-bg-color)]">
      <span className="text-[var(--text-color)] text-xl font-medium">
        Piedra, Papel o Tijera
      </span>
      <span className="text-lg text-[#97d603] mt-7 mb-3">Computadora</span>
      <button className="flex flex-col items-center my-3 mx-3">
        <span className="text-[#00ffbf] mb-3">{title_ia}</span>
        <img
          src={img_ia}
          alt={img_ia}
          className="bg-white rounded-3xl h-33 border-3 border-sky-300 duration-200 hover:border-sky-700 hover:opacity-60 cursor-pointer"
        />
      </button>
      <span className="text-lg text-[#e79e03]">Jugador</span>
      <div className="flex flex-col sm:flex-row">
        {btn_choice({ title: "Piedra", img: piedra, option: 1 })}
        {btn_choice({ title: "Papel", img: papel, option: 2 })}
        {btn_choice({ title: "Tijera", img: tijera, option: 3 })}
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-medium" style={{ color: color_who_win }}>
          {who_win}
        </span>
        <span className="text-xl text-[var(--text-color)]">
          Puntaje Jugador: {points_user}
        </span>
        <span className="text-xl text-[var(--text-color)]">
          Puntaje Ia: {points_ia}
        </span>
      </div>
      <button
        onClick={() => reboot()}
        className="cursor-pointer mt-6 text-lg font-medium text-[var(--text-color)] border-2 px-3 py-1 rounded-lg transition-all duration-300 relative inline-block bg-transparent z-0 after:content-[''] after:bg-[#43867b] after:z-[-1] after:absolute after:top-[6px] after:rounded-sm after:left-0 after:duration-200 after:w-full after:h-full after:transition-all hover:after:top-0"
      >
        Reiniciar
      </button>
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
