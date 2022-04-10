import { useState } from "react";
import * as api from "../api";

export default function AddComment({ setComments, article_id }) {
  // this is a variable, commentInput is declared as '' in useState, setCommentInput is reassigning that variable
  const [commentInput, setCommentInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .addComment(article_id, { body: commentInput, username: "cooljmessy" })
      .then((comment) => {
        setCommentInput("");
        setComments((currentComment) => {
          return [comment, ...currentComment];
        });
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label id="add-comment-title">
        Add Comment:
        <input
          type="text"
          id="add-comment-box"
          value={commentInput}
          onChange={(event) => {
            setCommentInput(event.target.value);
          }}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
