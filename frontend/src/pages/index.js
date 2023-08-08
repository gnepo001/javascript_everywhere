import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import layout
import Layout from "../components/Layout.js";

import Home from "./home.js";
import MyNotes from "./mynotes.js";
import Favorites from "./favorites.js";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/mynotes" element={<MyNotes />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Pages;
