import { included } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";

const Included = () => {
  return (
    <section className="w-full py-20">
      <MaxWidthWrapper className="grid grid-cols-3 gap-5">
        <span className="col-span-3 mb-5 w-full text-center text-5xl font-bold">
          Included with all Truemail Accounts
        </span>
        {included.map((item) => (
          <div
            key={item.id}
            className="col-span-1 flex w-full items-center justify-center gap-2.5 rounded-lg border bg-white p-5 shadow transition-shadow duration-200 ease-in-out hover:shadow-lg"
          >
            <div className="bg-primary/20 text-primary size-8 rounded-full p-2">
              <item.icon className="size-full" />
            </div>
            <span className="flex-1 text-left font-semibold">{item.text}</span>
          </div>
        ))}
      </MaxWidthWrapper>
    </section>
  );
};

export default Included;
