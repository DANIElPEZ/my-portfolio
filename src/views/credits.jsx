import { Nav_bar } from "./../components/nav_bar.jsx";
import { data_credits } from "./../data/data_credits.js";
import { Link } from "react-router";

export function Credits() {
  return (
    <>
      <Nav_bar />
      <div className="h-full flex flex-col w-full items-center bg-[var(--main-content-bg-color)] gap-3 pb-17">
        <h3 className="text-[var(--text-color)] text-lg">Fotos usadas de</h3>
        {data_credits.map((item) => {
          return <Link to={item.url} target="_blank" className="text-[var(--text-color)] text-sm border-b-1">
            {item.title} {item.creator}
          </Link>;
        })}
      </div>
    </>
  );
}
