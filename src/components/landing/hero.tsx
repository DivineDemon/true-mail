import HeroImage from "@/assets/img/hero-img.svg";

import MaxWidthWrapper from "../max-width-wrapper";
import Badge from "../ui/badge";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="w-full bg-[#0F162E] text-white">
      <MaxWidthWrapper className="grid grid-cols-2 items-center justify-center pt-16">
        <div className="col-span-1 flex w-full flex-col items-start justify-center gap-5">
          <Badge className="bg-primary/50 border-primary border text-white">
            Version Beta is Here 🎉
          </Badge>
          <span className="w-full text-left text-5xl font-bold">
            The most accurate
            <br />
            email verification tool.
          </span>
          <span className="ma-w-prose w-full text-left font-thin text-pretty">
            Improve deliverability, stop list decay, and remove bounces by
            verifying
            <br />
            your emails. Simply upload a list, and export.
          </span>
          <div className="flex w-full flex-col items-start justify-center gap-2.5">
            <Button type="button" variant="default" size="lg">
              Get Started
            </Button>
            <span className="w-full text-left text-xs font-thin">
              100 Free Credits to Start.
            </span>
          </div>
        </div>
        <div className="col-span-1 flex w-full items-center justify-center py-10 pl-10">
          <img src={HeroImage} alt="hero-image" className="w-full" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
