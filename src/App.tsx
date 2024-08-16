import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ThemeProvider } from "@/components/theme-provider";

import { useTheme } from "@/components/theme-provider";
import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Separator } from "@/components/ui/separator";

function App() {
  const { setTheme } = useTheme();
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="space-y-7 space-x-20">
          <div className="absolute top-0 left-0 hover:drop-shadow-[0_35px_35px_rgba(100,120,255,0.8)]">
            <div className="animate-[wiggle_infinite_15s_linear]">
              <img
                width="80"
                height="80"
                src="https://cdn.discordapp.com/attachments/852957712680484924/1274127144162951208/packetevents.svg?ex=66c11edf&is=66bfcd5f&hm=7aaa511b075461165f8f358941d28498008cc5651c9bcd4ac01b71c66da69027&"
                alt="Logo"
              />
            </div>
          </div>
          <div className="pl-3">
            <HoverCard>
              <Button variant="ghost">Docs</Button>
              <Button variant="ghost">Examples</Button>
              <HoverCardTrigger asChild>
                <Button variant="link">GitHub</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/packetevents.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">
                      @retrooper/packetevents
                    </h4>
                    <p className="text-sm">
                      PacketEvents is emerging as a strong contender in the
                      realm of Minecraft packet processing libraries.
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        <Separator className="my-5" />
        <div className="flex h-5 items-center space-x-4 text-sm"></div>
      </ThemeProvider>
    </>
  );
}

export default App;
