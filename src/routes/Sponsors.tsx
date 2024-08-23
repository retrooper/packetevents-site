import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import * as React from "react";
import { ThemeProvider } from "@/components/theme-provider";

import PageHeader from "../PageHeader";
import PageTitle from "../PageTitle";
import { Separator } from "@/components/ui/separator";
import { HoverCard } from "@/components/ui/hover-card";

import discordLogo from "../assets/discord-mark-white.svg";
import githubLogo from "../assets/github-mark-white.svg";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import grapheneImage from "../assets/graphene_development_image.png";
import pluginDevelopmentImage from "../assets/plugin_development_image.jpg";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
export default function Sponsors() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="space-y-5">
          <div className="absolute top-7 left-0 hover:drop-shadow-[0_35px_35px_rgba(100,120,255,1)]">
            <div className="flex justify-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200 select-none">
              <a href="/">packetevents</a>
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
              <Button variant="ghost">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://packetevents.gitbook.io/docs/"
                >
                  Docs
                </a>
              </Button>
              <Button variant="ghost">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/retrooper/packetevents-example"
                >
                  Examples
                </a>
              </Button>
              <Button variant="ghost">
                <ul>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                </ul>
              </Button>
            </HoverCard>
          </div>
        </div>
        <div className="flex justify-center mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <h1>PacketEvents </h1>
        </div>
        <div className="flex justify-center mb-4 text-4xl leading-none tracking-tight text-[#444dee] md:text-5xl lg:text-6xl ">
          <h1>Sponsors</h1>
        </div>
        <div className="flex justify-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          <h2>Browse through our Sponsors.</h2>
        </div>
        <div className="space-y-20 flex justify-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          <h2>
            <ul className="pt-64"></ul>
          </h2>

          <img
            src="https://pebblehost.com/src/img/logos/p.png"
            className="rounded-md object-cover"
          />
        </div>

        <div className="flex justify-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          <h2>
            <ul className="pt-40">And much more!</ul>
          </h2>
        </div>
      </ThemeProvider>
    </>
  );
}
