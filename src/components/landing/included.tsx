import { included } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";

const Included = () => {
  return (
    <section className="w-full py-20 bg-background text-foreground">
      <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <h2 className="col-span-1 md:col-span-2 lg:col-span-3 mb-5 w-full text-center text-4xl sm:text-5xl font-bold tracking-tight">
          Included with all True Mail Accounts
        </h2>
        {included.map((item) => (
          <div
            key={item.id}
            className="col-span-1 flex w-full items-center justify-center gap-2.5 rounded-lg border bg-card text-card-foreground p-5 shadow-sm transition-shadow duration-200 ease-in-out hover:shadow-md"
          >
            <div className="bg-primary/20 text-primary size-8 rounded-full p-2 flex items-center justify-center shrink-0">
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
