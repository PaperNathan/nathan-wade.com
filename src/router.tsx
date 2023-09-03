import { createBrowserRouter } from "react-router-dom";
import App from "@/App.tsx";
import Error from "@/Error/Error.tsx";
import Home from "@/Home/Home";
import About from "@/About/About";

export default function getRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />
        }
      ]
    },
  ]);
}
