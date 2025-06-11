import { MailSearch } from "lucide-react";

import MaxWidthWrapper from "../max-width-wrapper";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="border-primary/25 fixed inset-x-0 top-0 z-[1] h-16 w-full border-b bg-black/20 backdrop-blur-sm">
      <MaxWidthWrapper className="grid grid-cols-3 items-center justify-center">
        <div className="col-span-1 flex w-full items-center justify-start">
          <MailSearch className="fill-primary size-8 text-white" />
        </div>
        <div className="col-span-1 flex w-full items-center justify-center gap-10">
          {["Solutions", "Pricing", "Company"].map((item, idx) => (
            <span
              key={idx}
              className="cursor-pointer text-sm font-light text-white/85 transition-all duration-200 ease-in-out hover:font-normal hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="col-span-1 flex w-full items-center justify-end gap-2.5">
          <Button
            type="button"
            variant="ghost"
            size="default"
            className="text-white"
          >
            Register
          </Button>
          <Button
            type="button"
            variant="default"
            size="default"
            className="text-white"
          >
            Book a Demo
          </Button>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
