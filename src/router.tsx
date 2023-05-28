import { createBrowserRouter } from "react-router-dom";
import App from "@/App.tsx";
import Error from "@/Error/Error.tsx";
import Home from "@/Home/Home";
import ProjectsHome from "@/Projects/ProjectsHome";
import ArtHome from "@/Art/ArtHome";
import SketchesHome from "@/Sketches/SketchesHome";
import PlaceholderSketch from "@/Sketches/PlaceholderSketch/PlaceholderSketch";

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
          path: "/projects",
          element: <ProjectsHome />,
        },
        {
          path: "/art",
          element: <ArtHome />,
        },
        {
          path: "/code-sketches",
          element: <SketchesHome />,
        },
        // Specific Sketches
        {
          path: "/code-sketches/sketch",
          element: <PlaceholderSketch />,
        }
      ]
    },
  ]);
}
