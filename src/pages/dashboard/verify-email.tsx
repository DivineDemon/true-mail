import { type ChangeEvent, useState } from "react";

import { MailCheck, Send } from "lucide-react";
import { useSelector } from "react-redux";

import EmailListUploader from "@/components/dashboard/email-list-uploader";
import EmailDetailSheet from "@/components/file-details/email-detail-sheet.tsx";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL_REGEX } from "@/lib/constants";
import type { RootState } from "@/store";

const VerifyEmail = () => {
  const [, setEmails] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const { mode } = useSelector((state: RootState) => state.global);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const extracted = value.match(EMAIL_REGEX) ?? [];
    setEmails(extracted);
  };

  return (
    <>
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
                <span
                  onClick={() => setOpen(true)}
                  className="text-primary cursor-pointer"
                >
                  here.
                </span>
              </span>
            </div>
          ) : (
            <Tabs defaultValue="upload" className="w-1/2">
              <TabsList className="w-full">
                <TabsTrigger value="upload">Upload File</TabsTrigger>
                <TabsTrigger value="paste">Copy & Paste</TabsTrigger>
              </TabsList>
              <TabsContent value="upload">
                <EmailListUploader setEmails={setEmails} />
              </TabsContent>
              <TabsContent value="paste">
                <Textarea
                  className="bg-primary/20 dark:bg-primary/20 border-primary h-[316px] w-full resize-none rounded-lg border-2 border-dashed"
                  placeholder="Copy & Paste your Emails Here..."
                  value={inputValue}
                  onChange={handleTextChange}
                />
              </TabsContent>
            </Tabs>
          )}
        </MaxWidthWrapper>
      </div>
      <EmailDetailSheet open={open} setOpen={setOpen} />
    </>
  );
};

export default VerifyEmail;
