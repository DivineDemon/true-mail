"use client";

import { useState } from "react";

import { historyColumns } from "@/components/dashboard/history-columns";
import PieCard from "@/components/dashboard/pie-card";
import DataTable from "@/components/data-table";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useGlobal } from "@/components/providers/global-provider";
import { Input } from "@/components/ui/input";
import { pastRecords } from "@/lib/constants";

export default function Dashboard() {
  const [search, setSearch] = useState<string>("");
  const { mode } = useGlobal();

  return (
    <div className="h-full w-full">
      <MaxWidthWrapper className="mt-5 h-[calc(100vh-104px)] overflow-y-auto">
        {mode === "single" ? (
          <DataTable data={pastRecords} columns={historyColumns} />
        ) : (
          <div className="h-full w-full overflow-hidden">
            <div className="flex w-full items-center justify-end gap-2.5 pb-3.5">
              <Input
                placeholder="Search by File Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <div className="grid h-[calc(100vh-154px)] w-full grid-cols-4 items-start justify-start gap-4 overflow-y-auto">
              {pastRecords
                .filter((record) =>
                  record.name.toLowerCase().includes(search.toLowerCase()),
                )
                .map((record) => (
                  <PieCard key={record.id} data={record} />
                ))}
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
}
