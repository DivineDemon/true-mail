import { TestTube2, Upload } from "lucide-react";

import MaxWidthWrapper from "../max-width-wrapper";
import Badge from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Test = () => {
  return (
    <section className="w-full bg-[#0F162E] py-20 text-white">
      <MaxWidthWrapper className="grid grid-cols-2 items-center justify-center gap-20">
        <div className="col-span-1 flex w-full flex-col items-start justify-center gap-5">
          <Badge className="bg-primary/50 border-primary border text-white">
            <TestTube2 className="size-4" />
            Test Drive
          </Badge>
          <span className="w-full text-left text-5xl font-bold">
            Test the Email Validator
          </span>
          <span className="w-full text-left text-sm font-light">
            Truemail delivers industry-leading bulk email verification with 99%
            accuracy. Input an email address directly into our verification tool
            or upload a file to validate an entire list of email addresses.
            <br />
            <br />
            Within seconds, Truemail identifies invalid, risky, or inactive
            addresses using advanced real-time validation technology. Experience
            unmatched precision, efficiency, and reliability to ensure your
            campaigns reach genuine recipients and maintain sender reputation.
          </span>
        </div>
        <div className="col-span-1 w-full">
          <div className="bg-primary/20 flex h-full w-full flex-col items-center justify-center gap-5 rounded-lg p-10 backdrop-blur-sm">
            <div className="bg-primary flex w-full items-center justify-center gap-2.5 rounded-full py-3.5 text-white">
              <Upload className="size-5" />
              <span>Upload your Email List</span>
            </div>
            <fieldset className="flex w-full items-center justify-center border-t border-white/50">
              <legend className="mx-auto px-5 text-lg font-semibold">or</legend>
            </fieldset>
            <div className="grid w-full grid-cols-4 gap-2.5">
              <Input
                type="text"
                className="placeholder:text-primary/75 text-primary col-span-3 h-full w-full rounded-full bg-white px-5"
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
