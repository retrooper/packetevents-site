import { BriefDisplay } from "./blogs/Blog";
import { Release240 } from "./blogs/Release-2.4.0";
import { Release250 } from "./blogs/Release-2.5.0";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const BlogPage = () => {
  return (
    <>
      <NavBar />

      <section>
        <div className="w-full min-h-screen flex flex-col items-center mt-40">
          <div className="w-full px-10 md:px-0 max-w-screen-xl h-full">
            <p className="text-white text-2xl font-medium">
              Latest PacketEvents news
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-5">
              <BriefDisplay blog={Release250} />
              <BriefDisplay blog={Release240} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPage;
