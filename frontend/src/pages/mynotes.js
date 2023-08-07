import React, { useEffect } from "react";

const MyNotes = () => {
  useEffect(() => {
    //update document title
    document.title = "My notes - notedly";
  });

  return (
    <div>
      <h1>Notedly</h1>
      <p>These are my notes</p>
    </div>
  );
};

export default MyNotes;
