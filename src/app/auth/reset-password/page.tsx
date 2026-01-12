"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MailCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";

const resetPasswordSchema = z.object({
  otp: z
    .string()
    .length(6, { message: "OTP must be exactly 6 digits." })
    .regex(/^[0-9]+$/, { message: "OTP must contain only numbers." }),
});

export default function ResetPassword() {
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { otp: "" },
  });

  function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    console.log(values);
    // TODO: Implement reset password logic
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="bg-primary/20 size-14 rounded-full p-4">
        <MailCheck className="text-primary size-full" />
      </div>
      <span className="mt-5 mb-2.5 w-full text-center text-4xl font-bold">
        Reset Password
      </span>
      <span className="text-muted-foreground mb-10 w-full text-center text-xs">
        We sent a code to&nbsp;
        <span className="text-black dark:text-white">supame123@gmail.com</span>
      </span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto flex w-1/2 flex-col items-center justify-center"
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="w-full max-w-full overflow-hidden">
                <FormLabel>Enter OTP</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    {Array.from({ length: 6 }, (_, i) => {
                      return (
                        <InputOTPSlot
                          // biome-ignore lint/suspicious/noArrayIndexKey: OTP indexes are constant
                          key={i}
                          index={i}
                        />
                      );
                    })}
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="default"
            size="lg"
            className="mt-10 w-full text-white"
          >
            Continue
          </Button>
          <span className="text-muted-foreground mt-5 w-full text-center text-xs font-medium">
            Didn't receive the email?&nbsp;
            <span className="text-primary">Register</span>
          </span>
        </form>
      </Form>
    </div>
  );
}
