import { cn } from "@/lib/utils";
import { StatusDot } from "@/components/custom/status-dot";

interface StatCardProps {
  label: string;
  count: number;
  status: "red" | "amber" | "green" | "gray";
}

const borderColors = {
  red: "border-l-status-red",
  amber: "border-l-status-amber",
  green: "border-l-status-green",
  gray: "border-l-status-gray",
};

const bgColors = {
  red: "bg-status-red-bg",
  amber: "bg-status-amber-bg",
  green: "bg-white",
  gray: "bg-white",
};

const textColors = {
  red: "text-status-red",
  amber: "text-status-amber",
  green: "text-status-green",
  gray: "text-status-gray",
};

export function StatCard({ label, count, status }: StatCardProps) {
  const hasIssue = status === "red" ? count > 0 : false;
  const hasWarning = status === "amber" ? count > 0 : false;

  return (
    <div
      className={cn(
        "rounded-xl p-5 shadow-sm ring-1 ring-black/5 border-l-4",
        borderColors[status],
        hasIssue ? bgColors.red : hasWarning ? bgColors.amber : "bg-white"
      )}
    >
      <div className="flex items-center gap-2 mb-1">
        <StatusDot status={count > 0 ? status : "gray"} size="sm" />
        <span className="text-sm text-muted-foreground font-medium">
          {label}
        </span>
      </div>
      <span
        className={cn(
          "font-display font-extrabold text-4xl",
          count > 0 ? textColors[status] : "text-gray-300"
        )}
      >
        {count}
      </span>
    </div>
  );
}
