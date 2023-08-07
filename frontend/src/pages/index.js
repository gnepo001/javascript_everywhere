import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home.js";
import MyNotes from "./mynotes.js";
import Favorites from "./favorites.js";

const Pages = () => {
  return (
    <>
      <h1>test</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Pages;
