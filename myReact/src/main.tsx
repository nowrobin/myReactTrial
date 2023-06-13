import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { worker } from "./msw/worker";
import "./index.css";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

// if (import.meta.env.DEV) {
//   worker.start();
// }
//const router = createBrowserRouter([]);

// const test = import.meta.env.DEV;
// if (test) {
//   worker.start();
// }
// if (process.env.NODE_ENV === "development") {
//   const { worker } = require("./msw/worker");
//   worker.start();
// }

if (process.env.NODE_ENV === "development") {
  worker.start();
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//ServiceWorkerRegistration.unregister();
