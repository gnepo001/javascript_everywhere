import React from "react";
import ReactMarkdown from "react-markdown";

import { format } from "date-fns";

const Note = ({ note }) => {
  return (
    <article>
      <img
        src={note.author.avatar}
        alt="{note.author.username} avatar"
        height="50px"
      />{" "}
      {note.author.username} {format(new Date(note.createdAt), "MMM dd yyyy")}{" "}
      {note.favoriteCount}
      {/* <ReactMarkdown source={note.content} /> */}
      <ReactMarkdown>{note.content}</ReactMarkdown>
      {/* <p>{note.content}</p> */}
    </article>
  );
};

export default Note;
