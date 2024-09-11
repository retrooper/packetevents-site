// import { ThemeProvider } from "@/components/theme-provider";
// import PageHeader from "../PageHeader";
// import { Separator } from "@/components/ui/separator";
// import FirstBlog from "../blogs/first-blog-post.mdx";
// import SecondBlog from "../blogs/second-blog-post.mdx";
// import { Textarea } from "@/components/ui/textarea";
// import { AlertCircle } from "lucide-react";

// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// import { Route, useLocation, Link, Location } from "react-router-dom";
// import Error from "./Error";

// export default function Blog() {
//   const location = useLocation() as Location;
//   console.log("Name: " + location.pathname);

//   function PostBlogSection() {
//     return (
//       <div>
//         <div className="pt-10">
//           <Textarea placeholder="Type your comment here." disabled />
//         </div>
//         <div className="pt-10">
//           <Alert variant="destructive">
//             <AlertCircle className="h-4 w-4" />
//             <AlertTitle></AlertTitle>
//             <AlertDescription>
//               Comments are currently not supported. Please check again later!
//             </AlertDescription>
//           </Alert>
//         </div>
//       </div>
//     );
//   }

//   function Test() {
//     if (location.pathname.endsWith("blog/first-blog-post.mdx")) {
//       return (
//         <div>
//           <FirstBlog />
//           <PostBlogSection />
//         </div>
//       );
//     } else if (location.pathname.endsWith("blog/second-blog-post.mdx")) {
//       return (
//         <div>
//           <SecondBlog />
//           <PostBlogSection />
//         </div>
//       );
//     } else {
//       return <Error />;
//     }
//   }

//   return (
//     <>
//       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//         {/* Page header */}
//         <PageHeader />
//         {/* Separator */}
//         <Separator className="my-5" />
//         <div className="flex justify-left mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
//           {new Date().toDateString()}
//         </div>
//         <article className="prose prose-2xl prose-zinc pl-48">
//           <span className="text-white">
//             <Test />
//           </span>
//         </article>
//       </ThemeProvider>
//     </>
//   );
// }
