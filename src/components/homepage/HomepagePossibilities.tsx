const HomepagePossibilities = () => {
  return (
    <div className="w-full flex">
      <div
        className="w-full max-w-4xl mx-auto text-center px-10 md:px-0 md:mx-auto mt-10 md:mt-32
            flex flex-col gap-10"
      >
        <p className="text-white font-medium text-xl md:text-2xl">
          Whats possible with{" "}
          <span className="text-indigo-700">PacketEvents</span>
        </p>

        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="flex flex-col text-left md:w-1/2">
            <p className="text-white font-medium">Minecraft Server</p>
            <p className="text-zinc-300">
              Writing a Minecraft server powered by Netty & PacketEvents
            </p>
          </div>

          <div className="md:w-1/2 h-80 rounded-xl bg-white"></div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="flex flex-col text-left md:w-1/2">
            <p className="text-white font-medium">Cross-platform Development</p>
            <p className="text-zinc-300">
              PacketEvents allows you to create versatile, cross-platform
              minecraft plugins.
            </p>
          </div>

          <div className="md:w-1/2 h-80 rounded-xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default HomepagePossibilities;
