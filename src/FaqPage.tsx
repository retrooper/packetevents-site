import FaqAccordion from "./components/faq/FaqAccordion";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const FaqPage = () => {
  return (
    <>
      <NavBar />

      <section>
        <FaqAccordion />
      </section>

      <Footer />
    </>
  );
};

export default FaqPage;
