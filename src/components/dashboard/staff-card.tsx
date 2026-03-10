"use client";

import Link from "next/link";
import { cn, getDaysUntil, getStatusColor, getStatusLabel, formatDate } from "@/lib/utils";
import { StatusDot, StatusBadge } from "@/components/custom/status-dot";
import type { StaffMember } from "@/lib/types";

interface StaffCardProps {
  staff: StaffMember;
}

export function StaffCard({ staff }: StaffCardProps) {
  // Determine worst credential status
  const credentialStatuses = staff.credentials.map((c) => ({
    days: getDaysUntil(c.expiryDate),
    status: getStatusColor(getDaysUntil(c.expiryDate)),
    credential: c,
  }));

  const statusPriority = { red: 0, orange: 1, amber: 2, green: 3, gray: 4 };
  const worstStatus = credentialStatuses.reduce(
    (worst, curr) =>
      statusPriority[curr.status] < statusPriority[worst.status]
        ? curr
        : worst,
    credentialStatuses[0]
  );

  const nextExpiring = credentialStatuses
    .filter((c) => c.days > 0)
    .sort((a, b) => a.days - b.days)[0];

  const expiredCount = credentialStatuses.filter((c) => c.days <= 0).length;
  const expiringCount = credentialStatuses.filter(
    (c) => c.days > 0 && c.days <= 90
  ).length;

  const borderColors = {
    red: "border-l-status-red",
    orange: "border-l-status-orange",
    amber: "border-l-status-amber",
    green: "border-l-status-green",
    gray: "border-l-status-gray",
  };

  const bgColors = {
    red: "bg-red-50/50",
    orange: "bg-orange-50/30",
    amber: "bg-amber-50/30",
    green: "bg-white",
    gray: "bg-white",
  };

  const summaryText =
    expiredCount > 0
      ? `${expiredCount} Expired`
      : expiringCount > 0
      ? `${expiringCount} Expiring Soon`
      : "All Good";

  return (
    <Link href={`/dashboard/staff/${staff.id}`}>
      <div
        className={cn(
          "rounded-xl p-5 shadow-sm ring-1 ring-black/5 border-l-4 cursor-pointer hover:shadow-md hover:scale-[1.01] transition-all",
          borderColors[worstStatus.status],
          bgColors[worstStatus.status]
        )}
      >
        {/* Name + Role */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-bold text-brand-navy">{staff.name}</h3>
            <span className="inline-block bg-brand-navy/10 text-brand-navy text-xs font-medium rounded-full px-2 py-0.5 mt-1">
              {staff.role}
            </span>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 mb-2">
          <StatusDot status={worstStatus.status} size="md" />
          <span
            className={cn(
              "text-sm font-medium",
              worstStatus.status === "red"
                ? "text-status-red"
                : worstStatus.status === "orange"
                ? "text-status-orange"
                : worstStatus.status === "amber"
                ? "text-status-amber"
                : "text-status-green"
            )}
          >
            {summaryText}
          </span>
        </div>

        {/* Next expiring */}
        {nextExpiring && (
          <p className="text-xs text-muted-foreground">
            Next: {nextExpiring.credential.label.split(" — ")[0]} —{" "}
            {formatDate(nextExpiring.credential.expiryDate)}
          </p>
        )}

        {/* Credential count */}
        <p className="text-xs text-gray-400 mt-1">
          {staff.credentials.length} credentials tracked
        </p>
      </div>
    </Link>
  );
}
