"use client";

import { useMemo } from "react";
import { BarChart, CartesianGrid, XAxis, Bar } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const dummyEnrollmentsData = [
  { date: "2025-07-20", enrollments: 489 },
  { date: "2025-07-21", enrollments: 470 },
  { date: "2025-07-22", enrollments: 263 },
  { date: "2025-07-23", enrollments: 221 },
  { date: "2025-07-24", enrollments: 209 },
  { date: "2025-07-25", enrollments: 342 },
  { date: "2025-07-26", enrollments: 188 },
  { date: "2025-07-27", enrollments: 401 },
  { date: "2025-07-28", enrollments: 145 },
  { date: "2025-07-29", enrollments: 232 },
  { date: "2025-07-30", enrollments: 278 },
  { date: "2025-07-31", enrollments: 350 },
  { date: "2025-08-01", enrollments: 490 },
  { date: "2025-08-02", enrollments: 305 },
  { date: "2025-08-03", enrollments: 276 },
  { date: "2025-08-04", enrollments: 199 },
  { date: "2025-08-05", enrollments: 312 },
  { date: "2025-08-06", enrollments: 420 },
  { date: "2025-08-07", enrollments: 154 },
  { date: "2025-08-08", enrollments: 261 },
  { date: "2025-08-09", enrollments: 341 },
  { date: "2025-08-10", enrollments: 205 },
  { date: "2025-08-11", enrollments: 399 },
  { date: "2025-08-12", enrollments: 287 },
  { date: "2025-08-13", enrollments: 452 },
  { date: "2025-08-14", enrollments: 318 },
  { date: "2025-08-15", enrollments: 267 },
  { date: "2025-08-16", enrollments: 356 },
  { date: "2025-08-17", enrollments: 115 },
  { date: "2025-08-18", enrollments: 97 },
  { date: "2025-08-19", enrollments: 137 },
  { date: "2025-08-20", enrollments: 110 },
];

const chartConfig = {
  enrollments: {
    label: "Enrollments",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

interface ChartAreaInteractiveProps {
  data: {
    date: string;
    enrollments: number;
  }[];
}

export function ChartAreaInteractiveData({ data }: ChartAreaInteractiveProps) {
  const totalEnrollmentsNumber = useMemo(
    () => data.reduce((acc, curr) => acc + curr.enrollments, 0),
    [data]
  );

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total Enrollments</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total enrollments for the last 30 days: {totalEnrollmentsNumber}
          </span>
          <span className="@[540px]/card:hidden">Last 30 days: {totalEnrollmentsNumber} </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={"preserveStartEnd"}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  labelFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={"enrollments"} fill="var(--chart-1)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
