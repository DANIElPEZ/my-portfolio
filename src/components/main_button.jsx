import { Link } from "react-router";
import React from "react";

export function Main_button({
  icon,
  title,
  creator,
  url,
  bg_hover,
  bg_img,
  target,
}) {
  const bg_mode = bg_img ? "bg-white" : "bg-[#4b5a7a]";
  const [is_hovered, set_ishovered] = React.useState(false);

  const hoverStyle = {
    backgroundColor: is_hovered ? `var(${bg_hover})` : "",
    transition: "all 0.3s ease"
  };

  return (
    <Link
      to={url}
      target={target}
      style={hoverStyle}
      onMouseEnter={() => set_ishovered(true)}
      onMouseLeave={() => set_ishovered(false)}
      className="flex items-center justify-start cursor-pointer h-[85px] p-5 w-2xs sm:w-md mb-5 rounded-xl bg-[var(--main-button-color)] transition duration-300 ease-in-out"
    >
      <img
        src={icon}
        alt={title}
        className={`w-11 h-11 rounded-full p-1 ${bg_mode}`}
      />
      <div className="flex flex-col items-start ml-3">
        <h2 className="text-sm from-medium text-[var(--text-color)]">
          {title}
        </h2>
        <p className="text-xs font-normal text-[var(--text-color)]">
          {creator}
        </p>
      </div>
    </Link>
  );
}
