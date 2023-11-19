import { createBrowserRouter } from "react-router-dom";

import App from "@/App.tsx";
import Error from "@/Error/Error.tsx";
import Home from "@/Home/Home";
import About from "@/About/About";
import Stack from "@/Stack/Stack";
import StyleGuide from "@/StyleGuide/StyleGuide";
import Shortcuts from "@/Shortcuts/Shortcuts";
import Resume from "@/components/Resume/Resume";

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
        },
        {
          path: "/shortcuts",
          element: <Shortcuts />
        },
        {
          path: "/resume",
          element: <Resume />
        },
        {
          path: "/readme",
          element: <Home /> // portfolio
        }
      ]
    }
  ]);
}
