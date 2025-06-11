import { TrendingUp } from "lucide-react";

import { guarantees } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";
import Badge from "../ui/badge";

const Guarantees = () => {
  return (
    <section className="w-full bg-white py-20 text-black">
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <Badge className="bg-primary gap-1.5 border-none text-white">
          <TrendingUp className="size-4" />
          Trust
        </Badge>
        <span className="mt-5 mb-10 w-full text-center text-5xl font-bold">
          Our Guarantees
        </span>
        <div className="grid w-full grid-cols-4 gap-4">
          {guarantees.map((item) => (
            <div
              key={item.id}
              className="col-span-1 flex w-full flex-col items-center justify-center rounded-lg border p-5 shadow transition-shadow duration-200 ease-in-out hover:shadow-lg"
            >
              <img src={item.icon} className="size-10" />
              <span className="mt-5 mb-1.5 w-full text-center text-[30px] leading-[30px] font-bold">
                {item.value}
              </span>
              <span className="mb-3.5 w-full text-center text-[18px] leading-[18px] font-semibold text-gray-500">
                {item.title}
              </span>
              <span className="w-full text-center text-sm font-light text-gray-400">
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
