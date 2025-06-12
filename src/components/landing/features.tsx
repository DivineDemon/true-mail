import { ArrowRight, CircleCheck, Package } from "lucide-react";

import FeatureOne from "@/assets/img/feature-1.svg";
import FeatureTwo from "@/assets/img/feature-2.svg";
import FeatureThree from "@/assets/img/feature-3.svg";
import { cn } from "@/lib/utils";

import MaxWidthWrapper from "../max-width-wrapper";
import Badge from "../ui/badge";
import { buttonVariants } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Features = () => {
  return (
    <section className="w-full bg-white text-black">
      <MaxWidthWrapper className="flex flex-col items-center justify-center py-20">
        <Badge className="bg-primary gap-1.5 border-none text-white">
          <Package className="size-4" />
          Features
        </Badge>
        <span className="mt-5 mb-10 w-full text-center text-5xl font-bold">
          Three Solutions, One Goal
        </span>
        <Tabs defaultValue="list" className="w-2/3">
          <TabsList className="w-full">
            <TabsTrigger value="list">Bulk Email List Cleaning</TabsTrigger>
            <TabsTrigger value="real">Real-time Email Verification</TabsTrigger>
            <TabsTrigger value="auto">Automated List Cleaning</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <div className="mt-5 grid w-full grid-cols-2">
              <div className="col-span-1 flex w-full flex-col items-start justify-center">
                <span className="w-full text-left text-3xl font-semibold">
                  Clean your email
                  <br />
                  list in 3 easy steps.
                </span>
                <span className="mt-2.5 mb-5 w-full text-left text-sm font-light">
                  Ensure your emails reach the inbox every time with our
                  powerful verification and cleaning process. Upload any sized
                  list or connect to over 85 integrations for seamless cleaning.
                </span>
                <ul className="mb-5 flex w-full flex-col items-center justify-center gap-1.5">
                  {[
                    "Upload your existing list.",
                    "Download your freshly cleaned list.",
                    "Deliver upto 99.99% of your emails with confidence.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex w-full items-center justify-start gap-2.5 text-left font-light"
                    >
                      <CircleCheck className="text-primary size-4" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#test"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                    })
                  )}
                >
                  Try it for Free <ArrowRight className="size-5" />
                </a>
              </div>
              <div className="col-span-1 flex w-full items-center justify-center">
                <img src={FeatureOne} alt="feature-one" className="w-full" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="real">
            <div className="grid w-full grid-cols-2">
              <div className="col-span-1 flex w-full flex-col items-start justify-center">
                <span className="w-full text-left text-3xl font-semibold">
                  Real-Time Email
                  <br />
                  Verification.
                </span>
                <span className="mt-2.5 mb-5 w-full text-left text-sm font-light">
                  Validate emails the moment they are entered into your forms.
                  Instantly detect typos, fake emails, or disposable addresses
                  ard keep your list clean from the start.
                </span>
                <ul className="mb-5 flex w-full flex-col items-center justify-center gap-1.5">
                  {[
                    "Integrate with your sign-up or lead capture forms.",
                    "Instantly verify email addresses before submission.",
                    "Block fake or invalid entries and improve lead quality.",
                    "Boost your sender reputation and inbox delivery.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex w-full items-center justify-start gap-2.5 text-left font-light"
                    >
                      <CircleCheck className="text-primary size-4" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#test"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                    })
                  )}
                >
                  Try it for Free <ArrowRight className="size-5" />
                </a>
              </div>
              <div className="col-span-1 flex w-full items-center justify-center">
                <img src={FeatureTwo} alt="feature-two" className="w-full" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="auto">
            <div className="grid w-full grid-cols-2">
              <div className="col-span-1 flex w-full flex-col items-start justify-center">
                <span className="w-full text-left text-3xl font-semibold">
                  Automated List Cleaning.
                </span>
                <span className="mt-2.5 mb-5 w-full text-left text-sm font-light">
                  Automatically detect invalid, dormant, and obsolete email
                  addresses in your list to unsustain its quality over time.
                  Schedule regular cleanings to ensure your database is always
                  up date.
                </span>
                <ul className="mb-5 flex w-full flex-col items-center justify-center gap-1.5">
                  {[
                    "Set up automated list cleaning tasks with ease.",
                    "Detect invalid or problematic emails regularly.",
                    "Remove abandoned addresses from your list.",
                    "Reduce bounce rates and spam complaints.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex w-full items-center justify-start gap-2.5 text-left font-light"
                    >
                      <CircleCheck className="text-primary size-4" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#test"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                    })
                  )}
                >
                  Try it for Free <ArrowRight className="size-5" />
                </a>
              </div>
              <div className="col-span-1 flex w-full items-center justify-center">
                <img
                  src={FeatureThree}
                  alt="feature-three"
                  className="w-full"
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
