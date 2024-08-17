import { useState } from "react";
import reactLogo from "./assets/react.svg";
import githubLogo from "./assets/github-mark-white.svg";
import packetEventsLogo from "./assets/packetevents.svg";
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";
import { cn } from "@/lib/utils";

("use client");

function App() {
  const { setTheme } = useTheme();
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="space-y-7">
          <div className="absolute top-1 left-0 hover:drop-shadow-[0_35px_35px_rgba(100,120,255,0.8)]">
            <div className="animate-[wiggle_infinite_15s_linear]">
              <img width="80" height="80" src={packetEventsLogo} alt="Logo" />
            </div>
          </div>
          <div className="absolute top-0 right-4 hover:drop-shadow-[0_35px_35px_rgba(100,120,255,0.8)]">
            <div className="animate-[wiggle_infinite_15s_linear]">
              <a
                target="_blank"
                href="https://github.com/retrooper/packetevents"
              >
                <img width="45" height="45" src={githubLogo} alt="Logo" />
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
        <Separator className="my-5" />
        <div className="flex justify-center mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <h1>Powerful, Versatile. </h1>
        </div>
        <div className="flex justify-center mb-4 text-4xl leading-none tracking-tight text-[#323becf3] md:text-5xl lg:text-6xl ">
          <h1>PacketEvents</h1>
        </div>
        <div className="flex justify-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          <h2>Achieve next-level networking by using PacketEvents.</h2>
        </div>
        <div className="flex justify-center space-x-5">
          <Button variant="secondary">Downloads</Button>
          <Button variant="secondary">Getting Started</Button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
