import { MailSearch } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import MaxWidthWrapper from "../max-width-wrapper";
import ModeToggle from "../mode-toggle";
import { Button, buttonVariants } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 w-full border-b backdrop-blur-sm bg-background/80">
      <MaxWidthWrapper className="grid grid-cols-3 items-center justify-center h-full">
        <div className="col-span-1 flex w-full items-center justify-start">
          <Link href="/" className="flex items-center gap-2">
            <MailSearch className="size-8 text-primary" />
            <span className="font-bold text-xl hidden sm:inline-block">
              True Mail
            </span>
          </Link>
        </div>
        <div className="col-span-1 flex w-full items-center justify-center gap-4 sm:gap-10">
          {["Solutions", "Pricing", "Company"].map((item, idx) => {
            return (
              <a
                // biome-ignore lint/suspicious/noArrayIndexKey: Static nav items
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="cursor-pointer font-medium text-muted-foreground transition-all duration-200 ease-in-out hover:text-foreground"
              >
                {item}
              </a>
            );
          })}
        </div>
        <div className="col-span-1 flex w-full items-center justify-end gap-2.5">
          <ModeToggle />
          <Link
            href="/auth/register"
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "default",
              }),
            )}
          >
            Register
          </Link>
          <Button type="button" variant="default" size="default">
            Book a Demo
          </Button>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
