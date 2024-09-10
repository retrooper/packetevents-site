import Footer from "./components/Footer";
import HomePageFeatures from "./components/homepage/HomepageFeatures";
import HomePageFeaturesMobile from "./components/homepage/HomepageFeaturesMobile";
import HomePageHero from "./components/homepage/HomepageHero";
import HomepagePossibilities from "./components/homepage/HomepagePossibilities";
import NavBar from "./components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />

      <section>
        <HomePageHero />
      </section>

      <section className="bg-zinc-900 pt-10 md:pt-32">
        <HomePageFeatures />
        <HomePageFeaturesMobile />
      </section>

      <section className="bg-zinc-900">
        <HomepagePossibilities />
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
