import React from "react";

function Button({ children, type = "submit", variant = "primary" }) {
  const baseClass =
    "h-12 rounded-md text-sm w-full cursor-pointer transition duration-300 hover:scale-105";

  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-05 text-gray-01",
  };

  return (
    <button type={type} className={`${baseClass} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
