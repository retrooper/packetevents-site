import { ThemeProvider } from "@/components/theme-provider";
import PageHeader from "../PageHeader";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import PageFooter from "@/PageFooter";

export default function FAQ() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* Page header */}
        <PageHeader />
        {/* Separator */}
        <Separator className="my-5" />
        <div className="flex justify-center mb-6 text-lg font-normal text-neutral-200 lg:text-4xl sm:px-16 xl:px-48">
          FAQ
        </div>

        <div className="flex justify-left mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          <Accordion
            type="single"
            collapsible
            className="w-full text-gray-300 text-2xl"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Where can I download the latest PacketEvents release?
              </AccordionTrigger>
              <AccordionContent>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link" className="text-lg">
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://ci.codemc.io/job/retrooper/job/packetevents/"
                      >
                        Modrinth
                      </a>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <p className="text-sm">
                          Modrinth allows us to upload our release for all
                          supported platforms.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Where can I find PacketEvents development builds?
              </AccordionTrigger>
              <AccordionContent>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link" className="text-lg">
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://ci.codemc.io/job/retrooper/job/packetevents/"
                      >
                        Jenkins
                      </a>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <p className="text-sm">
                          The Jenkins page hosts development builds for all
                          supported platforms.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What Minecraft Versions does PacketEvents Support?
              </AccordionTrigger>
              <AccordionContent className="text-xl text-white">
                We support Minecraft 1.8-1.21.1 Java Edition
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Where can I learn to use PacketEvents?
              </AccordionTrigger>
              <AccordionContent className="text-xl text-white">
                Currently, the guide is still being worked on...
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Is PacketEvents Free Software?
              </AccordionTrigger>
              <AccordionContent className="text-xl text-white">
                Yes, PacketEvents is{" "}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.gnu.org/philosophy/free-sw.en.html"
                  className="text-cyan-600 hover:drop-shadow-[0_35px_35px_rgba(150,170,255,1)]"
                >
                  Free Software
                </a>
                . It is licensed under the{" "}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.gnu.org/licenses/gpl-3.0.en.html"
                  className="text-cyan-600 hover:drop-shadow-[0_35px_35px_rgba(180,170,255,1)]"
                >
                  GPLv3
                </a>
                .
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Does PacketEvents have a Discord Server?
              </AccordionTrigger>
              <AccordionContent className="text-xl text-white">
                Join the{" "}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://discord.gg/DVHxPPxHZc"
                  className="text-cyan-600 hover:drop-shadow-[0_35px_35px_rgba(150,170,255,1)]"
                >
                  PacketEvents Discord Server
                </a>{" "}
                and receive community support!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Should I ship PacketEvents with my project?
              </AccordionTrigger>
              <AccordionContent className="text-xl text-white">
                <p className="text-yellow-400	">
                  It's best to avoid shipping PacketEvents with your project.
                </p>
                <p>
                  Ensuring your users only run a single instance of PacketEvents
                </p>
                <p>
                  will not only{" "}
                  <span className="text-green-400	">boost performance</span> but
                  also{" "}
                  <span className="text-green-400	">
                    streamline bug-reporting
                  </span>
                  .
                </p>
                Plus, you'll <span className="text-yellow-400	">save time </span>{" "}
                by not needing to update with every new patch release.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="pt-36">
          <Separator />
        </div>
        <PageFooter />
      </ThemeProvider>
    </>
  );
}
