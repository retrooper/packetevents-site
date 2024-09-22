const HomePageHero = () => {
  return (
    <div className="px-5 w-full flex justify-center bg-zinc-900">
      <div className="group w-full max-w-4xl text-center pt-40 items-center flex flex-col relative">
        <div className="rounded-full border border-zinc-600 w-fit px-3 py-2">
          <p className="text-zinc-300">
            Powering over <span className="text-white">90,000</span> players
          </p>
        </div>

        <p className="mt-10 text-white text-4xl font-medium">
          Powerful, Versatile
        </p>
        <p className="mt-5 text-indigo-700 text-3xl xs:text-5xl md:text-6xl font-bold">
          PacketEvents
        </p>
        <p className="mt-2 text-zinc-300 font-medium">
          Achieve <span className="underline">next-level</span> networking.
        </p>

        <div className="mt-10 flex flex-col xs:flex-row gap-2 md:gap-10 items-center">
          <a
            href="https://modrinth.com/plugin/packetevents"
            target="_"
            className="w-full xs:w-fit"
          >
            <div className="w-full text-white text-sm font-medium rounded-lg bg-zinc-700 hover:bg-zinc-800 px-5 py-3 cursor-pointer">
              Downloads
            </div>
          </a>

          <a
            href="https://docs.packetevents.com/getting-started"
            className="w-full xs:w-fit"
          >
            <div
              className="w-full text-white hover:bg-zinc-700 rounded-lg px-5 py-3
                 cursor-pointer flex items-center gap-1 sm:gap-3
                 border border-zinc-600 xs:border-none"
            >
              Getting started
              <img className="h-4" src="angle-small-down.svg" />
            </div>
          </a>

          <a href="/faq" className="w-full xs:w-fit">
            <div className="text-white border rounded-lg px-5 py-3 border-zinc-600 hover:bg-zinc-600 cursor-pointer">
              FAQ
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
