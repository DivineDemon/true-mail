import { ArrowRight, CircleCheck, Package } from "lucide-react";
import Image from "next/image";

import FeatureOne from "@/assets/img/feature-1.svg";
import FeatureTwo from "@/assets/img/feature-2.svg";
import FeatureThree from "@/assets/img/feature-3.svg";
import { cn } from "@/lib/utils";

import MaxWidthWrapper from "../max-width-wrapper";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Features = () => {
  return (
    <section
      id="solutions"
      className="w-full bg-card text-card-foreground py-20"
    >
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <Badge className="bg-primary gap-1.5 text-primary-foreground hover:bg-primary/90">
          <Package className="size-4" />
          Features
        </Badge>
        <h2 className="mt-5 mb-10 w-full text-center text-4xl sm:text-5xl font-bold tracking-tight">
          Three Solutions, One Goal
        </h2>
        <Tabs defaultValue="list" className="w-full lg:w-3/4">
          <TabsList className="w-full grid grid-cols-3 h-auto p-1">
            <TabsTrigger value="list" className="py-2 text-wrap h-full">
              Bulk Email List Cleaning
            </TabsTrigger>
            <TabsTrigger value="real" className="py-2 text-wrap h-full">
              Real-time Email Verification
            </TabsTrigger>
            <TabsTrigger value="auto" className="py-2 text-wrap h-full">
              Automated List Cleaning
            </TabsTrigger>
          </TabsList>
          <TabsContent value="list" className="mt-8">
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
              <div className="col-span-1 flex w-full flex-col items-start justify-center">
                <h3 className="w-full text-left text-3xl font-semibold">
                  Clean your email
                  <br />
                  list in 3 easy steps.
                </h3>
                <p className="mt-2.5 mb-5 w-full text-left text-sm font-light text-muted-foreground">
                  Ensure your emails reach the inbox every time with our
                  powerful verification and cleaning process. Upload any sized
                  list or connect to over 85 integrations for seamless cleaning.
                </p>
                <ul className="mb-8 flex w-full flex-col items-center justify-center gap-2">
                  {[
                    "Upload your existing list.",
                    "Download your freshly cleaned list.",
                    "Deliver upto 99.99% of your emails with confidence.",
                  ].map((item, idx) => {
                    return (
                      <li
                        // biome-ignore lint/suspicious/noArrayIndexKey: Static feature list
                        key={idx}
                        className="flex w-full items-center justify-start gap-2.5 text-left font-light"
                      >
                        <CircleCheck className="text-primary size-4" />
                        {item}
                      </li>
                    );
                  })}
                </ul>
                <a
                  href="#test"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                    }),
                  )}
                >
                  Try it for Free <ArrowRight className="size-5 ml-2" />
                </a>
              </div>
              <div className="col-span-1 flex w-full items-center justify-center p-8 lg:p-0">
                <Image
                  src={FeatureOne}
                  alt="feature-one"
                  className="w-full dark:invert"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="real" className="mt-8">
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
              <div className="col-span-1 flex w-full flex-col items-start justify-center">
                <h3 className="w-full text-left text-3xl font-semibold">
                  Real-Time Email
                  <br />
                  Verification.
                </h3>
                <p className="mt-2.5 mb-5 w-full text-left text-sm font-light text-muted-foreground">
                  Validate emails the moment they are entered into your forms.
                  Instantly detect typos, fake emails, or disposable addresses
                  and keep your list clean from the start.
                </p>
                <ul className="mb-8 flex w-full flex-col items-center justify-center gap-2">
                  {[
                    "Integrate with your sign-up or lead capture forms.",
                    "Instantly verify email addresses before submission.",
                    "Block fake or invalid entries and improve lead quality.",
                    "Boost your sender reputation and inbox delivery.",
                  ].map((item, idx) => {
                    return (
                      <li
                        // biome-ignore lint/suspicious/noArrayIndexKey: Static feature list
                        key={idx}
                        className="flex w-full items-center justify-start gap-2.5 text-left font-light"
                      >
                        <CircleCheck className="text-primary size-4" />
                        {item}
                      </li>
                    );
                  })}
                </ul>
                <a
                  href="#test"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                    }),
                  )}
                >
                  Try it for Free <ArrowRight className="size-5 ml-2" />
                </a>
              </div>
              <div className="col-span-1 flex w-full items-center justify-center p-8 lg:p-0">
                <Image
                  src={FeatureTwo}
                  alt="feature-two"
                  className="w-full dark:invert"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="auto" className="mt-8">
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
              <div className="col-span-1 flex w-full flex-col items-start justify-center">
                <h3 className="w-full text-left text-3xl font-semibold">
                  Automated List Cleaning.
                </h3>
                <p className="mt-2.5 mb-5 w-full text-left text-sm font-light text-muted-foreground">
                  Automatically detect invalid, dormant, and obsolete email
                  addresses in your list to sustain its quality over time.
                  Schedule regular cleanings to ensure your database is always
                  up to date.
                </p>
                <ul className="mb-8 flex w-full flex-col items-center justify-center gap-2">
                  {[
                    "Set up automated list cleaning tasks with ease.",
                    "Detect invalid or problematic emails regularly.",
                    "Remove abandoned addresses from your list.",
                    "Reduce bounce rates and spam complaints.",
                  ].map((item, idx) => {
                    return (
                      <li
                        // biome-ignore lint/suspicious/noArrayIndexKey: Static feature list
                        key={idx}
                        className="flex w-full items-center justify-start gap-2.5 text-left font-light"
                      >
                        <CircleCheck className="text-primary size-4" />
                        {item}
                      </li>
                    );
                  })}
                </ul>
                <a
                  href="#test"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                    }),
                  )}
                >
                  Try it for Free <ArrowRight className="size-5 ml-2" />
                </a>
              </div>
              <div className="col-span-1 flex w-full items-center justify-center p-8 lg:p-0">
                <Image
                  src={FeatureThree}
                  alt="feature-three"
                  className="w-full dark:invert"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </MaxWidthWrapper>
    </section>
  );
};

export default Features;
