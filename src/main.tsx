import App from "./routes/App.tsx";
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
  {/* Right now for simplicity, we make the first blog show up on /blog, later will change ofc*/},
  { path: "blog", element: <article className="prose prose-2xl prose-zinc"><FirstBlog /></article>},
  { path: "blog/first-blog-post", element: <FirstBlog /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
