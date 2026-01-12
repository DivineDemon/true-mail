import { CircleCheck, CircleX } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

interface EmailDetailSheetProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const EmailDetailSheet = ({ open, setOpen }: EmailDetailSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="gap-0">
        <SheetHeader>
          <SheetTitle>supame123@gmail.com</SheetTitle>
          <SheetDescription>Email Statistics and Test Results</SheetDescription>
        </SheetHeader>
        <div className="flex h-full max-h-full w-full flex-col items-start justify-start gap-4 overflow-y-auto border-y">
          <div className="flex w-full items-center justify-center border-b p-4">
            <span className="flex-1 text-left font-medium">Score</span>
            <span
              className={cn("rounded-md px-3 py-1", {
                "bg-red-500/20 text-red-500": false,
                "bg-green-500/20 text-green-500": true,
                "bg-yellow-500/20 text-yellow-500": false,
              })}
            >
              100
            </span>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2.5 border-b px-4 pb-4">
            <span className="w-full text-left font-semibold">
              General Information
            </span>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                Full Name
              </span>
              <span className="w-full text-right text-sm">Mushood Hanif</span>
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                Gender
              </span>
              <span className="w-full text-right text-sm">Male</span>
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                Status
              </span>
              <span className="w-full text-right text-sm">Deliverable</span>
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground flex-1 text-left text-sm font-medium">
                Reason
              </span>
              <span className="rounded-md bg-black/5 px-4 py-1.5 text-xs font-medium lowercase dark:bg-white/5">
                accepted-email
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2.5 border-b px-4 pb-4">
            <span className="w-full text-left font-semibold">Details</span>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                Free
              </span>
              <CircleX className="text-destructive size-5 shrink-0" />
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                Role
              </span>
              <CircleCheck className="size-5 shrink-0 text-green-500" />
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                Disposable
              </span>
              <CircleX className="text-destructive size-5 shrink-0" />
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                Accept All
              </span>
              <CircleX className="text-destructive size-5 shrink-0" />
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                Tag
              </span>
              <CircleX className="text-destructive size-5 shrink-0" />
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                Numerical Characters
              </span>
              <span className="w-full text-right text-sm">3</span>
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                Alphabetical Characters
              </span>
              <span className="w-full text-right text-sm">6</span>
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                Unicode Symbols
              </span>
              <span className="w-full text-right text-sm">0</span>
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                Mailbox Full
              </span>
              <CircleX className="text-destructive size-5 shrink-0" />
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                No Reply
              </span>
              <CircleX className="text-destructive size-5 shrink-0" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2.5 px-4">
            <span className="w-full text-left font-semibold">
              Mail Server Information
            </span>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                SMTP Provider
              </span>
              <span className="w-full text-right text-sm">N/A</span>
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                MX Record
              </span>
              <span className="w-full text-right text-sm">mx1.google.com</span>
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="text-muted-foreground w-full text-left text-sm font-medium">
                Implicit MX Record
              </span>
              <span className="w-full text-right text-sm">N/A</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EmailDetailSheet;
