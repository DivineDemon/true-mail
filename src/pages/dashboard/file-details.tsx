import { useState } from "react";

import { SelectTrigger } from "@radix-ui/react-select";
import dayjs from "dayjs";
import { AtSign, ChevronDown, Folder } from "lucide-react";

import DataTable from "@/components/data-table";
import ConversionGraph from "@/components/file-details/conversion-graph";
import { emailColumns } from "@/components/file-details/email-columns";
import PieGraph from "@/components/file-details/pie-graph";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { emails } from "@/lib/constants";

const FileDetails = () => {
  const [view, setView] = useState<"email" | "data">("data");

  const toggleView = () => {
    setView((prev) => (prev === "data" ? "email" : "data"));
  };

  return (
    <div className="h-full w-full">
      <MaxWidthWrapper className="flex flex-col items-start justify-start gap-5 py-5">
        <div className="flex w-full items-center justify-center border-b pb-5">
          <div className="flex w-full items-center justify-center gap-2.5">
            <div className="bg-primary/20 text-primary size-14 rounded-full p-4">
              <Folder className="size-full" />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <span className="w-full text-left text-[30px] leading-[30px] font-bold">
                File Name
              </span>
              <span className="text-muted-foreground w-full text-left text-[12px] leading-[12px]">
                Uploaded at: {dayjs(new Date()).format("DD/MM/YYYY")}
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-end gap-2.5">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="w-full text-right text-[30px] leading-[30px] font-bold">
                {new Intl.NumberFormat().format(7201)}
              </span>
              <span className="text-muted-foreground w-full text-right text-[12px] leading-[12px]">
                Emails in this file
              </span>
            </div>
            <div className="bg-primary/20 text-primary size-14 rounded-full p-4">
              <AtSign className="size-full" />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2.5 divide-x">
          <div className="flex items-center justify-center gap-2.5 pr-2.5">
            <span className="text-muted-foreground text-xs">Email View</span>
            <Switch checked={view === "data"} onCheckedChange={toggleView} />
            <span className="text-muted-foreground text-xs">Data View</span>
          </div>
          <Select>
            <SelectTrigger className="flex h-full w-[180px] items-center justify-between rounded-md border bg-white/5 px-3.5 py-2 text-left text-sm">
              <SelectValue placeholder="Download CSV" />
              <ChevronDown className="size-4" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="reach">Maximum Reach</SelectItem>
              <SelectItem value="deliverability">
                Maximum Deliverability
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {view === "data" ? (
          <div className="grid h-[calc(100vh-259px)] w-full grid-cols-3 items-start justify-start gap-5 overflow-y-auto">
            <div className="col-span-1 h-full w-full">
              <PieGraph />
            </div>
            <div className="col-span-2 w-full">
              <ConversionGraph />
            </div>
          </div>
        ) : (
          <div className="h-[calc(100vh-259px)] w-full overflow-y-auto">
            <DataTable data={emails} columns={emailColumns} />
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default FileDetails;
