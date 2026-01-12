"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn, MailCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import GoogleIcon from "@/assets/icons/google.svg";
import MicrosoftIcon from "@/assets/icons/microsoft.svg";
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

const registerFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function Register() {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
  });

  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    console.log(values);
    // TODO: Implement registration logic
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="bg-primary/20 size-14 rounded-full p-4">
        <MailCheck className="text-primary size-full" />
      </div>
      <span className="mt-5 mb-2.5 w-full text-center text-4xl font-bold">
        Register
      </span>
      <span className="text-muted-foreground mb-10 w-full text-center text-xs">
        Enter your Credentials to Continue
      </span>
      <div className="mx-auto grid w-1/2 grid-cols-2 gap-4">
        <Button type="button" size="lg" variant="secondary">
          <Image src={GoogleIcon} alt="google-icon" className="size-5" />
        </Button>
        <Button type="button" size="lg" variant="secondary">
          <Image src={MicrosoftIcon} alt="microsoft-icon" className="size-5" />
        </Button>
      </div>
      <fieldset className="border-muted-foreground mx-auto my-5 flex w-1/2 items-center justify-center border-t">
        <legend className="mx-auto px-5 text-lg font-semibold">or</legend>
      </fieldset>
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
                <FormLabel>Password</FormLabel>
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
            <LogIn />
            <span>Register</span>
          </Button>
          <span className="text-muted-foreground mt-5 w-full text-center text-xs font-medium">
            Already have an account ?&nbsp;
            <Link href="/login" className="text-primary">
              Login
            </Link>
          </span>
        </form>
      </Form>
    </div>
  );
}
