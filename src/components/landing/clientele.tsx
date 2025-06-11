import { Users2 } from "lucide-react";

import DummyClient from "@/assets/img/client.svg";

import MaxWidthWrapper from "../max-width-wrapper";
import Badge from "../ui/badge";

const Clientele = () => {
  return (
    <section className="w-full bg-[#0F162E] pt-20 pb-10 text-white">
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <Badge className="bg-primary/50 border-primary border text-white">
          <Users2 className="size-4" />
          Clientele
        </Badge>
        <span className="mt-5 mb-10 w-full text-center text-5xl font-bold">
          Trusted by over 400,000+ clients
        </span>
        <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] mask-[length:100%_100%] mask-[position:0_0] mask-no-repeat">
          <div className="animate-marquee flex gap-10">
            {Array.from({ length: 12 }).map((_, idx) => (
              <img
                key={idx}
                src={DummyClient}
                alt={`brand-${idx}`}
                className="aspect-video shrink-0 invert"
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Clientele;
