import { CircleHelp } from "lucide-react";

import { faqs } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Badge from "../ui/badge";

const FAQ = () => {
  return (
    <section className="w-full bg-white py-20 text-black">
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <Badge className="bg-primary gap-1.5 border-none text-white">
          <CircleHelp className="size-4" />
          Questions
        </Badge>
        <span className="mt-5 mb-10 w-full text-center text-5xl font-bold">
          Frequently Asked Questions
        </span>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx + 1}`}>
              <AccordionTrigger className="text-primary text-xl font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <span className="w-full text-left">{faq.answer}</span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MaxWidthWrapper>
    </section>
  );
};

export default FAQ;
