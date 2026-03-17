'use client';

export function Footer() {
  const current_year = new Date().getFullYear();

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
      <footer className="w-full flex flex-col bg-(--main-content-bg-color) items-center py-17">
        <div className="w-70 sm:w-93">
          <div className="flex flex-col items-center text-center mb-5">
            <h3 className="text-(--text-color) text-sm">
              💻 🧑‍💻 💻
            </h3>
            <h6 className="text-(--text-color) text-xs">
              From Colombia 👍 2023 - {current_year}
            </h6>
          </div>
          <div className="flex flex-col justify-start">
            <h4 className="text-(--text-color)">Contacto</h4>
            <span 
            className="text-(--text-color) text-xs hover:border-b cursor-pointer"
            onClick={()=>copy_to_clipboard()}>Email: daniel.gonzalezubaque@gmail.com</span>
          </div>
        </div>
      </footer>
    </>
  );
}