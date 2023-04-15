import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { worker } from "./msw/worker";
import "./index.css";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";

// if (import.meta.env.DEV) {
//   worker.start();
// }
// const router = createBrowserRouter([]);

const test = import.meta.env.VITE_TEST;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
