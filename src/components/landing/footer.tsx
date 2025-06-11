import { MailSearch } from "lucide-react";

import MaxWidthWrapper from "../max-width-wrapper";

const Footer = () => {
  return (
    <section className="w-full bg-white text-black">
      <MaxWidthWrapper className="grid h-16 grid-cols-3 items-center justify-center">
        <div className="col-span-1 flex w-full items-center justify-start">
          <MailSearch className="text-primary size-8" />
        </div>
        <span className="col-span-1 w-full text-center text-xs">
          &copy; {new Date().getFullYear()} Truemail. All Rights Reserved.
        </span>
        <div className="col-span-1 flex w-full items-center justify-end gap-10">
          {["Cookies Policy", "Legal Terms", "Privacy Policy"].map(
            (item, idx) => (
              <span
                key={idx}
                className="text-primary/85 hover:text-primary cursor-pointer text-xs font-medium transition-all duration-200 ease-in-out hover:font-semibold"
              >
                {item}
              </span>
            )
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Footer;
