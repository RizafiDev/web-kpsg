import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import Hero from "./pages/hero";
import Feature from "./pages/Feature";
import Story from "./pages/Story";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Hero />
    <Feature/>
    <Story/>
  </StrictMode>
);
