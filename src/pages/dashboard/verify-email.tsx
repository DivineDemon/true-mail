import { MailCheck, Send, Upload } from "lucide-react";
import { useSelector } from "react-redux";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import type { RootState } from "@/store";

const VerifyEmail = () => {
  const { mode } = useSelector((state: RootState) => state.global);

  return (
    <div className="h-full w-full">
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <div className="bg-primary/20 size-14 rounded-full p-4">
          <MailCheck className="text-primary size-full" />
        </div>
        <div className="mt-5 mb-10 flex w-full flex-col items-center justify-center gap-2.5">
          <span className="w-full text-center text-5xl font-bold">
            Verify your Email
          </span>
          <span className="text-muted-foreground w-full text-center text-sm font-light">
            Get started by entering an email below and receive
            <br />
            validation within milliseconds.
          </span>
        </div>
        {mode === "single" ? (
          <div className="flex w-1/2 flex-col items-center justify-center gap-2.5">
            <div className="flex w-full items-center justify-center gap-5">
              <Input
                type="text"
                className="h-full w-full"
                placeholder="email@example.com"
              />
              <Button
                type="button"
                variant="default"
                className="text-white"
                size="lg"
              >
                <Send />
                Verify
              </Button>
            </div>
            <span className="text-muted-foreground w-full text-left text-xs">
              See the results of your last performed email validation&nbsp;
              <span className="text-primary">here.</span>
            </span>
          </div>
        ) : (
          <Tabs defaultValue="upload" className="w-1/2">
            <TabsList className="w-full">
              <TabsTrigger value="upload">Upload File</TabsTrigger>
              <TabsTrigger value="paste">Copy & Paste</TabsTrigger>
            </TabsList>
            <TabsContent value="upload">
              <div className="bg-primary/20 border-primary flex min-h-[316px] w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-dashed p-10">
                <div className="bg-primary flex size-14 items-center justify-center rounded-full p-4">
                  <Upload className="size-full text-white" />
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-2.5">
                  <span className="w-full text-center text-lg font-semibold">
                    Drag and Drop
                  </span>
                  <fieldset className="border-primary/50 w-1/2 border-t">
                    <legend className="text-primary px-5 text-center text-sm font-semibold">
                      or
                    </legend>
                  </fieldset>
                  <span className="w-full text-center text-lg font-semibold">
                    Click to Upload
                  </span>
                </div>
                <span className="w-full text-center text-sm font-medium text-gray-400">
                  your email list for validation.
                  <br />
                  Supports: CSV, TXT, XLS, or XLSX.
                </span>
              </div>
            </TabsContent>
            <TabsContent value="paste">
              <Textarea
                className="bg-primary/20 dark:bg-primary/20 border-primary h-[316px] w-full resize-none rounded-lg border-2 border-dashed"
                placeholder="Copy & Paste your Emails Here..."
              />
            </TabsContent>
          </Tabs>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default VerifyEmail;
