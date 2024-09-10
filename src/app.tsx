import "flowbite";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import FaqPage from "./FaqPage";
import React from "react";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          path: "",
          element: <HomePage />,
        },
      ],
    },
    {
      index: true,
      path: "faq",
      element: <FaqPage />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
