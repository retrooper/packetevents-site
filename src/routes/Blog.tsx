import { ThemeProvider } from "@/components/theme-provider";
import PageHeader from "../PageHeader";
import PageTitle from "@/PageTitle";
import { Separator } from "@/components/ui/separator";
import FirstBlog from "./first-blog-post.mdx";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Blog() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* Page header */}
        <PageHeader />
        {/* Separator */}
        <Separator className="my-5" />
        <div className="flex justify-left mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {new Date().toDateString()}
        </div>
        <article className="prose prose-2xl prose-zinc pl-48">
          <span className="text-white">
            <FirstBlog />
            <div className="pt-10">
              <Textarea placeholder="Type your comment here." disabled />
            </div>
            <div className="pt-10">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle></AlertTitle>
                <AlertDescription>
                  Comments are currently not supported. Please check again
                  later!
                </AlertDescription>
              </Alert>
            </div>
          </span>
        </article>
      </ThemeProvider>
    </>
  );
}
