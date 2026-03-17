'use client';

import { useState, useEffect } from "react";
import "@/src/components/styles/button_comment.css";
import { getComments, postComment } from "@/src/lib/actions/comments";
import { sanitizeInput } from "@/src/lib/utils";

export default function Comments() {
  let [comments, set_comments] = useState<any[]>([]);
  const [name, set_name] = useState("");
  const [comment, set_comment] = useState("");

  useEffect(() => {
    setTimeout(() => fetchComments(), 2000);
  }, []);

  const fetchComments = async () => {
    const comments = await getComments();
    if (Array.isArray(comments)) {
      set_comments(comments);
    }
  };

  const sendComment = async () => {
    const { name: sanitized_name, comment: sanitized_comment } = sanitizeInput(
      name,
      comment,
    );
    if (!sanitized_name || !sanitized_comment) {
      alert("Por favor, completa los campos.");
      return;
    }

    await postComment(name, comment);
    set_name("");
    set_comment("");
    fetchComments();
  };

  return (
    <div className="flex flex-col items-center h-ful w-full bg-(--main-content-bg-color)">
      <input
        required
        onChange={(e) => set_name(e.target.value)}
        placeholder="Escribe tu nombre"
        className="w-65 bg-[#3f99f2] px-2 py-1 rounded-sm text-center placeholder-gray-100 outline-0 focus:bg-[#3178d3] duration-150 text-(--text-color)"
      />
      <textarea
        required
        onChange={(e) => set_comment(e.target.value)}
        placeholder="Deja tu comentario"
        className="w-65 h-30 bg-[#36b1ea] rounded-sm my-4 px-1 text-center placeholder-gray-100 outline-0 focus:bg-[#4aa0c9] duration-150 text-(--text-color)"
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
              <h6 className="text-(--text-color) text-center text-sm">
                {comment.name}
              </h6>
              <p className="text-(--text-color) wrap-break-word text-wrap text-center text-sm border-b-2 py-3">
                {comment.comment}
              </p>
            </div>
          ))
        ) : (
          <div className="flex w-full h-full items-center justify-center">
            <span className="h-13.75 w-13.75 rounded-full border-8 border-neutral-600 border-l-[#3f99f2] animate-spin"></span>
          </div>
        )}
      </section>
    </div>
  );
}
