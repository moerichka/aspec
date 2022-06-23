import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop"

import Main from "./pages/Main";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import Layout from "./pages/Layout";
import News from "./pages/News";
import Buy from "./pages/Buy";
import OneNews from "./pages/OneNews"
import OneNewsText from "./pages/OneNewsText"
import Contacts from "./pages/Contacts"
import ToInvestors from "./pages/ToInvestors"
import EstateSelection from "./pages/EstateSelection"
import Company from "./pages/Company"
import {NoMatchPage, NoMatch404, NoMatch405, NoMatch406} from "./pages/NoMatch"
import Favorites from "./pages/Favorites"

export default function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:projectId" element={<Project />} />
          <Route path="/project/:projectId/layout/:layoutId" element={<Layout />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:newsId" element={<OneNews />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/toinvestors" element={<ToInvestors />} />
          <Route path="/estateselection" element={<EstateSelection />} />
          <Route path="/company" element={<Company />} />
          <Route path="/news/:newsId/text" element={<OneNewsText />} />
          <Route path="/favorites" element={<Favorites />} />

          <Route path="*" element={<NoMatchPage />} />
          <Route path="/404" element={<NoMatch404 />} />
          <Route path="/405" element={<NoMatch405 />} />
          <Route path="/406" element={<NoMatch406 />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}
