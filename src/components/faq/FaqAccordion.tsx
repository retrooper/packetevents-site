import FaqItem from "./FaqItem";

const FaqAccordion = () => {
  return (
    <div className="px-5 w-full flex justify-center">
      <div className="group w-full max-w-4xl text-left">
        <div id="accordion-collapse" data-accordion="collapse">
          <FaqItem index={0}>
            <span className="font-medium text-lg text-left">
              Where can I download the latest PacketEvents release?
            </span>

            <div className="text-left p-5 border-b border-zinc-800">
              <p class="mb-2 text-zinc-200 dark:text-gray-400">
                You can download the latest relase on {" "}
                <a
                  href="https://ci.codemc.io/job/retrooper/job/packetevents/"
                  className="text-indigo-700"
                >
                  Modrinth
                </a>
                .
              </p>
            </div>
          </FaqItem>

          <FaqItem index={1}>
            <span className="font-medium text-lg text-left">
              Where can I find PacketEvents development builds?
            </span>

            <div className="text-left p-5 border-b border-zinc-800">
              <p class="mb-2 text-zinc-200 dark:text-gray-400">
                You can download development builds on {" "}
                <a
                  href="https://ci.codemc.io/job/retrooper/job/packetevents/"
                  className="text-indigo-700"
                >
                  Jenkins
                </a>
                .
              </p>
            </div>
          </FaqItem>

          <FaqItem index={2}>
            <span className="font-medium text-lg text-left">
              What Minecraft verson does PacketEvents support?
            </span>

            <div className="text-left p-5 border-b border-zinc-800">
              <p class="mb-2 text-zinc-200 dark:text-gray-400">
                PacketEvents supports Minecraft versions
                <span className="text-indigo-700"> 1.9</span>-
                <span className="text-indigo-700">1.21.1 </span>
                Java Edition.
              </p>
            </div>
          </FaqItem>

          <FaqItem index={3}>
            <span className="font-medium text-lg text-left">
              Where can I learn to use PacketEvents?
            </span>
            <div className="text-left p-5 border-b border-zinc-800">
              <p class="mb-2 text-zinc-200 dark:text-gray-400">
                Currently, the guide is still being worked on...
              </p>
            </div>
          </FaqItem>

          <FaqItem index={4}>
            <span className="font-medium text-lg text-left">
              Is PacketEvents free software?
            </span>

            <div className="text-left p-5 border-b border-zinc-800">
              <p class="mb-2 text-zinc-200 dark:text-gray-400">
                Yes, Packet Events is{" "}
                <a
                  target="_"
                  href="https://www.gnu.org/philosophy/free-sw.en.html"
                  className="text-indigo-700"
                >
                  Free Software
                </a>
                . It uses the{" "}
                <a
                  target="_"
                  href="https://www.gnu.org/licenses/gpl-3.0.en.html"
                  className="text-indigo-700"
                >
                  GPLv3
                </a>{" "}
                license.
              </p>
            </div>
          </FaqItem>

          <FaqItem index={5}>
            <span className="font-medium text-lg text-left">
              Does PacketEvents have a Discord server?
            </span>

            <div className="text-left p-5 border-b border-zinc-800">
              <p class="mb-2 text-zinc-200 dark:text-gray-400">
                Join the
                <a
                  href="https://discord.gg/DVHxPPxHZc"
                  className="text-indigo-700"
                >
                  {" "}
                  PacketEvents Discord Server{" "}
                </a>
                and receive community support!
              </p>
            </div>
          </FaqItem>

          <FaqItem index={6}>
            <span className="font-medium text-lg text-left">
              Should I ship PacketEvents with my project?
            </span>

            <div className="text-left p-5 border-b border-zinc-800">
              <p className="text-red-300">
                It's best to avoid shipping PacketEvents with your project.
              </p>
              <p class="mb-2 text-zinc-200 dark:text-gray-400">
                Ensuring your users only run a single instance of PacketEvents
                will not only
                <span className="text-indigo-300"> boost performance </span>,
                but also
                <span className="text-indigo-300">
                  {" "}
                  streamline bug-reporting
                </span>
                . Plus, you'll save time by not needing to update with every new
                patch release.
              </p>
            </div>
          </FaqItem>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
