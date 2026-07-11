import "./App.css";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/authContext";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Balance from "./pages/balance";
import Expenses from "./pages/Expenses";
import Bill from "./pages/Bill"; // tambahkan import ini

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Hanya bisa diakses kalau SUDAH login
function RequireAuth({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

// Hanya bisa diakses kalau BELUM login
function NotRequireAuth({ children }) {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    errorElement: <Error />,
  },

  {
    path: "/balance",
    element: (
      <RequireAuth>
        <Balance />
      </RequireAuth>
    ),
  },

  {
    path: "/expenses",
    element: (
      <RequireAuth>
        <Expenses />
      </RequireAuth>
    ),
  },

  {
    path: "/bill",
    element: (
      <RequireAuth>
        <Bill />
      </RequireAuth>
    ),
  },

  {
    path: "/signin",
    element: (
      <NotRequireAuth>
        <SignIn />
      </NotRequireAuth>
    ),
  },

  {
    path: "/register",
    element: (
      <NotRequireAuth>
        <SignUp />
      </NotRequireAuth>
    ),
  },
]);

function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;
