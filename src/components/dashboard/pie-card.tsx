import { Check, CircleX, Trash } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "../ui/button";
import WarningModal from "../warning-modal";

const chartConfig = {
  total: {
    label: "Total Emails",
  },
  deliverable: {
    label: "Deliverable",
    color: "var(--chart-1)",
  },
  undeliverable: {
    label: "Undeliverable",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

interface PieCardProps {
  data: PastRecords;
}

const PieCard = ({ data }: PieCardProps) => {
  const [name, setName] = useState<string>(data.name);
  const [open, setOpen] = useState<boolean>(false);

  const memoizedData = useMemo(() => {
    return [
      {
        status: "deliverable",
        total: data.deliverable,
        fill: "var(--color-deliverable)",
      },
      {
        status: "undeliverable",
        total: data.total - data.deliverable,
        fill: "var(--color-undeliverable)",
      },
    ];
  }, [data]);

  return (
    <>
      <Card className="flex flex-col">
        <CardHeader className="gap-2.5 pb-0">
          <CardTitle className="flex w-full items-center justify-center gap-1.5">
            <Input
              type="text"
              value={name}
              className="flex-1"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter File Name"
            />
            {name !== data.name && (
              <>
                <Button variant="default" size="icon" className="text-white">
                  <Check />
                </Button>
                <Button variant="destructive" size="icon">
                  <CircleX />
                </Button>
              </>
            )}
          </CardTitle>
          <CardDescription
            className={cn(
              "ml-auto w-fit rounded-full px-3 py-1 text-xs font-medium capitalize",
              {
                "bg-green-500/20 text-green-500": data.status === "completed",
                "bg-yellow-500/20 text-yellow-500":
                  data.status === "processing",
                "bg-red-500/20 text-red-500": data.status === "cancelled",
              },
            )}
          >
            {data.status}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={memoizedData}
                dataKey="total"
                nameKey="status"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {data.total}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy ?? 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Emails
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex w-full items-center justify-center gap-2.5">
          <Link
            href={`/dashboard/file-details/${data.id}`}
            className={cn(
              buttonVariants({
                variant: "default",
                size: "default",
                className: "flex-1 text-white",
              }),
            )}
          >
            View Details
          </Link>
          <Button
            type="button"
            variant="destructive"
            size="icon"
            onClick={() => setOpen(true)}
            className="shrink text-white"
          >
            <Trash />
          </Button>
        </CardFooter>
      </Card>
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
};

export default PieCard;
