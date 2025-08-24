/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { DarkModeProvider } from "./hooks/use-dark-mode-provider/index.tsx";
import { system } from "@chakra-ui/react/preset";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system}>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
