import React from "react";
import { Nav_bar } from "./../components/nav_bar.jsx";
import { Footer } from "./../components/footer.jsx";
import { createClient } from "@supabase/supabase-js";
import DOMPurify from "dompurify";
import "./../styles/button_comment.css";

const url_supabase = import.meta.env.VITE_URL_SUPABASE;
const api_key = import.meta.env.VITE_API_KEY;

const supabase = createClient(url_supabase, api_key);

export function Comments() {
  const [comments, set_comments] = React.useState([]);
  const [name, set_name] = React.useState("");
  const [comment, set_comment] = React.useState("");

  React.useEffect(() => {
    getComments();
  }, []);

  async function getComments() {
    const { data } = await supabase.from("comments").select();
    set_comments(data);
  }

  async function sendComment() {
    const sanitized_name = DOMPurify.sanitize(name);
    const sanitized_comment = DOMPurify.sanitize(comment);

    if (!sanitized_name || !sanitized_comment) {
      alert("Por favor, completa los campos.");
      return;
    }

    const { error } = await supabase
      .from("comments")
      .insert([{ name: sanitized_name, comment: sanitized_comment }]);

    if (error) {
      alert("Error al enviar.");
    } else {
      set_name("");
      set_comment("");

      getComments();
    }
  }

  const content = (
    <div className="flex flex-col items-center h-ful w-full bg-[var(--main-content-bg-color)]">
      <input
        required
        onChange={(e) => set_name(e.target.value)}
        placeholder="Escribe tu nombre"
        className="w-65 bg-[#3f99f2] px-2 py-1 rounded-sm text-center placeholder-gray-100 outline-0 focus:bg-[#3178d3] duration-150 text-[var(--text-color)]"
      />
      <textarea
        required
        onChange={(e) => set_comment(e.target.value)}
        placeholder="Deja tu comentario"
        className="w-65 h-30 bg-[#36b1ea] rounded-sm my-4 px-1 text-center placeholder-gray-100 outline-0 focus:bg-[#4aa0c9] duration-150 text-[var(--text-color)]"
      ></textarea>
      <button
        className="send-comment"
        onClick={() => {
          sendComment();
        }}
      >
        <span className="circle1"></span>
        <span className="circle2"></span>
        <span className="circle3"></span>
        <span className="circle4"></span>
        <span className="circle5"></span>
        <span className="text text-sm">Enviar</span>
      </button>
      <section className="my-5 w-75">
        {comments.map((comment) => (
          <div key={comment} className="flex flex-col items-center mb-5">
            <h6 className="text-[var(--text-color)] text-center text-sm">
              {comment.name}
            </h6>
            <p className="text-[var(--text-color)] text-sm text-justify border-b-2 py-3">
              {comment.comment}
            </p>
          </div>
        ))}
      </section>
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
