import React, { useContext } from "react";
import Logo from "../Elements/Logo";
import { ThemeContext } from "../../context/themeContext";

function AuthLayout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`min-h-screen bg-special-mainBg flex justify-center items-center ${theme.name}`}
    >
      <div className="w-full max-w-sm">
        <Logo />

        <div className="mt-16">{children}</div>
      </div>
    </main>
  );
}

export default AuthLayout;
