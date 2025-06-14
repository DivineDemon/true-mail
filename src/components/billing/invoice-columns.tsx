import type { ColumnDef } from "@tanstack/react-table";

import { cn } from "@/lib/utils";

export const invoiceColumns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={cn("rounded-md px-3 py-1 text-xs font-medium", {
          "bg-red-500/20 text-red-500": row.original.status === "overdue",
          "bg-green-500/20 text-green-500": row.original.status === "paid",
          "bg-yellow-500/20 text-yellow-500": row.original.status === "unpaid",
        })}
      >
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: "number",
    header: "Invoice Number",
  },
  {
    accessorKey: "date",
    header: "Created At",
  },
];
