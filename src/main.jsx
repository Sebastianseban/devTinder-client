import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import HomePage from "./pages/homePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {index:true,element:<HomePage/>}
      //  { path: "feed", element: <Feed /> }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      //  { path: "signup", element: <SignUp /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
 <RouterProvider router={router}/>
  </StrictMode>
);
