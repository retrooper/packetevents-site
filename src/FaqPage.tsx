import FaqAccordion from "./components/faq/FaqAccordion";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const FaqPage = () => {
  return (
    <>
      <NavBar />

      <section>
        <div className=" h-screen mb-40 bg-zinc-900 pt-40">
          <p className="text-zinc-100 mx-auto text-center text-2xl mb-10 font-medium">
            Frequently Asked Questions
            <div className="w-full max-w-4xl mx-auto mt-5 h-1 bg-indigo-700" />
          </p>
          <FaqAccordion />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FaqPage;
