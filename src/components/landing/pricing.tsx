"use client";

import {
  ArrowRight,
  Building2,
  CircleCheck,
  User2,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { creditRates } from "@/lib/constants";
import { calculateFinalAmount, cn } from "@/lib/utils";

import MaxWidthWrapper from "../max-width-wrapper";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Pricing = () => {
  const [credits, setCredits] = useState<number>(5000);
  const [mounted, setMounted] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (credits > 1000000) {
      setMounted(true);
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
      setTimeout(() => setMounted(false), 300);
    }
  }, [credits]);

  return (
    <section
      id="pricing"
      className="flex w-full items-center justify-center bg-background text-foreground"
    >
      <MaxWidthWrapper className="flex flex-col items-center justify-center py-20">
        <Badge className="bg-primary/10 border-primary border text-primary">
          <Wallet className="size-4" />
          Pricing
        </Badge>
        <h2 className="mt-5 mb-10 w-full text-center text-4xl sm:text-5xl font-bold tracking-tight">
          Flexible Pricing Options
        </h2>
        <Tabs defaultValue="credits" className="w-full lg:w-3/4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="credits">Credits</TabsTrigger>
            <TabsTrigger value="deliverability">Deliverability</TabsTrigger>
          </TabsList>
          <TabsContent value="credits">
            <div className="divide-border w-full grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x rounded-lg border bg-card text-card-foreground">
              <div className="col-span-1 flex w-full flex-col items-start justify-start gap-5 p-5 sm:p-8">
                <div className="flex w-full flex-col items-center justify-center gap-2.5">
                  <Label
                    htmlFor="numberOfEmails"
                    className="w-full text-left font-normal"
                  >
                    How many emails do you have?
                  </Label>
                  <Input
                    type="number"
                    id="numberOfEmails"
                    name="numberOfEmails"
                    placeholder="min. 5,000"
                    value={credits}
                    onChange={(e) => {
                      if (Number(e.target.value) < 5000) {
                        setCredits(5000);
                      } else {
                        setCredits(Number(e.target.value));
                      }
                    }}
                  />
                </div>
                <fieldset className="w-full border-t border-border">
                  <legend className="px-5 text-center text-sm font-semibold text-muted-foreground">
                    or
                  </legend>
                </fieldset>
                <div className="grid w-full grid-cols-3 gap-3">
                  {creditRates.map((value) => (
                    <button
                      type="button"
                      key={value.id}
                      onClick={() => setCredits(Number(value.amount))}
                      className={cn(
                        "hover:bg-muted col-span-1 flex aspect-square w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-border transition-colors",
                        {
                          "border-primary bg-primary/5":
                            value.amount === credits,
                        },
                      )}
                    >
                      <span className="text-primary w-full text-center text-lg font-semibold">
                        {value.amount === 1000000
                          ? "1M"
                          : `${value.amount / 1000}K`}
                      </span>
                      <span className="text-muted-foreground w-full text-center text-sm">
                        Credits
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative col-span-1 flex h-full w-full flex-col items-start justify-start">
                <div className="z-0 flex h-full w-full flex-col items-start justify-between rounded-r-lg p-5 sm:p-8">
                  <span className="w-full text-left text-xl font-semibold">
                    Pay as you go
                  </span>
                  <span className="w-full text-center text-5xl font-semibold my-4">
                    ${Math.ceil(calculateFinalAmount(credits).amount)}
                  </span>
                  <div className="divide-border grid w-full grid-cols-2 divide-x">
                    <div className="col-span-1 flex w-full flex-col items-center justify-center">
                      <span className="text-primary w-full text-center text-lg font-semibold">
                        {Intl.NumberFormat("en-US").format(credits)}
                      </span>
                      <span className="text-muted-foreground w-full text-center text-sm">
                        Credits
                      </span>
                    </div>
                    <div className="col-span-1 flex w-full flex-col items-center justify-center">
                      <span className="text-primary w-full text-center text-lg font-semibold">
                        ${calculateFinalAmount(credits).price}
                      </span>
                      <span className="text-muted-foreground w-full text-center text-sm">
                        Cost per Credit
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-2 mt-6">
                    <Link
                      href="/auth/register"
                      className={cn(
                        buttonVariants({
                          variant: "default",
                          size: "lg",
                          className: "w-full",
                        }),
                      )}
                    >
                      Get Started Free <ArrowRight className="ml-2 size-4" />
                    </Link>
                    <span className="text-muted-foreground w-full text-center text-xs">
                      Includes 250 free credits
                    </span>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-4 p-5">
                    {[
                      "No monthly payments.",
                      "Pay only for what you need.",
                      "Credits never expire.",
                    ].map((item, idx) => (
                      <div
                        // biome-ignore lint/suspicious/noArrayIndexKey: Static list key
                        key={idx}
                        className="flex w-full items-center justify-center gap-3.5"
                      >
                        <CircleCheck className="text-primary fill-transparent size-5" />
                        <span className="w-full text-left text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {mounted && (
                  <div
                    className={`bg-background/95 absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center gap-5 rounded-lg lg:rounded-l-none lg:rounded-r-lg backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
                      visible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="w-full text-center text-xl font-semibold">
                      Need more than
                      <br />
                      1,000,000 credits?
                    </span>
                    <span className="text-muted-foreground w-full text-center text-sm">
                      Contact our sales team.
                    </span>
                    <Button type="button" variant="default" size="lg">
                      Contact Us <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="deliverability">
            <div className="divide-border w-full grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x rounded-lg border bg-card text-card-foreground">
              <div className="col-span-1 flex h-full w-full flex-col items-center justify-center gap-10 p-5 sm:p-8">
                <div className="flex w-full items-center justify-center gap-2.5">
                  <div className="bg-primary/10 flex size-10 items-center justify-center rounded-full p-2">
                    <User2 className="text-primary size-full" />
                  </div>
                  <span className="text-xl font-semibold">Standard</span>
                </div>
                <p className="w-full text-center text-5xl font-semibold">
                  $149&nbsp;
                  <span className="text-muted-foreground text-sm font-normal">
                    /&nbsp;&nbsp;&nbsp; month
                  </span>
                </p>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  {[
                    "500 Inbox Reports.",
                    "50 Blacklist Monitors.",
                    "12-Hour Blacklist Check.",
                  ].map((item, idx) => (
                    <div
                      // biome-ignore lint/suspicious/noArrayIndexKey: Static list key
                      key={idx}
                      className="flex w-full items-center justify-center gap-3.5"
                    >
                      <CircleCheck className="text-primary fill-transparent size-5" />
                      <span className="w-full text-left text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/auth/register"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                      className: "w-full sm:w-2/3",
                    }),
                  )}
                >
                  Get Started Free <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
              <div className="col-span-1 flex h-full w-full flex-col items-center justify-center gap-8 p-5 sm:p-8">
                <div className="flex w-full items-center justify-center gap-2.5">
                  <div className="bg-primary/10 flex size-10 items-center justify-center rounded-full p-2">
                    <Building2 className="text-primary size-full" />
                  </div>
                  <span className="text-xl font-semibold">Enterprise</span>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-2">
                  <p className="w-full text-center font-medium">
                    Need a more customized
                    <br />
                    solution for your business?
                  </p>
                  <p className="text-muted-foreground w-full text-center text-xs">
                    Get in touch with our sales team.
                  </p>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-5">
                  {[
                    "Inbox Reports.",
                    "Blacklist Monitors.",
                    "Blacklist Check.",
                  ].map((item, idx) => (
                    <div
                      // biome-ignore lint/suspicious/noArrayIndexKey: Static list key
                      key={idx}
                      className="flex w-full items-center justify-center gap-3.5"
                    >
                      <CircleCheck className="text-primary fill-transparent size-5" />
                      <span className="w-full text-left text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  variant="default"
                  size="lg"
                  className="w-full sm:w-2/3"
                >
                  Send us a message <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </MaxWidthWrapper>
    </section>
  );
};

export default Pricing;
