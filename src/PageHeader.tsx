import discordLogo from "./assets/discord-mark-white.svg";
import githubLogo from "./assets/github-mark-white.svg";

import { Button } from "@/components/ui/button";
import { HoverCard } from "@/components/ui/hover-card";

export default function Header() {
  return (
    <>
      <div className="space-y-5">
        <div className="absolute top-7 left-0 hover:drop-shadow-[0_35px_35px_rgba(100,120,255,1)]">
          <div className="flex justify-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200 select-none">
            packetevents
          </div>
        </div>
        <div className="absolute top-0 right-4 hover:drop-shadow-[0_35px_35px_rgba(100,120,255,0.8)]">
          <div className="hover:animate-[wiggle_infinite_15s_linear]">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/retrooper/packetevents"
            >
              <img width="35" height="35" src={githubLogo} alt="Logo" />
            </a>
          </div>
        </div>
        <div className="absolute top-1 right-20 hover:drop-shadow-[0_35px_35px_rgba(100,120,255,0.8)]">
          <div className="hover:animate-[wiggle_infinite_15s_linear]">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://discord.gg/DVHxPPxHZc"
            >
              <img width="40" height="40" src={discordLogo} alt="Logo" />
            </a>
          </div>
        </div>
        <div className="pl-3 flex justify-center">
          <HoverCard>
            <Button variant="ghost">Docs</Button>
            <Button variant="ghost">Examples</Button>
          </HoverCard>
        </div>
      </div>
    </>
  );
}
