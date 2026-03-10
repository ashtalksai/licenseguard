"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Edit, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { StatusDot, StatusBadge } from "@/components/custom/status-dot";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { mockStaff, mockAlertLogs } from "@/lib/mock-data";
import {
  getDaysUntil,
  getStatusColor,
  getStatusLabel,
  formatDate,
  cn,
} from "@/lib/utils";
import { CREDENTIAL_TYPE_LABELS } from "@/lib/types";

export default function StaffDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const staff = mockStaff.find((s) => s.id === id);

  if (!staff) {
    return (
      <DashboardLayout>
        <div className="text-center py-20">
          <p className="text-muted-foreground">Staff member not found.</p>
          <Link href="/dashboard" className="text-accent hover:underline mt-2 inline-block">
            ← Back to Dashboard
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  const initials = staff.name
    .split(" ")
    .filter((n) => !n.startsWith("Dr"))
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const credentialStatuses = staff.credentials.map((c) => {
    const days = getDaysUntil(c.expiryDate);
    return { ...c, days, status: getStatusColor(days) };
  });

  const sortedCredentials = [...credentialStatuses].sort(
    (a, b) => a.days - b.days
  );

  const worstStatus = sortedCredentials.reduce(
    (worst, curr) => {
      const priority = { red: 0, orange: 1, amber: 2, green: 3, gray: 4 };
      return priority[curr.status] < priority[worst.status] ? curr : worst;
    },
    sortedCredentials[0]
  );

  const expiredCount = credentialStatuses.filter((c) => c.days <= 0).length;
  const expiringCount = credentialStatuses.filter(
    (c) => c.days > 0 && c.days <= 90
  ).length;

  const summaryText =
    expiredCount > 0
      ? `${expiredCount} Expired`
      : expiringCount > 0
      ? `${expiringCount} Expiring Soon`
      : "All Compliant";

  const staffAlerts = mockAlertLogs.filter((a) =>
    staff.credentials.some((c) => c.id === a.credentialId)
  );

  const borderColors: Record<string, string> = {
    red: "border-l-status-red",
    orange: "border-l-status-orange",
    amber: "border-l-status-amber",
    green: "border-l-status-green",
    gray: "border-l-status-gray",
  };

  const badgeColors: Record<string, string> = {
    red: "bg-red-100 text-red-800",
    orange: "bg-orange-100 text-orange-800",
    amber: "bg-amber-100 text-amber-800",
    green: "bg-green-100 text-green-800",
    gray: "bg-gray-100 text-gray-600",
  };

  return (
    <DashboardLayout>
      {/* Back link */}
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-brand-navy mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Dashboard
      </Link>

      {/* Staff Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5 mb-8"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-brand-navy text-white text-xl font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="font-display font-bold text-2xl text-brand-navy">
                {staff.name}
              </h1>
              <span className="bg-brand-navy/10 text-brand-navy text-xs font-medium rounded-full px-2.5 py-0.5">
                {staff.role}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              <StatusDot status={worstStatus.status} />
              <span
                className={cn(
                  "text-sm font-medium",
                  worstStatus.status === "red"
                    ? "text-status-red"
                    : worstStatus.status === "orange" || worstStatus.status === "amber"
                    ? "text-status-amber"
                    : "text-status-green"
                )}
              >
                {summaryText}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{staff.email}</p>
          </div>

          <Button variant="outline" size="sm" className="rounded-xl">
            <Edit className="h-3.5 w-3.5 mr-1" />
            Edit
          </Button>
        </div>
      </motion.div>

      {/* Credentials */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-bold text-lg text-brand-navy">
          Credentials
        </h2>
        <Button
          variant="outline"
          className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-xl text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Credential
        </Button>
      </div>

      <div className="space-y-3 mb-10">
        {sortedCredentials.map((cred, i) => (
          <motion.div
            key={cred.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={cn(
              "bg-white rounded-lg p-4 shadow-sm ring-1 ring-black/5 border-l-4",
              borderColors[cred.status]
            )}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <Shield className="h-5 w-5 text-brand-navy shrink-0" />
                <div className="min-w-0">
                  <p className="font-semibold text-brand-navy text-sm truncate">
                    {cred.label}
                  </p>
                  {cred.licenseNumber && (
                    <p className="text-xs text-muted-foreground">
                      {cred.licenseNumber}
                      {cred.issuingState && ` · ${cred.issuingState}`}
                    </p>
                  )}
                  {cred.issuingOrg && (
                    <p className="text-xs text-muted-foreground">
                      {cred.issuingOrg}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right">
                  <p className="text-sm font-medium text-brand-navy">
                    {formatDate(cred.expiryDate)}
                  </p>
                  <span
                    className={cn(
                      "inline-block text-xs font-medium rounded-full px-2 py-0.5 mt-0.5",
                      badgeColors[cred.status]
                    )}
                  >
                    {cred.days <= 0
                      ? `EXPIRED ${formatDate(cred.expiryDate)}`
                      : `Expiring in ${cred.days} days`}
                  </span>
                </div>

                <div className="flex gap-1">
                  <button className="p-1.5 text-muted-foreground hover:text-brand-navy transition-colors rounded-md hover:bg-gray-100">
                    <Edit className="h-3.5 w-3.5" />
                  </button>
                  <button className="p-1.5 text-muted-foreground hover:text-destructive transition-colors rounded-md hover:bg-red-50">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Alert History */}
      {staffAlerts.length > 0 && (
        <>
          <h2 className="font-display font-bold text-lg text-brand-navy mb-4">
            Alert History
          </h2>
          <div className="bg-white rounded-xl shadow-sm ring-1 ring-black/5 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Credential
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Type
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Date Sent
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {staffAlerts.map((alert) => (
                  <tr key={alert.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium text-brand-navy">
                      {alert.credentialLabel}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {alert.type.replace("_", "-")} alert
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {formatDate(alert.sentAt)}
                    </td>
                    <td className="px-4 py-3">
                      {alert.delivered ? (
                        <span className="text-status-green">✓ Delivered</span>
                      ) : (
                        <span className="text-status-red">✗ Failed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </DashboardLayout>
  );
}
