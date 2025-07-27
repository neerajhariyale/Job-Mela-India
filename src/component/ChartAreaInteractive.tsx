"use client"

import * as React from "react"
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart"
import type { ChartConfig } from "../components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const chartData = [
  { date: "2024-06-01", internship: 120, it: 0, nonit: 180, govt: 100 },
  { date: "2024-06-02", internship: 140, it: 300, nonit: 200, govt: 120 },
  { date: "2024-06-03", internship: 110, it: 270, nonit: 190, govt: 90 },
  { date: "2024-06-04", internship: 160, it: 320, nonit: 220, govt: 130 },
  { date: "2024-06-05", internship: 180, it: 280, nonit: 210, govt: 150 },
  { date: "2024-06-06", internship: 130, it: 290, nonit: 170, govt: 110 },
  { date: "2024-06-07", internship: 150, it: 310, nonit: 230, govt: 140 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  internship: {
    label: "Internship",
    color: "#7c3aed",
  },
  it: {
    label: "IT JOBS",
    color: "#10b981",
  },
  nonit: {
    label: "NOT IT JOBS",
    color: "#f59e0b",
  },
  govt: {
    label: "GOVT. JOBS",
    color: "#ef4444",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("7d")

  const filteredData = chartData // Here it's static for demo; you'd filter based on real dates

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing job stats: Internship, IT, Non-IT, Govt
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className=" w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select time range"
          >
            <SelectValue placeholder="Last 7 days" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
          <SelectItem value="5year">Last 5 years</SelectItem>
          <SelectItem value="4year">Last 4 years</SelectItem>
          <SelectItem value="3year">Last 3 years</SelectItem>
          <SelectItem value="2year">Last 2 years</SelectItem>
          <SelectItem value="12mon">Last 12 months</SelectItem>
          <SelectItem value="9mon">Last 9 months</SelectItem>
          <SelectItem value="6mon">Last 6 months</SelectItem>
            <SelectItem value="90d">Last 3 months</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillInternship" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillIT" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillNonIT" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillGovt" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="internship"
              type="natural"
              fill="url(#fillInternship)"
              stroke="#7c3aed"
              stackId="a"
            />
            <Area
              dataKey="it"
              type="natural"
              fill="url(#fillIT)"
              stroke="#10b981"
              stackId="a"
            />
            <Area
              dataKey="nonit"
              type="natural"
              fill="url(#fillNonIT)"
              stroke="#f59e0b"
              stackId="a"
            />
            <Area
              dataKey="govt"
              type="natural"
              fill="url(#fillGovt)"
              stroke="#ef4444"
              stackId="a"
            />
            <ChartLegend />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
