import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CustomButton } from "./components/atom/buttons";
import MainPage from "@/pages/main";
import { routes } from "@/Routes";
import { useRoutes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
function App() {
  const elem = useRoutes(routes);
  return <div>{elem}</div>;
}

export default App;
