import { Link } from "react-router";

export function Main_button({ icon, title, creator, url, bg_hover, bg_img, target }) {
  const bg_mode = bg_img ? "bg-white":"bg-neutral-500";

  return (
    <Link to={url} target={target}>
      <button
        className={`flex items-center justify-start cursor-pointer h-[85px] p-5 w-2xs sm:w-md mb-5 rounded-xl bg-[var(--main-button-color)] transition duration-300 ease-in-out hover:bg-[var(${bg_hover})]`}
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
      </button>
    </Link>
  );
}
