import * as React from "react";

import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
  { status: "Deliverable", emails: 1186, fill: "var(--color-deliverable)" },
  { status: "Undeliverable", emails: 2305, fill: "var(--color-undeliverable)" },
  { status: "Risky", emails: 3237, fill: "var(--color-risky)" },
  { status: "Duplicate", emails: 473, fill: "var(--color-duplicate)" },
];

const chartConfig = {
  status: {
    label: "Status",
  },
  deliverable: {
    label: "Deliverable",
    color: "var(--chart-1)",
  },
  undeliverable: {
    label: "Undeliverable",
    color: "var(--chart-2)",
  },
  risky: {
    label: "Risky",
    color: "var(--chart-3)",
  },
  duplicate: {
    label: "Duplicate",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const PieGraph = () => {
  const totalEmails = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.emails, 0);
  }, []);

  return (
    <Card className="flex h-[480px] flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Deliverable Emails</CardTitle>
        <CardDescription>
          Statistical Categorization of Email Health
        </CardDescription>
      </CardHeader>
      <CardContent className="h-full flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="emails"
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
                          {totalEmails.toLocaleString()}
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
    </Card>
  );
};

export default PieGraph;
