import { MailSearch } from "lucide-react";
import Link from "next/link";

import MaxWidthWrapper from "../max-width-wrapper";

const Footer = () => {
  return (
    <section className="w-full bg-background text-foreground border-t">
      <MaxWidthWrapper className="grid h-16 grid-cols-3 items-center justify-center">
        <div className="col-span-1 flex w-full items-center justify-start">
          <Link href="/" className="flex items-center gap-2">
            <MailSearch className="text-primary size-8" />
            <span className="font-bold text-xl hidden sm:inline-block">
              True Mail
            </span>
          </Link>
        </div>
        <span className="col-span-1 w-full text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} True Mail. All Rights Reserved.
        </span>
        <div className="col-span-1 flex w-full items-center justify-end gap-5 sm:gap-10">
          {["Cookies Policy", "Legal Terms", "Privacy Policy"].map(
            (item, idx) => {
              return (
                <span
                  // biome-ignore lint/suspicious/noArrayIndexKey: Static policy links
                  key={idx}
                  className="text-muted-foreground hover:text-primary cursor-pointer text-xs font-medium transition-all duration-200 ease-in-out"
                >
                  {item}
                </span>
              );
            },
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Footer;
