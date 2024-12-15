import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import Hero from "./pages/hero";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Hero />
  </StrictMode>
);
