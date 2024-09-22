import "flowbite";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import FaqPage from "./FaqPage";
import React from "preact/compat";
import BlogPage from "./BlogPage";
import { BlogPageDisplay } from "./blogs/Blog";
import { Release240 } from "./blogs/Release-2.4.0";
import DefaultBlogPage from "./blogs/DefaultBlogPage";
import { Release250 } from "./blogs/Release-2.5.0";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "faq",
          element: <FaqPage />,
        },
        {
          path: "blog",
          element: <BlogPage />,
        },
        {
          path: "blog/release-2-4-0",
          element: <DefaultBlogPage blog={Release240} />,
        },
        {
          path: "blog/release-2-5-0",
          element: <DefaultBlogPage blog={Release250} />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
