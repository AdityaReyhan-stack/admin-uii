import "./App.css";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Balance from "./pages/balance";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
  },

  {
    path: "/balance",
    element: <Balance />,
  },

  {
    path: "/signin",
    element: <SignIn />,
  },

  {
    path: "/register",
    element: <SignUp />,
  },
]);

function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;
