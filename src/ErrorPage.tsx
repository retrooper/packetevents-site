import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const ErrorPage = () => {
  return (
    <>
      <NavBar />

      <section>
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <p className="text-white text-7xl font-medium">Uh oh!</p>
          <p className="text-zinc-300 text-xl">This page doesn't exist.</p>
          <a
            className="px-5 py-3 text-white bg-indigo-800 hover:bg-indigo-700 rounded-lg mt-10"
            href="/"
          >
            Go Back
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ErrorPage;
