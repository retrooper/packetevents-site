const Footer = () => {
  return (
    <>
      <nav className="bg-zinc-800 mt-20 w-full z-20 bottom-0 start-0 border-b-0.5 border-zinc-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-full flex flex-col md:flex-row justify-center gap-10 mt-10">
            <div className="flex flex-col">
              <p className="text-white font-medium">Resources</p>
              <a
                href="https://docs.packetevents.com"
                target="_"
                className="text-zinc-300 font-medium"
              >
                Docs
              </a>
              <a
                href="https://docs.packetevents.com/getting-started"
                target="_"
                className="text-zinc-300 font-medium"
              >
                Getting Started
              </a>
              <a
                href="https://javadocs.packetevents.com"
                target="_"
                className="text-zinc-300 font-medium"
              >
                JavaDocs
              </a>
              <a
                href="https://bstats.org/plugin/bukkit/packetevents/11327"
                target="_"
                className="text-zinc-300 font-medium"
              >
                Statistics
              </a>
            </div>
            <div className="flex flex-col">
              <p className="text-white font-medium">Help Center</p>
              <a
                href="https://discord.gg/DVHxPPxHZc"
                target="_"
                className="text-zinc-300 font-medium"
              >
                Discord Server
              </a>
              <a
                href="mailto:retrooperdev@gmail.com"
                target="_"
                className="text-zinc-300 font-medium"
              >
                Contact Us
              </a>
            </div>
            <div className="flex flex-col">
              <p className="text-white font-medium">Legal</p>
              <a href="#" target="_" className="text-zinc-300 font-medium">
                Privacy Policy
              </a>
              <a href="#" target="_" className="text-zinc-300 font-medium">
                Licensing
              </a>
              <a href="#" target="_" className="text-zinc-300 font-medium">
                Terms & Conditions
              </a>
            </div>
          </div>
          <div className="">
            <p className="text-white mt-10">©2024 retrooper</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
