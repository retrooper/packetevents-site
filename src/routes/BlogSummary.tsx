import { ThemeProvider } from "@/components/theme-provider";
import PageHeader from "../PageHeader";
import { Separator } from "@/components/ui/separator";

import FirstBlog from "../blogs/first-blog-post.mdx";
import SecondBlog from "../blogs/second-blog-post.mdx";

export default function BlogSummary() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* Page header */}
        <PageHeader />
        {/* Separator */}
        <Separator className="my-5" />
        <div className="flex justify-left mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-xl sm:px-16 xl:px-48 dark:text-white">
          Latest PacketEvents news
        </div>
        <div className="flex justify-left mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Today: {new Date().toDateString()}
        </div>
        <article className="prose prose-2xl prose-zinc pl-48 flow-root">
          <span className="text-white">
            <div className="size-3/6 float-left">
              <a href="blog/second-blog-post.mdx">
                <SecondBlog />
              </a>
            </div>
            <div className="size-3/6 float-right pl-24">
              <a href="blog/first-blog-post.mdx">
                <FirstBlog />
              </a>
            </div>
          </span>
        </article>
      </ThemeProvider>
    </>
  );
}
