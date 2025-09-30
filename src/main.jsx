import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import HomePage from "./pages/homePage.jsx";
import SignUpPage from "./pages/auth/SignUpPage.jsx";
import SignInPage from "./pages/auth/SignInPage.jsx";
import CompleteProfilePage from "./pages/auth/CompleteProfilePage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
     
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "signup", element: <SignUpPage /> },
      { path: "signin", element: <SignInPage /> },
       { path: "complete-profile", element: <CompleteProfilePage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
