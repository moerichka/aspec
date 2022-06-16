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
import Contacts from "./pages/Contacts"
import ToInvestors from "./pages/ToInvestors"
import EstateSelection from "./pages/EstateSelection"
import Company from "./pages/Company"
import NoMatch from "./pages/NoMatch"

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

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}
