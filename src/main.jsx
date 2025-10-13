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
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/reactQuery.js";
import FeedPage from "./pages/feed/FeedPage.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import GitHubCallback from "./pages/auth/GitHubCallback.jsx";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "feed",
        element:<ProtectedRoute><FeedPage/></ProtectedRoute>,
      },
      {
        path: "*",
        element:<NotFoundPage/>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "signup", element: <SignUpPage /> },
      { path: "signin", element: <SignInPage /> },
      { path: "complete-profile", element: <CompleteProfilePage /> },
         { path: "github/callback", element: <GitHubCallback /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </GoogleOAuthProvider>
);
