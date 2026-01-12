"use client";

import { invoiceColumns } from "@/components/billing/invoice-columns";
import DataTable from "@/components/data-table";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { invoices } from "@/lib/constants";

export default function Invoices() {
  return (
    <div className="h-full w-full">
      <MaxWidthWrapper className="flex flex-col items-start justify-start gap-5 py-5">
        <DataTable data={invoices} columns={invoiceColumns} />
      </MaxWidthWrapper>
    </div>
  );
}
