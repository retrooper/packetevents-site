import App from "./routes/App.tsx";
import FAQ from "./routes/FAQ.tsx";
import Error from "./routes/Error.tsx";
import Blog from "./routes/Blog.tsx";
import BlogSummary from "./routes/BlogSummary.tsx";
import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    /* Right now for simplicity, we make the first blog show up on /blog, later will change ofc*/
  },
  {
    path: "blog/:blogId",
    element: <Blog />,
  },
  {
    path: "blog",
    element: <BlogSummary />,
  },
  { path: "faq", element: <FAQ /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
