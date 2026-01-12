import { Heart } from "lucide-react";
import Image from "next/image";

import EndQuoteIcon from "@/assets/icons/end-quote.svg";
import StartQuoteIcon from "@/assets/icons/start-quote.svg";

import MaxWidthWrapper from "../max-width-wrapper";
import { Badge } from "../ui/badge";
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
    <section className="flex w-full items-center justify-center bg-muted/50 py-20 text-foreground">
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <Badge className="bg-primary/10 border-primary border text-primary">
          <Heart className="size-4" />
          Testimonials
        </Badge>
        <h2 className="mt-5 mb-10 w-full text-center text-4xl sm:text-5xl font-bold tracking-tight">
          What&apos;s the community saying?
        </h2>
        <Carousel className="w-full max-w-4xl">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <CarouselItem
                  // biome-ignore lint/suspicious/noArrayIndexKey: Index required for carousel items
                  key={index}
                >
                  <div className="p-1">
                    <Card className="border-none bg-transparent p-0 shadow-none">
                      <CardContent className="relative flex h-fit w-full flex-col items-center justify-center gap-5 p-0 text-foreground">
                        <Image
                          src={StartQuoteIcon}
                          alt="start-quote"
                          className="absolute top-0 left-0 size-10 opacity-20"
                        />
                        <p className="mx-auto w-full max-w-prose pt-10 text-center text-xl font-light text-pretty text-muted-foreground">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Recusandae amet, voluptatem alias rerum
                          architecto sit ut quam quibusdam eum tempore,
                          molestias cum consequatur delectus saepe doloremque
                          quaerat. Debitis, ad.
                        </p>
                        <div className="flex w-full flex-col items-center justify-center pb-10">
                          <span className="w-full text-center text-xl font-bold">
                            Cameron Williamson
                          </span>
                          <span className="w-full text-center font-light text-muted-foreground/80">
                            CEO & Owner, Vision Trust
                          </span>
                        </div>
                        <Image
                          src={EndQuoteIcon}
                          alt="end-quote"
                          className="absolute right-0 bottom-0 size-10 opacity-20"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonials;
