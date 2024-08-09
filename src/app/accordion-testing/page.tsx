import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <div className="p-8">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          <AccordionContent>
            coding alongside experienced developers
          </AccordionContent>
          <AccordionContent>
            orward to working with everyone and contributing
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          <AccordionContent>
            coding alongside experienced developers
          </AccordionContent>
          <AccordionContent>
            orward to working with everyone and contributing
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          <AccordionContent>
            coding alongside experienced developers
          </AccordionContent>
          <AccordionContent>
            orward to working with everyone and contributing
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
    </div>
  );
}
