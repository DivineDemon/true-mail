import { useState } from "react";

import { LayoutGrid, List } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { historyColumns } from "@/components/dashboard/history-columns";
import PieCard from "@/components/dashboard/pie-card";
import DataTable from "@/components/data-table";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { pastRecords } from "@/lib/constants";
import type { RootState } from "@/store";
import { setView } from "@/store/slices/global";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>("");
  const { view } = useSelector((state: RootState) => state.global);

  const toggleView = (view: "list" | "grid") => {
    dispatch(setView(view));
  };

  return (
    <div className="h-full w-full">
      <MaxWidthWrapper className="mt-5 h-[calc(100vh-104px)] overflow-y-auto">
        {view === "list" ? (
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
              <Button
                onClick={() => toggleView("grid")}
                type="button"
                size="icon"
                variant={view === "grid" ? "default" : "outline"}
              >
                <LayoutGrid />
              </Button>
              <Button
                onClick={() => toggleView("list")}
                type="button"
                size="icon"
                variant={view === "grid" ? "outline" : "default"}
              >
                <List />
              </Button>
            </div>
            <div className="grid h-[calc(100vh-154px)] w-full grid-cols-4 items-start justify-start gap-4 overflow-y-auto">
              {pastRecords
                .filter((record) =>
                  record.name.toLowerCase().includes(search.toLowerCase())
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
};

export default Dashboard;
