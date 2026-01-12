/* eslint-disable react-hooks/rules-of-hooks */

import type { ColumnDef } from "@tanstack/react-table";
import {
  AtSign,
  Briefcase,
  Check,
  CircleX,
  EllipsisVertical,
  Trash,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useGlobal } from "@/components/providers/global-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import WarningModal from "../warning-modal";

export const historyColumns: ColumnDef<PastRecords>[] = [
  {
    accessorKey: "name",
    header: "File Name",
    cell: ({ row }) => {
      const [name, setName] = useState<string>(row.original.name);

      return (
        <div className="flex w-full items-center justify-start gap-2">
          <AtSign className="text-primary size-4" />
          <div className="flex w-full items-center justify-start gap-2.5">
            <Input
              type="text"
              placeholder="Enter File Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-1/2"
            />
            {name !== row.original.name && (
              <>
                <Button
                  type="button"
                  size="icon"
                  variant="default"
                  className="text-white"
                >
                  <Check />
                </Button>
                <Button
                  onClick={() => setName(row.original.name)}
                  type="button"
                  size="icon"
                  variant="destructive"
                >
                  <CircleX />
                </Button>
              </>
            )}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "deliverable",
    header: "Deliverable",
    cell: ({ row }) => <span>{row.original.deliverable}%</span>,
  },
  {
    accessorKey: "total",
    header: "Total Emails",
    cell: ({ row }) => (
      <span>{new Intl.NumberFormat().format(row.original.total)}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div
        className={cn(
          "w-36 rounded-full py-1.5 text-center text-xs font-medium text-white capitalize",
          {
            "bg-green-500/20 text-green-500":
              row.original.status === "completed",
            "bg-yellow-500/20 text-yellow-500":
              row.original.status === "processing",
            "bg-red-500/20 text-red-500": row.original.status === "cancelled",
          },
        )}
      >
        {row.original.status}
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const [open, setOpen] = useState<boolean>(false);
      const { mode } = useGlobal();

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <EllipsisVertical className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                {mode === "single" ? (
                  <div className="flex w-full items-center justify-center gap-2.5">
                    <Briefcase className="text-primary size-4" />
                    <span className="flex-1 text-left text-sm font-medium">
                      View Details
                    </span>
                  </div>
                ) : (
                  <Link
                    href={`/dashboard/file-details/${row.original.id}`}
                    className="flex w-full items-center justify-center gap-2.5"
                  >
                    <Briefcase className="text-primary size-4" />
                    <span className="flex-1 text-left text-sm font-medium">
                      View Details
                    </span>
                  </Link>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpen(true)}>
                <div className="flex w-full cursor-pointer items-center justify-center gap-2.5">
                  <Trash className="text-primary size-4" />
                  <span className="flex-1 text-left text-sm font-medium">
                    Delete
                  </span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <WarningModal
            open={open}
            title="Are you Sure?"
            text={
              <span>
                This action is irreversible, please
                <br />
                make sure before confirming.
              </span>
            }
            setOpen={setOpen}
          />
        </>
      );
    },
  },
];
