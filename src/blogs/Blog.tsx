import { JSX } from "preact/jsx-runtime";
import { Link } from "react-router-dom";

export type Blog = {
  date: Date;
  title: string;
  brief: JSX.Element;
  content: JSX.Element | null;
  pagelink: string;
};

export const BriefDisplay = (props: { blog: Blog }) => {
  const blog = props.blog;

  const formattedDate = formatDateWithSuffix(blog.date);

  return (
    <div className="border border-zinc-700 p-2 xs:p-10 rounded-xl flex flex-col justify-between">
      <div className="">
        <p className="text-zinc-300 text-xs xs:text-md">{formattedDate}</p>
        <p className="text-indigo-500 font-medium xs:text-xl">{blog.title}</p>

        {blog.brief}
      </div>

      <Link to={blog.pagelink}>
        <div className="w-full text-center bg-zinc-700 hover:bg-zinc-600 p-2 rounded-xl mt-5 bottom-0">
          <p className="text-white">Read More</p>
        </div>
      </Link>
    </div>
  );
};

function getDayWithSuffix(day: number) {
  const suffix = (day: number) => {
    if (day >= 11 && day <= 13) return "th"; // Special cases for 11th, 12th, and 13th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return day + suffix(day);
}

export function formatDateWithSuffix(date: Date) {
  const options = { month: "long" };
  const day = date.getDate();
  const formattedDate = date.toLocaleDateString("en-US", options as any);

  return `${formattedDate} ${getDayWithSuffix(day)}, ${date.getFullYear()}`;
}
