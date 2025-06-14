/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import type { ColumnDef } from "@tanstack/react-table";
import {
  AtSign,
  Briefcase,
  EllipsisVertical,
  Folder,
  Trash,
} from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import type { RootState } from "@/store";

import WarningModal from "../warning-modal";

export const historyColumns: ColumnDef<PastRecords>[] = [
  {
    accessorKey: "name",
    header: "File Name",
    cell: ({ row }) => {
      const { mode } = useSelector((state: RootState) => state.global);

      return (
        <div className="flex w-full items-center justify-start gap-2">
          {mode === "single" ? (
            <AtSign className="text-primary size-4" />
          ) : (
            <Folder className="text-primary size-4" />
          )}
          <span className="flex-1 text-left">{row.original.name}</span>
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
          }
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
      const { mode } = useSelector((state: RootState) => state.global);

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
                    to={`/dashboard/file-details/${row.original.id}`}
                    className="flex w-full items-center justify-center gap-2.5"
                  >
                    <Briefcase className="text-primary size-4" />
                    <span className="flex-1 text-left text-sm font-medium">
                      View Details
                    </span>
                  </Link>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div
                  onClick={() => setOpen(true)}
                  className="flex w-full cursor-pointer items-center justify-center gap-2.5"
                >
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
