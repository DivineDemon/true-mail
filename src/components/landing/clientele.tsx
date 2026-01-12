import { Users2 } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import DummyClient from "@/assets/img/client.svg";

import MaxWidthWrapper from "../max-width-wrapper";
import { Badge } from "../ui/badge";

const Clientele = () => {
  return (
    <section
      id="company"
      className="w-full bg-background pt-20 pb-10 text-foreground"
    >
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <Badge className="bg-primary/10 border-primary border text-primary">
          <Users2 className="size-4" />
          Clientele
        </Badge>
        <h2 className="mt-5 mb-10 w-full text-center text-4xl sm:text-5xl font-bold tracking-tight">
          Trusted by over 400,000+ clients
        </h2>
        <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] mask-size-[100%_100%] mask-position-[0_0] mask-no-repeat">
          <div className="animate-marquee flex gap-10">
            {Array.from({ length: 12 }).map((_, idx) => {
              return (
                <React.Fragment
                  // biome-ignore lint/suspicious/noArrayIndexKey: Static client list
                  key={idx}
                >
                  <Image
                    src={DummyClient}
                    alt={`brand-${idx}`}
                    className="aspect-video shrink-0 dark:invert"
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Clientele;
