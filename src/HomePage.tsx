import Footer from "./components/Footer";
import HomePageFeatures from "./components/homepage/HomepageFeatures";
import HomePageFeaturesMobile from "./components/homepage/HomepageFeaturesMobile";
import HomePageHero from "./components/homepage/HomepageHero";
import HomepagePossibilities from "./components/homepage/HomepagePossibilities";
import NavBar from "./components/NavBar";
import { GitBookProvider, GitBookFrame } from "@gitbook/embed/react";

const HomePage = () => {  
  return (
    <GitBookProvider siteURL="https://docs.packetevents.com">
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

      {/* IMPORTANT: constrain the frame */}
      <section className="bg-zinc-900 py-20">
        <div className="relative h-[500px] w-full max-w-6xl mx-auto">
          <GitBookFrame
            suggestions={[
              "Help me get started",
              "What can I ask you?",
              "Show me tips and tricks",
            ]}
          />
        </div>
      </section>

      <Footer />
    </GitBookProvider>
  );
};

export default HomePage;
