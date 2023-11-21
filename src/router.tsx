import { createBrowserRouter } from "react-router-dom";

import App from "@/App.tsx";
import Error from "@/Error/Error.tsx";
import Home from "@/Home/Home";
import About from "@/About/About";
import Stack from "@/Stack/Stack";
import StyleGuide from "@/StyleGuide/StyleGuide";
import Shortcuts from "@/Shortcuts/Shortcuts";
import Resume from "@/components/Resume/Resume";

import ScoutAPM from "@/components/Jobs/ScoutAPM";
import FoxAndFarthing from "@/components/Jobs/FoxAndFarthing";
import FrankishIntl from "@/components/Jobs/FrankishIntl";

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
          path: "/jobs/scout_apm",
          element: <ScoutAPM />
        },
        {
          path: "/jobs/fox_and_farthing",
          element: <FoxAndFarthing />
        },
        {
          path: "/jobs/frankish_intl",
          element: <FrankishIntl />
        },
      ]
    }
  ]);
}
