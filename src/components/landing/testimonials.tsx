import { Heart } from "lucide-react";

import EndQuoteIcon from "@/assets/icons/end-quote.svg";
import StartQuoteIcon from "@/assets/icons/start-quote.svg";

import MaxWidthWrapper from "../max-width-wrapper";
import Badge from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Testimonials = () => {
  return (
    <section className="flex w-full items-center justify-center bg-[#0F162E] py-20 text-white">
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <Badge className="bg-primary/50 border-primary border text-white">
          <Heart className="size-4" />
          Testimonials
        </Badge>
        <span className="mt-5 mb-10 w-full text-center text-5xl font-bold">
          What&apos;s the community saying?
        </span>
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-none bg-transparent p-0 shadow-none">
                    <CardContent className="relative flex h-fit w-full flex-col items-center justify-center gap-5 p-0 text-white">
                      <img
                        src={StartQuoteIcon}
                        alt="start-quote"
                        className="absolute top-0 left-0 size-10"
                      />
                      <span className="mx-auto w-full max-w-prose pt-10 text-center text-xl font-light text-pretty text-white/75">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae amet, voluptatem alias rerum architecto sit
                        ut quam quibusdam eum tempore, molestias cum consequatur
                        delectus saepe doloremque quaerat. Debitis, ad.
                      </span>
                      <div className="flex w-full flex-col items-center justify-center pb-10">
                        <span className="w-full text-center text-xl font-bold">
                          Cameron Williamson
                        </span>
                        <span className="w-full text-center font-light text-white/75">
                          CEO & Owner, Vision Trust
                        </span>
                      </div>
                      <img
                        src={EndQuoteIcon}
                        alt="end-quote"
                        className="absolute right-0 bottom-0 size-10"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonials;
