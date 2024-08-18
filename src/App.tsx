"use client";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import discordLogo from "./assets/discord-mark-white.svg";
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

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="space-y-7">
          <div className="absolute top-2 left-0 hover:drop-shadow-[0_35px_35px_rgba(100,120,255,0.8)]">
            <div className="hover:animate-[wiggle_infinite_15s_linear]">
              <img width="70" height="70" src={packetEventsLogo} alt="Logo" />
            </div>
          </div>
          <div className="absolute top-0 right-4 hover:drop-shadow-[0_35px_35px_rgba(100,120,255,0.8)]">
            <div className="hover:animate-[wiggle_infinite_15s_linear]">
              <a
                target="_blank"
                href="https://github.com/retrooper/packetevents"
              >
                <img width="35" height="35" src={githubLogo} alt="Logo" />
              </a>
            </div>
          </div>
          <div className="absolute top-1 right-20 hover:drop-shadow-[0_35px_35px_rgba(100,120,255,0.8)]">
            <div className="hover:animate-[wiggle_infinite_15s_linear]">
              <a target="_blank" href="https://discord.gg/DVHxPPxHZc">
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
              <CardTitle>Active Community</CardTitle>
              <CardDescription>Collaborative user base</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Active knowledge exchange</p>
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
        <div className="flex justify-center space-x-5 pt-5">
          <Card className="w-72 h-36 bg-[rgba(4,11,30,1)]	 border-0 hover:bg-slate-950 hover:drop-shadow-[0__1px__1px_rgba(100,120,255,0.7)] drop-shadow-[0_35px_35px_rgba(250,250,250,0.001)]">
            <CardHeader>
              <CardTitle>Portable</CardTitle>
              <CardDescription>Write once, Run Anywhere</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Support for various platforms</p>
            </CardContent>
            <CardFooter>
              <p></p>
            </CardFooter>
          </Card>
          <Card className="w-72 h-36 bg-[rgba(4,11,30,1)]	 border-0 hover:bg-slate-950 hover:drop-shadow-[0__1px__1px_rgba(100,120,255,0.7)] drop-shadow-[0_35px_35px_rgba(250,250,250,0.001)]">
            <CardHeader>
              <CardTitle>Ubiquitous</CardTitle>
              <CardDescription>Powering over 90,000 players</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Running on over 20,000 servers</p>
            </CardContent>
            <CardFooter>
              <p></p>
            </CardFooter>
          </Card>
          <Card className="w-72 h-36 bg-[rgba(4,11,30,1)]	 border-0 hover:bg-slate-950 hover:drop-shadow-[0__1px__1px_rgba(100,120,255,0.7)] drop-shadow-[0_35px_35px_rgba(250,250,250,0.001)]">
            <CardHeader>
              <CardTitle>Innovative</CardTitle>
              <CardDescription>Modern Approach</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Different approach</p>
            </CardContent>
            <CardFooter>
              <p></p>
            </CardFooter>
          </Card>
        </div>
        <div className="pt-24">
          <Separator className="" />
        </div>
        <footer className="bg-white dark:bg-gray-950">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-4 gap-8 px-32 py-6 lg:py-8 md:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      Docs
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Getting Started
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      JavaDocs
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Statistics
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Help center
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Discord Server
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Licensing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-gray-900 dark:text-white font-medium">
                  Subscribe to our newsletter
                </ul>
                <div className="flex w-full max-w-sm items-center space-x-2 pt-2">
                  <Input type="email" placeholder="Email" />
                  <Button
                    type="submit"
                    variant="outline"
                    onClick={() => {
                      toast({
                        title: "Scheduled: Catch up ",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                        action: (
                          <ToastAction altText="Goto schedule to undo">
                            Undo
                          </ToastAction>
                        ),
                      });
                    }}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2024 <a href="https://flowbite.com/">retrooper</a>
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </footer>
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
