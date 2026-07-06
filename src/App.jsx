import "./App.css";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex justify-center items-center min-h-screen">
        <Link to="/login" className="p-2 m-5 bg-primary text-white rounded">
          Login
        </Link>

        <Link to="/register" className="p-2 m-5 bg-primary text-white rounded">
          Register
        </Link>
      </div>
    ),
    errorElement: <Error />,
  },
  {
    path: "/login",
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
