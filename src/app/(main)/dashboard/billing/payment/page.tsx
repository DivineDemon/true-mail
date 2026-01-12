"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import creditCardType from "credit-card-type";
import { CreditCard } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

import MasterCardIcon from "@/assets/icons/mastercard.svg";
import VisaIcon from "@/assets/icons/visa.svg";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const billingFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  state: z.string(),
  zip: z.string(),
});

export const paymentFormSchema = z.object({
  cardCVC: z.string(),
  cardName: z.string(),
  cardNumber: z.string(),
  cardExpiry: z.string(),
});

export default function PaymentInformation() {
  const form = useForm<z.infer<typeof billingFormSchema>>({
    resolver: zodResolver(billingFormSchema),
  });

  const paymentForm = useForm<z.infer<typeof paymentFormSchema>>({
    resolver: zodResolver(paymentFormSchema),
  });

  return (
    <div className="h-full w-full">
      <MaxWidthWrapper className="flex flex-col items-start justify-start gap-5 py-5">
        <div className="grid w-full grid-cols-2 items-start justify-start gap-5">
          <Card className="h-full w-full">
            <CardHeader>
              <CardTitle>Billing Address</CardTitle>
              <CardDescription>
                Please make sure your billing address matches the one your bank
                has on file.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form className="grid w-full grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="col-span-2 w-full">
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="20 Cooper Square" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="United States of America"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="New York" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="New York" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="zip"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Zip Code</FormLabel>
                        <FormControl>
                          <Input placeholder="NY 10003" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="col-span-2 flex w-full items-center justify-end">
                    <Button
                      type="submit"
                      variant="default"
                      className="text-white"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>
                Please enter your card details below. We accept Visa and
                Mastercard.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...paymentForm}>
                <form className="flex w-full flex-col items-start justify-start gap-5">
                  <FormField
                    control={paymentForm.control}
                    name="cardName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Card Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Mayer Doe" {...field} />
                        </FormControl>
                        <FormDescription>
                          Full name as displayed on card.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={paymentForm.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Card Number</FormLabel>
                        <FormControl>
                          <div className="border-input flex items-center rounded-md border bg-transparent pr-4 shadow dark:bg-white/5">
                            <Input
                              className="flex-1 border-none bg-transparent shadow-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none dark:bg-transparent"
                              placeholder="• • • •  • • • •  • • • •  • • • •"
                              {...field}
                            />
                            <span>
                              {(() => {
                                const cardNumber =
                                  paymentForm.watch("cardNumber")?.trim() || "";
                                const cardTypeInfo = cardNumber
                                  ? creditCardType(cardNumber)?.[0]
                                  : null;
                                const cardType = cardTypeInfo?.type;

                                if (!cardNumber || !cardType) {
                                  return (
                                    <CreditCard className="text-primary size-4" />
                                  );
                                }

                                switch (cardType) {
                                  case "visa":
                                    return (
                                      <Image
                                        src={VisaIcon}
                                        alt="visa"
                                        className="size-7"
                                      />
                                    );
                                  case "mastercard":
                                    return (
                                      <Image
                                        src={MasterCardIcon}
                                        alt="mastercard"
                                        className="size-7"
                                      />
                                    );
                                  default:
                                    return (
                                      <CreditCard className="text-primary size-4" />
                                    );
                                }
                              })()}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={paymentForm.control}
                    name="cardExpiry"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Card Expiry</FormLabel>
                        <FormControl>
                          <Input placeholder="09/27" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={paymentForm.control}
                    name="cardCVC"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Card CVC</FormLabel>
                        <FormControl>
                          <Input placeholder="• • •" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="col-span-2 flex w-full items-center justify-end">
                    <Button
                      type="submit"
                      variant="default"
                      className="text-white"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
