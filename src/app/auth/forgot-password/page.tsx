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
import { Input } from "@/components/ui/input";

const forgotFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function ForgotPassword() {
  const form = useForm<z.infer<typeof forgotFormSchema>>({
    resolver: zodResolver(forgotFormSchema),
  });

  function onSubmit(values: z.infer<typeof forgotFormSchema>) {
    console.log(values);
    // TODO: Implement forgot password logic
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="bg-primary/20 size-14 rounded-full p-4">
        <MailCheck className="text-primary size-full" />
      </div>
      <span className="mt-5 mb-2.5 w-full text-center text-4xl font-bold">
        Forgot Password
      </span>
      <span className="text-muted-foreground mb-10 w-full text-center text-xs">
        Provide the Following Details to Continue
      </span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto flex w-1/2 flex-col items-center justify-center"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="my-5 w-full">
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="• • • • • • • •"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full text-white"
            variant="default"
            size="lg"
          >
            Proceed
          </Button>
        </form>
      </Form>
    </div>
  );
}
