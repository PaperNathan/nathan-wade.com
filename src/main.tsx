import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import getRouter from "./router";

const router = getRouter();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
