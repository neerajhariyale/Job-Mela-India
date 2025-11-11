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
import axios from "axios"
import { toast } from "sonner"
import { apiEndpoints } from "@/lib/api"

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

interface ChartDataPoint {
  date: string
  internship: number
  it: number
  nonit: number
  govt: number
}

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("7d")
  const [chartData, setChartData] = React.useState<ChartDataPoint[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  const fetchChartData = React.useCallback(async (range: string) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await axios.get(apiEndpoints.jobs.chartStats(range))
      console.log(response.data)
      setChartData(response.data)
    } catch (err) {
      console.error("Failed to fetch chart data:", err)
      setError("Failed to load chart data")
      toast.error("Failed to load chart statistics")
    } finally {
      setLoading(false)
    }
  }, [])

  React.useEffect(() => {
    fetchChartData(timeRange)
  }, [timeRange, fetchChartData])

  const handleTimeRangeChange = (newRange: string) => {
    setTimeRange(newRange)
  }

  if (error) {
    return (
      <Card className="pt-0">
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1">
            <CardTitle>Area Chart - Interactive</CardTitle>
            <CardDescription>
              Showing job stats: Internship, IT, Non-IT, Govt
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <div className="flex items-center justify-center h-[250px] text-red-500">
            {error}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing job stats: Internship, IT, Non-IT, Govt
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={handleTimeRangeChange}>
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
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-muted-foreground">Loading chart data...</div>
            </div>
          ) : chartData.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-muted-foreground">No data available for selected time range</div>
            </div>
          ) : (
            <AreaChart data={chartData}>
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
          )}
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
