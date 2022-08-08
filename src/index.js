// import ReactDOM from "react-dom";
// import "./index.css";
// import "./assets/icons/style.css";

// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import { createRoot } from 'react-dom/client';

import "./index.css";
import "./assets/icons/style.css";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container)

root.render(<App />);