import { createBrowserRouter } from "react-router-dom";
import App from "@/App.tsx";
import ProjectsHome from "./Projects/ProjectsHome";

export default function getRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/projects",
      element: <ProjectsHome />,
    }
  ]);
};
