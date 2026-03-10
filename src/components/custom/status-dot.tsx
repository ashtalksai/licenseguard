import { cn } from "@/lib/utils";

type StatusColor = "green" | "amber" | "orange" | "red" | "gray";

interface StatusDotProps {
  status: StatusColor;
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "h-2.5 w-2.5",
  md: "h-3 w-3",
  lg: "h-4 w-4",
};

const colorMap: Record<StatusColor, string> = {
  green: "bg-status-green",
  amber: "bg-status-amber",
  orange: "bg-status-orange",
  red: "bg-status-red",
  gray: "bg-status-gray",
};

export function StatusDot({
  status,
  size = "md",
  pulse,
  className,
}: StatusDotProps) {
  const shouldPulse = pulse ?? status === "red";
  return (
    <span
      className={cn(
        "inline-block rounded-full shrink-0",
        sizeMap[size],
        colorMap[status],
        shouldPulse && "animate-pulse",
        className
      )}
    />
  );
}

const badgeColorMap: Record<StatusColor, string> = {
  green: "bg-status-green-bg text-emerald-800",
  amber: "bg-status-amber-bg text-amber-800",
  orange: "bg-status-orange-bg text-orange-800",
  red: "bg-status-red-bg text-red-800",
  gray: "bg-gray-100 text-gray-600",
};

interface StatusBadgeProps {
  status: StatusColor;
  label: string;
  className?: string;
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium",
        badgeColorMap[status],
        className
      )}
    >
      <StatusDot status={status} size="sm" />
      {label}
    </span>
  );
}
