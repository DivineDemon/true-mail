import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn, MailCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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

const loginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const Login = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="bg-primary/20 size-14 rounded-full p-4">
        <MailCheck className="text-primary size-full" />
      </div>
      <span className="mt-5 mb-2.5 w-full text-center text-4xl font-bold">
        Login
      </span>
      <span className="text-muted-foreground mb-10 w-full text-center text-xs">
        Enter your Credentials to Continue
      </span>
      <div className="mx-auto grid w-1/2 grid-cols-2 gap-4">
        <Button type="button" size="lg" variant="secondary">
          <img src={GoogleIcon} alt="google-icon" className="size-5" />
        </Button>
        <Button type="button" size="lg" variant="secondary">
          <img src={MicrosoftIcon} alt="microsoft-icon" className="size-5" />
        </Button>
      </div>
      <fieldset className="border-muted-foreground mx-auto my-5 flex w-1/2 items-center justify-center border-t">
        <legend className="mx-auto px-5 text-lg font-semibold">or</legend>
      </fieldset>
      <Form {...form}>
        <form className="mx-auto flex w-1/2 flex-col items-center justify-center">
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
            <span>Login</span>
          </Button>
          <Link
            to="/forgot-password"
            className="text-primary mt-2.5 mb-5 w-full text-right text-xs font-semibold"
          >
            Forgot Password ?
          </Link>
          <span className="text-muted-foreground w-full text-center text-xs font-medium">
            Don't have an account ?&nbsp;
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </span>
        </form>
      </Form>
    </div>
  );
};

export default Login;
