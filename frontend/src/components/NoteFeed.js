import React from "react";
import { Link } from "react-router-dom";

import Note from "./Note";

const NoteFeed = ({ notes }) => {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <Note note={note} />
          <Link to={`note/${note.id}`}>Permalink</Link>
        </div>
      ))}
    </div>
  );
};

export default NoteFeed;
