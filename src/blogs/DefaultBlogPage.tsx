import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Blog, formatDateWithSuffix } from "./Blog";

const DefaultBlogPage = (props: { blog: Blog }) => {
  const blog = props.blog;
  const formattedDate = formatDateWithSuffix(blog.date);

  return (
    <>
      <NavBar />

      <section className="w-full pt-20 xs:pt-40">
        <div className="md:mx-auto max-w-4xl m-5">
          <Link to="/blog">
            <p className="text-white">{"<"} Back</p>
          </Link>

          <br />
          <div className="mx-auto">
            <p className="text-zinc-300 text-center text-xs">{formattedDate}</p>
            <p className="text-indigo-500 text-center font-medium text-2xl xs:text-4xl">
              {blog.title}
            </p>

            <div className="mt-5">
              {blog.content ? blog.content : blog.brief}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DefaultBlogPage;
