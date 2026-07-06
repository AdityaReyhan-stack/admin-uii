import React from "react";
import Logo from "../Elements/Logo";

function AuthLayout({ children }) {
  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
      <div className="w-full max-w-sm">
        <Logo />

        <div className="mt-16">{children}</div>
      </div>
    </main>
  );
}

export default AuthLayout;
