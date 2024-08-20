import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SecondPageQNA() {
  return (
    <>
      <Accordion type="single" collapsible className="w-full pl-14">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is PacketEvents free software?</AccordionTrigger>
          <AccordionContent>
            Yes. PacketEvents is free and open-source. Learn more about free
            software
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.gnu.org/philosophy/free-sw.en.html"
            >
              {" "}
              here
            </a>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Does PacketEvents have a Discord Server?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Join the community on Discord and receive community support!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Should I package PacketEvents into my project?
          </AccordionTrigger>
          <AccordionContent>
            Preferably not. Allowing your users to download one version of
            PacketEvents not only enhances performance, but also simplifies
            bug-reporting.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
