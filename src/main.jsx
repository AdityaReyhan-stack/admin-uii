import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/authContext";
import { ThemeContextProvider } from "./context/themeContext";
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
