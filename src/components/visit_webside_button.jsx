import { Link } from "react-router";
import "./../styles/visit_webside_button.css";

export function Visit_webside_button({ url }) {
  return (
    <Link to={url} target="_blank" className="Btn-visit">
      <div className="sign">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </div>

      <div className="text">Visit webside</div>
    </Link>
  );
}