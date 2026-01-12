import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import MaxWidthWrapper from "../max-width-wrapper";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

const Hero = () => {
  return (
    <section className="w-full bg-background text-foreground">
      <MaxWidthWrapper className="grid grid-cols-2 items-center justify-center pt-32 pb-16">
        <div className="col-span-1 flex w-full flex-col items-start justify-center gap-5">
          <Badge className="bg-primary/10 border-primary border text-primary hover:bg-primary/20">
            Version Beta is Here 🎉
          </Badge>
          <h1 className="w-full text-left text-5xl font-bold tracking-tight">
            The most accurate
            <br />
            email verification tool.
          </h1>
          <p className="max-w-prose w-full text-left font-light text-muted-foreground text-pretty text-lg">
            Improve deliverability, stop list decay, and remove bounces by
            verifying
            <br />
            your emails. Simply upload a list, and export.
          </p>
          <div className="flex w-full flex-col items-start justify-center gap-2.5">
            <Link
              href="/auth/register"
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "lg",
                }),
              )}
            >
              Get Started
            </Link>
            <span className="w-full text-left text-xs font-light text-muted-foreground">
              100 Free Credits to Start.
            </span>
          </div>
        </div>
        <div className="col-span-1 flex w-full items-center justify-center py-10 pl-10">
          <Image
            src="/hero-img.svg"
            alt="hero-image"
            width={600}
            height={400}
            className="w-full dark:invert-0"
            priority
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
