import { Link } from "react-router";
import { Temporal } from "temporal-polyfill";

export function Footer() {
  const current_year = Temporal.Now.zonedDateTimeISO().year;

  const copy_to_clipboard = () => {
    const email = "daniel.gonzalezubaque@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copiado al portapapeles");
      })
      .catch((error) => {
        alert("Error al copiar el email: "+error);
      });
  };

  return (
    <>
      <footer className="w-full flex flex-col bg-[var(--main-content-bg-color)] items-center py-17">
        <div className="w-70 sm:w-93">
          <div className="flex flex-col items-center text-center mb-5">
            <h3 className="text-[var(--text-color)] text-sm">
              💻 PYTHON DEVELOPER 💻
            </h3>
            <h6 className="text-[var(--text-color)] text-xs">
              Years active from beautiful colombia 👍 2023 - {current_year}
            </h6>
            <Link to="/credits" className="text-sm text-neutral-400">
              creditos
            </Link>
          </div>
          <div className="flex flex-col justify-start">
            <h4 className="text-[var(--text-color)]">Contacto</h4>
            <span 
            className="text-[var(--text-color)] text-xs hover:border-b-1 cursor-pointer"
            onClick={()=>copy_to_clipboard()}>Email: daniel.gonzalezubaque@gmail.com</span>
          </div>
        </div>
      </footer>
    </>
  );
}
