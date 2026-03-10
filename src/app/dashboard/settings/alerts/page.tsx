"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { mockAlertLogs } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { toast } from "sonner";

export default function AlertSettingsPage() {
  const [alerts90, setAlerts90] = useState(true);
  const [alerts30, setAlerts30] = useState(true);
  const [alerts7, setAlerts7] = useState(true);
  const [staffCC, setStaffCC] = useState(false);

  return (
    <DashboardLayout>
      <h1 className="font-display font-bold text-2xl text-brand-navy mb-6">
        Alert Settings
      </h1>

      <div className="max-w-2xl space-y-6">
        {/* Alert Recipients */}
        <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="font-display font-bold text-lg text-brand-navy mb-4">
            Alert Recipients
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-brand-navy">
                  Primary Email
                </p>
                <p className="text-xs text-muted-foreground">
                  admin@westsidefm.com (always receives alerts)
                </p>
              </div>
              <span className="text-xs text-muted-foreground">🔒 Required</span>
            </div>
            <div>
              <Label className="text-sm">Additional CC Emails</Label>
              <Input
                placeholder="manager@clinic.com, billing@clinic.com"
                className="mt-1.5 rounded-xl"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Comma-separated email addresses
              </p>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-brand-navy">
                  CC Staff Members
                </p>
                <p className="text-xs text-muted-foreground">
                  Staff members receive alerts about their own credentials
                </p>
              </div>
              <Switch checked={staffCC} onCheckedChange={setStaffCC} />
            </div>
          </div>
        </div>

        {/* Alert Timing */}
        <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="font-display font-bold text-lg text-brand-navy mb-4">
            Alert Timing
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-brand-navy">
                  90 days before expiry
                </p>
                <p className="text-xs text-muted-foreground">
                  Early heads-up for planning
                </p>
              </div>
              <Switch checked={alerts90} onCheckedChange={setAlerts90} />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-brand-navy">
                  30 days before expiry
                </p>
                <p className="text-xs text-muted-foreground">
                  Time to start the renewal process
                </p>
              </div>
              <Switch checked={alerts30} onCheckedChange={setAlerts30} />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-brand-navy">
                  7 days before expiry
                </p>
                <p className="text-xs text-muted-foreground">
                  Urgent reminder — act now
                </p>
              </div>
              <Switch checked={alerts7} onCheckedChange={setAlerts7} />
            </div>
          </div>
        </div>

        {/* Test Alert */}
        <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="font-display font-bold text-lg text-brand-navy mb-2">
            Test Alert
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Send a test alert email to verify your notification setup.
          </p>
          <Button
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-xl"
            onClick={() => toast.success("Test alert sent to admin@westsidefm.com")}
          >
            Send Test Alert
          </Button>
        </div>

        {/* Alert Log */}
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-black/5 overflow-hidden">
          <div className="p-6 pb-0">
            <h2 className="font-display font-bold text-lg text-brand-navy mb-4">
              Alert Log
            </h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Credential
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Staff
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Type
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Sent
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {mockAlertLogs.map((alert) => (
                <tr
                  key={alert.id}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-6 py-3 font-medium text-brand-navy">
                    {alert.credentialLabel}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {alert.staffName}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {alert.type.replace("_", "-")}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {formatDate(alert.sentAt)}
                  </td>
                  <td className="px-4 py-3">
                    {alert.delivered ? (
                      <span className="text-status-green">✓</span>
                    ) : (
                      <span className="text-status-red">✗</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
