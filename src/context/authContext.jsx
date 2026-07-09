import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");

    if (!token) return null;

    // Dummy Login
    if (token === "dummy-token") {
      return {
        name: "Aditya",
        email: "hello@example.com",
      };
    }

    // Login JWT asli
    try {
      return jwtDecode(token);
    } catch (err) {
      console.error("Invalid token", err);
      localStorage.removeItem("token");
      return null;
    }
  });

  const login = (token) => {
    // Dummy Login
    if (token === "dummy-token") {
      const dummyUser = {
        name: "Aditya",
        email: "hello@example.com",
      };

      setUser(dummyUser);
      localStorage.setItem("token", token);
      return;
    }

    // Login JWT asli
    try {
      const decoded = jwtDecode(token);

      setUser(decoded);
      localStorage.setItem("token", token);
    } catch (err) {
      console.error("Invalid token", err);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
