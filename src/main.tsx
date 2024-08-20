import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.tsx";
import Blog from "./routes/Blog.tsx";
import Error from "./routes/Error.tsx";

import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

import FirstBlog from "./routes/first-blog-post.mdx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  { path: "blog", element: <FirstBlog /> },
  { path: "blog/first-blog-post", element: <FirstBlog /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
