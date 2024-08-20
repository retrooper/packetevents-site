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
          </Accordion>
        </div>
      </ThemeProvider>
    </>
  );
}
