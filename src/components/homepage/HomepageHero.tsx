const HomePageHero = () => {
  return (
    <div className="px-5 w-full flex justify-center bg-zinc-900">
      <div className="group w-full max-w-4xl text-center pt-40 items-center flex flex-col relative">
        <div className="absolute top-20 right-5 flex gap-2">
          <a href="https://discord.gg/DVHxPPxHZc" target="_">
            <img
              className="h-7 cursor-pointer"
              src="discord-icon-svgrepo-com.svg"
            />
          </a>
          <a href="https://github.com/retrooper/packetevents" target="_">
            <img className="h-7 cursor-pointer" src="github-mark-white.svg" />
          </a>
        </div>
        <div className="rounded-full border border-zinc-600 w-fit px-3 py-2">
          <p className="text-zinc-300">
            Powering over <span className="text-white">90,000</span> players
          </p>
        </div>

        <p className="mt-10 text-white text-4xl font-medium">
          Powerful, Versatile
        </p>
        <p className="mt-5 text-indigo-700 text-5xl md:text-6xl font-bold">
          PacketEvents
        </p>
        <p className="mt-2 text-zinc-300 font-medium">
          Achieve <span className="underline">next-level</span> networking.
        </p>

        <div className="mt-10 flex gap-7 md:gap-10 items-center">
          <a
            href="https://modrinth.com/plugin/packetevents"
            target="_"
            className="text-white text-sm font-medium rounded-lg bg-zinc-700 hover:bg-zinc-800 px-5 py-3 cursor-pointer"
          >
            Downloads
          </a>

          <a
            className="text-white hover:bg-zinc-700 rounded-lg px-5 py-3
                 cursor-pointer flex items-center gap-1 sm:gap-3"
          >
            Getting started
            <img className="h-4" src="angle-small-down.svg" />
          </a>

          <a
            href="/faq"
            className="text-white border rounded-lg px-5 py-3 border-zinc-600 hover:bg-zinc-600 cursor-pointer"
          >
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
