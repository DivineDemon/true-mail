import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, CircleX, User2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import GoogleIcon from "@/assets/icons/google.svg";
import MicrosoftIcon from "@/assets/icons/microsoft.svg";
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const editProfileSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
});

const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New password and confirm password must match",
  });

const Profile = () => {
  const editProfileForm = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
  });

  const changePasswordForm = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
  });

  const handleEditProfile = async (
    values: z.infer<typeof editProfileSchema>
  ) => {
    alert(JSON.stringify(values, null, 2));
  };

  const handleChangePassword = async (
    values: z.infer<typeof changePasswordSchema>
  ) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="h-full w-full">
      <MaxWidthWrapper className="flex flex-col items-start justify-start py-5">
        <div className="flex w-full items-center justify-center gap-2.5 border-b pb-5">
          <div className="bg-primary/20 text-primary size-14 rounded-full p-4">
            <User2 className="size-full" />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <span className="w-full text-left text-[30px] leading-[30px] font-bold">
              My Profile
            </span>
            <span className="text-muted-foreground w-full text-left text-[12px] leading-[12px]">
              Manage and view your profile information.
            </span>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-5 pt-5">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Edit your Profile</CardTitle>
              <CardDescription>
                Please enter your new profile information below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...editProfileForm}>
                <form
                  onSubmit={editProfileForm.handleSubmit(handleEditProfile)}
                  className="flex w-full flex-col items-center justify-center gap-5"
                >
                  <FormField
                    control={editProfileForm.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={editProfileForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="johndoe@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex w-full flex-col items-center justify-center gap-2">
                    <Label
                      htmlFor="connectedAccounts"
                      className="w-full text-left"
                    >
                      Connected Accounts
                    </Label>
                    <div className="grid w-full grid-cols-2 gap-4">
                      <div className="col-span-1 flex w-full items-center justify-center rounded-lg border bg-black/5 px-4 py-2 dark:bg-white/5">
                        <div className="flex flex-1 items-center justify-start gap-2.5">
                          <img
                            src={GoogleIcon}
                            alt="google-icon"
                            className="size-4 shrink-0"
                          />
                          <span className="w-full text-left text-sm">
                            Google
                          </span>
                        </div>
                        <CircleCheck className="size-5 text-green-500" />
                      </div>
                      <div className="col-span-1 flex w-full items-center justify-center rounded-lg border bg-black/5 px-4 py-2 dark:bg-white/5">
                        <div className="flex flex-1 items-center justify-start gap-2.5">
                          <img
                            src={MicrosoftIcon}
                            alt="microsoft-icon"
                            className="size-4 shrink-0"
                          />
                          <span className="w-full text-left text-sm">
                            Microsoft
                          </span>
                        </div>
                        <CircleX className="size-5 text-red-500" />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-end">
                    <Button type="submit" className="w-fit text-white">
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Change your Password</CardTitle>
              <CardDescription>
                Please enter your current password and the new password you want
                to set.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...changePasswordForm}>
                <form
                  onSubmit={changePasswordForm.handleSubmit(
                    handleChangePassword
                  )}
                  className="flex w-full flex-col items-center justify-center gap-5"
                >
                  <FormField
                    control={changePasswordForm.control}
                    name="currentPassword"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Current Password</FormLabel>
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
                  <FormField
                    control={changePasswordForm.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem className="w-full">
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
                  <FormField
                    control={changePasswordForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Confirm Password</FormLabel>
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
                  <div className="flex w-full items-center justify-end">
                    <Button type="submit" className="w-fit text-white">
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
};

export default Profile;
