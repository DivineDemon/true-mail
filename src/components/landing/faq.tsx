import { CircleHelp } from "lucide-react";

import { faqs } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";

const FAQ = () => {
  return (
    <section className="w-full bg-background py-20 text-foreground">
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <Badge className="bg-primary gap-1.5 border-none text-primary-foreground hover:bg-primary/90">
          <CircleHelp className="size-4" />
          Questions
        </Badge>
        <h2 className="mt-5 mb-10 w-full text-center text-4xl sm:text-5xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl"
          defaultValue="item-1"
        >
          {faqs.map((faq, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: Static FAQ list
            <AccordionItem key={idx} value={`item-${idx + 1}`}>
              <AccordionTrigger className="text-primary text-xl font-semibold text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-pretty text-muted-foreground text-left">
                <span>{faq.answer}</span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MaxWidthWrapper>
    </section>
  );
};

export default FAQ;
