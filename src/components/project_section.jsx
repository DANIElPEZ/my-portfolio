import { Github_button } from "./github_button";
import { Visit_webside_button } from "./visit_webside_button";
import { Download_button } from "./download_button";

export function Project({
  title,
  logos = [],
  imgs = [],
  url_github,
  url_web,
  type_button = false,
  type_layout = false,
  name = "",
  file = "",
}) {
  return (
    <>
      <h4 className="text-base font-medium text-[var(--text-color)] my-3 flex items-center">
        {title}
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="rounded-full w-5 h-5 ml-2 bg-white"
          />
        ))}
      </h4>
      {type_layout ? (
        imgs.map((img, index) => (
          <img key={`foto-${index}`} src={img} alt={`foto-${index}`} />
        ))
      ) : (
        <section className="flex w-35 sm:w-49 gap-1 mb-3">
          {imgs.map((img, index) => (
            <img key={`foto-${index}`} src={img} alt={`foto-${index}`} />
          ))}
        </section>
      )}
      <section className="flex flex-col sm:flex-row mb-4 gap-3 sm:items-center mt-3">
        <Github_button url={url_github} />
        {type_button ? (
          <Download_button name={name} file={file} />
        ) : (
          <Visit_webside_button url={url_web} />
        )}
      </section>
    </>
  );
}
