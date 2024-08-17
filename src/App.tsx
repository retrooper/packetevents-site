"use client";

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

import { TrendingDown, TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
    icon: TrendingDown,
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
    icon: TrendingUp,
  },
} satisfies ChartConfig;

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

function App() {
  const { setTheme } = useTheme();
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="space-y-7">
          <div className="absolute top-1 left-0 hover:drop-shadow-[0_35px_35px_rgba(100,120,255,0.8)]">
            <div className="hover:animate-[wiggle_infinite_15s_linear]">
              <img width="80" height="80" src={packetEventsLogo} alt="Logo" />
            </div>
          </div>
          <div className="absolute top-0 right-4 hover:drop-shadow-[0_35px_35px_rgba(100,120,255,0.8)]">
            <div className="hover:animate-[wiggle_infinite_15s_linear]">
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
        <div className="flex justify-center mb-4 text-4xl leading-none tracking-tight text-[#444dee] md:text-5xl lg:text-6xl ">
          <h1>PacketEvents</h1>
        </div>
        <div className="flex justify-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          <h2>Achieve next-level networking by using PacketEvents.</h2>
        </div>

        <div className="flex justify-center space-x-5">
          <Button variant="secondary">Downloads</Button>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Installation">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Introduction">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex justify-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-zinc-400	 pt-24">
          What you need to create applications that will thrive.
        </div>
        <div className="flex justify-center space-x-5 pt-5">
          <Card className="w-72 h-36 bg-[rgba(4,11,30,1)]	 border-0 hover:bg-slate-950 hover:drop-shadow-[0__1px__1px_rgba(100,120,255,0.7)] drop-shadow-[0_35px_35px_rgba(250,250,250,0.001)]">
            <CardHeader>
              <CardTitle>Free & Open Source</CardTitle>
              <CardDescription>Respects your freedom</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Transparent development</p>
            </CardContent>
            <CardFooter>
              <p></p>
            </CardFooter>
          </Card>
          <Card className="w-72 h-36 bg-[rgba(4,11,30,1)]	 border-0 hover:bg-slate-950 hover:drop-shadow-[0__1px__1px_rgba(100,120,255,0.7)] drop-shadow-[0_35px_35px_rgba(250,250,250,0.001)]">
            <CardHeader>
              <CardTitle>Rich Features</CardTitle>
              <CardDescription>Focus on Convenience</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Intuitive integration</p>
            </CardContent>
            <CardFooter>
              <p></p>
            </CardFooter>
          </Card>
        </div>
      </ThemeProvider>
    </>
  );
}

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

export default App;
