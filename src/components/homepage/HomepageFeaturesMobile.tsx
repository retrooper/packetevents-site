import { useKeenSlider } from "keen-slider/react";

const HomePageFeaturesMobile = () => {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 1.5,
      spacing: 15,
    },
  });

  return (
    <>
      <div
        ref={sliderRef}
        className="keen-slider bg-zinc-900 md:hidden
        flex py-5 overflow-hidden"
      >
        <div
          className="keen-slider__slide number-slide1 
          bg-zinc-800 p-10 rounded-lg shadow-lg w-72"
        >
          <p className="text-white text-lg font-medium">Free & Open Source</p>
          <p className="text-zinc-300">Respects your freedom</p>

          <p className="mt-5 text-sm text-white">Transparent development</p>
        </div>

        <div
          className="keen-slider__slide number-slide2 
          bg-zinc-800 p-10 rounded-lg shadow-lg w-72"
        >
          <p className="text-white text-lg font-medium">Active Community</p>
          <p className="text-zinc-300">Collaborative user base</p>

          <p className="mt-5 text-sm text-white">Active knowledge exchange</p>
        </div>

        <div
          className="keen-slider__slide number-slide3 
          bg-zinc-800 p-10 rounded-lg shadow-lg w-72"
        >
          <p className="text-white text-lg font-medium">Rich Features</p>
          <p className="text-zinc-300">Focus on convenience</p>

          <p className="mt-5 text-sm text-white">Intuitive integration</p>
        </div>

        <div
          className="keen-slider__slide number-slide4 
          bg-zinc-800 p-10 rounded-lg shadow-lg w-72"
        >
          <p className="text-white text-lg font-medium">Portable</p>
          <p className="text-zinc-300">Write once, run anywhere</p>

          <p className="mt-5 text-sm text-white">Transparent development</p>
        </div>

        <div
          className="keen-slider__slide number-slide5 
          bg-zinc-800 p-10 rounded-lg shadow-lg w-72"
        >
          <p className="text-white text-lg font-medium">Ubiquitous</p>
          <p className="text-zinc-300">Powering over 90,000 players</p>

          <p className="mt-5 text-sm text-white">
            Running on over 20,000 servers
          </p>
        </div>

        <div
          className="keen-slider__slide number-slide6 
          bg-zinc-800 p-10 rounded-lg shadow-lg w-72"
        >
          <p className="text-white text-lg font-medium">Innovative</p>
          <p className="text-zinc-300">Modern approach</p>

          <p className="mt-5 text-sm text-white">Different approach</p>
        </div>
      </div>
    </>
  );
};

export default HomePageFeaturesMobile;
