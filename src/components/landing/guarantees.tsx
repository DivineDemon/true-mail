import { TrendingUp } from "lucide-react";

import { guarantees } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";
import { Badge } from "../ui/badge";

const Guarantees = () => {
  return (
    <section className="w-full bg-muted/50 py-20 text-foreground">
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <Badge className="bg-primary gap-1.5 border-none text-primary-foreground hover:bg-primary/90">
          <TrendingUp className="size-4" />
          Trust
        </Badge>
        <h2 className="mt-5 mb-10 w-full text-center text-4xl sm:text-5xl font-bold tracking-tight">
          Our Guarantees
        </h2>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {guarantees.map((item) => (
            <div
              key={item.id}
              className="col-span-1 flex w-full flex-col items-center justify-center rounded-lg border bg-card p-5 shadow-sm transition-shadow duration-200 ease-in-out hover:shadow-md"
            >
              {/* biome-ignore lint/performance/noImgElement: Simple icon, no optimization needed */}
              <img
                src={item.icon}
                className="size-10 dark:invert"
                alt={item.title}
              />
              <span className="mt-5 mb-1.5 w-full text-center text-[30px] leading-[30px] font-bold">
                {item.value}
              </span>
              <span className="mb-3.5 w-full text-center text-[18px] leading-[18px] font-semibold text-muted-foreground">
                {item.title}
              </span>
              <span className="w-full text-center text-sm font-light text-muted-foreground/80">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Guarantees;
