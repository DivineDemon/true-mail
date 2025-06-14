/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import type { ColumnDef } from "@tanstack/react-table";
import { ChevronDown, Info } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import EmailDetailSheet from "./email-detail-sheet";

export const emailColumns: ColumnDef<Email>[] = [
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const [open, setOpen] = useState<boolean>(false);

      return (
        <>
          <div className="flex w-full items-center justify-start gap-2.5">
            <Button
              onClick={() => setOpen(true)}
              type="button"
              variant="outline"
              size="icon"
            >
              <Info />
            </Button>
            <span>{row.original.email}</span>
          </div>
          <EmailDetailSheet open={open} setOpen={setOpen} />
        </>
      );
    },
  },
  {
    accessorKey: "reason",
    header: "Reason",
    cell: ({ row }) => (
      <span className="rounded-md bg-black/5 px-4 py-1.5 text-xs font-medium lowercase dark:bg-white/5">
        {row.original.reason.split(" ").join("-")}
      </span>
    ),
  },
  {
    accessorKey: "score",
    header: "Score",
    cell: ({ row }) => (
      <span
        className={cn("rounded-md px-2.5 py-1 text-sm font-medium", {
          "bg-green-500/20 text-green-500": row.original.score >= 75,
          "bg-yellow-500/20 text-yellow-500":
            row.original.score >= 50 && row.original.score < 75,
          "bg-red-500/20 text-red-500": row.original.score < 50,
        })}
      >
        {row.original.score}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            Status
            <ChevronDown className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {["deliverable", "undeliverable", "risky", "unknown"].map(
            (status) => (
              <DropdownMenuItem
                key={status}
                onSelect={() => column.setFilterValue(status)}
                className={
                  column.getFilterValue() === status ? "font-semibold" : ""
                }
              >
                {status}
              </DropdownMenuItem>
            )
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => column.setFilterValue(undefined)}
            className="text-red-500"
          >
            Clear Filter
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    enableColumnFilter: true,
    filterFn: "equals",
  },
];
