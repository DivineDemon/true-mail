import { TestTube2, Upload } from "lucide-react";

import MaxWidthWrapper from "../max-width-wrapper";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Test = () => {
  return (
    <section id="test" className="w-full bg-background py-20 text-foreground">
      <MaxWidthWrapper className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-20">
        <div className="col-span-1 flex w-full flex-col items-start justify-center gap-5">
          <Badge className="bg-primary/10 border-primary border text-primary">
            <TestTube2 className="size-4" />
            Test Drive
          </Badge>
          <h2 className="w-full text-left text-4xl sm:text-5xl font-bold tracking-tight">
            Test the Email Validator
          </h2>
          <p className="w-full text-left text-sm font-light text-muted-foreground text-pretty">
            True Mail delivers industry-leading bulk email verification with 99%
            accuracy. Input an email address directly into our verification tool
            or upload a file to validate an entire list of email addresses.
            <br />
            <br />
            Within seconds, True Mail identifies invalid, risky, or inactive
            addresses using advanced real-time validation technology. Experience
            unmatched precision, efficiency, and reliability to ensure your
            campaigns reach genuine recipients and maintain sender reputation.
          </p>
        </div>
        <div className="col-span-1 w-full">
          <div className="bg-card border text-card-foreground flex h-full w-full flex-col items-center justify-center gap-5 rounded-lg p-10 shadow-sm">
            <div className="bg-primary flex w-full items-center justify-center gap-2.5 rounded-full py-3.5 text-primary-foreground">
              <Upload className="size-5" />
              <span>Upload your Email List</span>
            </div>
            <fieldset className="flex w-full items-center justify-center border-t border-border">
              <legend className="mx-auto px-5 text-lg font-semibold text-muted-foreground">
                or
              </legend>
            </fieldset>
            <div className="grid w-full grid-cols-4 gap-2.5">
              <Input
                type="text"
                className="col-span-3 h-full w-full rounded-full bg-background px-5"
                placeholder="email@example.com"
              />
              <Button
                type="button"
                variant="default"
                size="lg"
                className="rounded-full"
              >
                Verify
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Test;
