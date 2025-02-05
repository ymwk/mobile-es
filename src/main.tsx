import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/fonts/pretendard/pretendardvariable.css"
import "./assets/fonts/nanumsquareneo/nanumsquareneo.css"
import "./assets/fonts/montserrat/montserrat.css"
import "./assets/styles/index.scss"
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/mobile-es">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);