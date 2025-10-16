import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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

export const description = "An area chart with axes";

const chartData = [
  { month: "January", income: 300000, expense: 200000 },
  { month: "February", income: 700000, expense: 800000 },
  { month: "March", income: 300000, expense: 300000 },
  { month: "April", income: 800000, expense: 170000 },
];

const chartConfig = {
  income: {
    label: "income",
    color: "var(--chart-1)",
  },
  expense: {
    label: "expense",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function AmountIncomeAndSpentChart() {
  return (
    <Card className="rounded-lg h-full">
      <CardHeader>
        <CardTitle className="text-black-pearl-700 font-bold text-3xl">
          Income & Expense
        </CardTitle>
        <CardDescription>
          Showing total income and expense per month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 12,
              top: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="expense"
              type="natural"
              fill="#ffc107"
              fillOpacity={0.4}
              stroke="#ffc107"
            />
            <Area
              dataKey="income"
              type="natural"
              fill="#0a3d62"
              fillOpacity={0.4}
              stroke="#0a3d62"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
