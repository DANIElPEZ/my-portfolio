import React from "react";
import { Nav_bar } from "./../components/nav_bar.jsx";
import { Footer } from "./../components/footer.jsx";
import "./../styles/button_comment.css";

export function Comments() {
  let [comments, set_comments] = React.useState([]);
  const [name, set_name] = React.useState("");
  const [comment, set_comment] = React.useState("");

  React.useEffect(() => {
      setTimeout(() => getComments(), 2000);
  }, []);

  async function getComments() {
    try {
      const res = await fetch(
        "https://pages-and-apis-production.up.railway.app/comments",
      );
      const data = await res.json();
      set_comments(data);
    } catch (err) {
      console.error("Error al obtener comentarios:", err);
    }
  }

  async function sendComment() {
    const { name: sanitized_name, comment: sanitized_comment } = sanitizeInput(
      name,
      comment
    );

    if (!sanitized_name || !sanitized_comment) {
      alert("Por favor, completa los campos.");
      return;
    }
    try {
      await fetch("https://pages-and-apis-production.up.railway.app/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          comment: comment,
        }),
      });
      set_name("");
      set_comment("");
      getComments();
    } catch (error) {
      console.error("Error al enviar el comentario:", error);
      alert("Error al enviar el comentario. Por favor, inténtalo de nuevo.");
    }
  }

  function sanitizeInput(name, comment) {
    const sanitizeName = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const sanitizeComment = /^[\p{L}\p{Emoji_Presentation}\p{Emoji}\s]+$/u;

    const isValidName = sanitizeName.test(name.trim());
    const isValidComment = sanitizeComment.test(comment.trim());

    return {
      name: isValidName,
      comment: isValidComment,
    };
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
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id} className="flex flex-col items-center mb-5">
              <h6 className="text-[var(--text-color)] text-center text-sm">
                {comment.name}
              </h6>
              <p className="text-[var(--text-color)] break-all text-wrap text-sm text-justify border-b-2 py-3">
                {comment.comment}
              </p>
            </div>
          ))
        ) : (
          <div className="flex w-full h-full items-center justify-center">
            <span className="h-[55px] w-[55px] rounded-full border-8 border-neutral-600 border-l-[#3f99f2] animate-spin"></span>
          </div>
        )}
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
