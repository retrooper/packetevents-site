const HomePageFeatures = () => {
  return (
    <>
      <div className="w-full bg-zinc-900 flex justify-center">
        <div className="flex-col gap-5 hidden md:flex">
          <div className="w-full max-w-4xl flex justify-center gap-5">
            <div className="bg-zinc-800 p-10 rounded-lg shadow-lg w-72">
              <p className="text-white text-lg font-medium">
                Free & Open Source
              </p>
              <p className="text-zinc-300">Respects your freedom</p>

              <p className="mt-5 text-sm text-white">Transparent development</p>
            </div>
            <div className="bg-zinc-800 p-10 rounded-lg shadow-lg w-72">
              <p className="text-white text-lg font-medium">Active Community</p>
              <p className="text-zinc-300">Collaborative user base</p>

              <p className="mt-5 text-sm text-white">
                Active knowledge exchange
              </p>
            </div>
            <div className="bg-zinc-800 p-10 rounded-lg shadow-lg w-72">
              <p className="text-white text-lg font-medium">Rich Features</p>
              <p className="text-zinc-300">Focus on convenience</p>

              <p className="mt-5 text-sm text-white">Intuitive integration</p>
            </div>
          </div>

          <div className="w-full max-w-4xl flex justify-center gap-5">
            <div className="bg-zinc-800 p-10 rounded-lg shadow-lg w-72">
              <p className="text-white text-lg font-medium">Portable</p>
              <p className="text-zinc-300">Write once, run anywhere</p>

              <p className="mt-5 text-sm text-white">Transparent development</p>
            </div>
            <div className="bg-zinc-800 p-10 rounded-lg shadow-lg w-72">
              <p className="text-white text-lg font-medium">Ubiquitous</p>
              <p className="text-zinc-300">Powering over 90,000 players</p>

              <p className="mt-5 text-sm text-white">
                Running on over 20,000 servers
              </p>
            </div>
            <div className="bg-zinc-800 p-10 rounded-lg shadow-lg w-72">
              <p className="text-white text-lg font-medium">Innovative</p>
              <p className="text-zinc-300">Modern approach</p>

              <p className="mt-5 text-sm text-white">Different approach</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageFeatures;
