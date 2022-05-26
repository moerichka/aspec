import React from "react";

import { BrowserRouter as Router, Routes, Navigate, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop"

import Main from "./pages/Main";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:projectId" element={<Project />} />
          <Route path="/project/:projectId/layout/:layoutId/" element={<Layout />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}
