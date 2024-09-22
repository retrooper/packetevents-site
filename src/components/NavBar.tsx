const NavBar = () => {
  return (
    <nav className="bg-zinc-900 fixed w-screen max-w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          className="text-2xl font-medium text-white hover:text-indigo-700"
          href="/"
        >
          packetevents
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="gap-3 mr-5 hidden md:flex">
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
          <a
            type="button"
            href="https://docs.packetevents.com/getting-started"
            target="_"
            className="hidden xs:block text-white bg-indigo-800 hover:bg-indigo-700 focus:ring-1 focus:outline-none 
              focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
          >
            Get started
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
              text-gray-500 rounded-lg md:hidden hover:bg-zinc-800 focus:outline-none focus:ring-1 
              focus:ring-zinc-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-zinc-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-zinc-900 ">
            <li className="flex items-center group cursor-pointer">
              <a
                href="https://docs.packetevents.com/"
                target="_"
                className="block py-2 px-3 text-white rounded hover:bg-zinc-900 md:hover:bg-transparent md:group-hover:text-indigo-700 md:p-0 
                align-items-center"
              >
                Docs
              </a>
              <img
                className="h-3.5 inline ml-2 group-hover:hidden"
                src="arrow-up-right-from-square.svg"
              />

              <img
                className="h-3.5 ml-2 group-hover:block hidden"
                src="arrow-up-right-from-square-4338ca.svg"
              />
            </li>{" "}
            <li className="flex items-center group cursor-pointer">
              <a
                href="https://github.com/retrooper/packetevents-example"
                target="_"
                className="block py-2 px-3 text-white rounded hover:bg-zinc-900 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 "
              >
                Examples
              </a>
              <img
                className="h-3.5 inline ml-2 group-hover:hidden"
                src="arrow-up-right-from-square.svg"
              />

              <img
                className="h-3.5 ml-2 group-hover:block hidden"
                src="arrow-up-right-from-square-4338ca.svg"
              />
            </li>
            <li>
              <a
                href="/blog"
                className="block py-2 px-3 text-white rounded hover:bg-zinc-900 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 "
              >
                Blog
              </a>
            </li>
            {/* Mobile Navbar items for github & discord icon */}
            <li className="block xs:hidden w-full">
              <a
                type="button"
                href="https://docs.packetevents.com/getting-started"
                target="_"
                className="w-full "
              >
                <div
                  className="text-white bg-indigo-800 hover:bg-indigo-700 focus:ring-1 focus:outline-none 
              focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  <p>Get started</p>
                </div>
              </a>
            </li>
            <li className="md:hidden mt-2 flex justify-between gap-3">
              <a
                className="w-1/2 bg-zinc-900 px-3 py-2 rounded-lg"
                href="https://discord.gg/DVHxPPxHZc"
                target="_"
              >
                <img
                  className="h-7 cursor-pointer mx-auto"
                  src="discord-icon-svgrepo-com.svg"
                />
              </a>
              <a
                className="w-1/2 bg-zinc-900 px-3 py-2 rounded-lg"
                href="https://github.com/retrooper/packetevents"
                target="_"
              >
                <img
                  className="h-7 cursor-pointer mx-auto"
                  src="github-mark-white.svg"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
