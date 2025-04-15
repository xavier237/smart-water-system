"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const chartVariants = cva("flex flex-col space-y-1.5", {
  variants: {
    variant: {
      default: "bg-popover text-popover-foreground shadow-md",
      card: "bg-card text-card-foreground",
    },
    size: {
      default: "p-6",
      sm: "p-4",
      lg: "p-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

const Chart = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof chartVariants>
>(({ className, variant, size, ...props }, ref) => (
  <div ref={ref} className={cn(chartVariants({ variant, size, className }))} {...props} />
))
Chart.displayName = "Chart"

const ChartContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("relative", className)} {...props} />,
)
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute z-10 rounded-md border bg-secondary p-2 text-sm text-secondary-foreground shadow-sm animate-in fade-in",
        className,
      )}
      {...props}
    />
  ),
)
ChartTooltip.displayName = "ChartTooltip"

interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  value?: string | number
}

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  ({ className, label, value, children, ...props }, ref) => (
    <div ref={ref} className={cn("grid gap-1", className)} {...props}>
      {label && <div className="font-medium">{label}</div>}
      {value && <div>{value}</div>}
      {children}
    </div>
  ),
)
ChartTooltipContent.displayName = "ChartTooltipContent"

const ChartLegend = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center space-x-2", className)} {...props} />
  ),
)
ChartLegend.displayName = "ChartLegend"

interface ChartLegendItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  color: string
}

const ChartLegendItem = React.forwardRef<HTMLDivElement, ChartLegendItemProps>(
  ({ className, name, color, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center space-x-1 text-sm", className)} {...props}>
      <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      <span>{name}</span>
    </div>
  ),
)
ChartLegendItem.displayName = "ChartLegendItem"

export { Chart, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendItem }
