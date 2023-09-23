import { createBrowserRouter } from "react-router-dom";
import App from "@/App.tsx";
import Error from "@/Error/Error.tsx";
import Home from "@/Home/Home";
import About from "@/About/About";
import Stack from "@/Stack/Stack";
import StyleGuide from "@/StyleGuide/StyleGuide";

import DevView from "@/DevView/DevView";

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
        },
        {
          path: "/stack",
          element: <Stack />
        },
        {
          path: "/style-guide",
          element: <StyleGuide />
        }
      ]
    },
    {
      path: "/dev",
      element: <DevView />,
      errorElement: <Error />,
      children: []
    }
  ]);
}
