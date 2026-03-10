"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { StatCard } from "@/components/dashboard/stat-card";
import { StaffCard } from "@/components/dashboard/staff-card";
import { mockStaff } from "@/lib/mock-data";
import { getDaysUntil, getStatusColor } from "@/lib/utils";
import Link from "next/link";

export default function DashboardPage() {
  const [bannerDismissed, setBannerDismissed] = useState(false);

  // Calculate stats from mock data
  const allCredentials = mockStaff.flatMap((s) => s.credentials);
  const expired = allCredentials.filter(
    (c) => getDaysUntil(c.expiryDate) <= 0
  ).length;
  const expiringSoon = allCredentials.filter((c) => {
    const days = getDaysUntil(c.expiryDate);
    return days > 0 && days <= 30;
  }).length;
  const compliant = allCredentials.filter(
    (c) => getDaysUntil(c.expiryDate) > 90
  ).length;

  const totalExpiring = expired + expiringSoon;

  return (
    <DashboardLayout>
      {/* Alert Banner */}
      <AnimatePresence>
        {totalExpiring > 0 && !bannerDismissed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-status-amber-bg border-b border-amber-300 rounded-xl px-4 sm:px-6 py-3 mb-6 flex items-center gap-3"
          >
            <AlertTriangle className="h-5 w-5 text-status-amber shrink-0" />
            <p className="text-sm font-medium text-amber-800 flex-1">
              ⚠️ {totalExpiring} credential{totalExpiring !== 1 ? "s" : ""}{" "}
              {expired > 0 ? "expired or " : ""}expiring within 30 days —{" "}
              <span className="underline cursor-pointer">Review now</span>
            </p>
            <button
              onClick={() => setBannerDismissed(true)}
              className="text-amber-600 hover:text-amber-800"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Title */}
      <h1 className="font-display font-bold text-2xl text-brand-navy mb-6">
        Team Compliance
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Expired" count={expired} status="red" />
        <StatCard label="Expiring Soon" count={expiringSoon} status="amber" />
        <StatCard label="Compliant" count={compliant} status="green" />
      </div>

      {/* Staff Grid */}
      <div className="flex items-center justify-between mb-4" id="staff">
        <h2 className="font-display font-bold text-lg text-brand-navy">
          Team Members
        </h2>
        <Button
          variant="outline"
          className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-xl text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Staff Member
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockStaff.map((staff, i) => (
          <motion.div
            key={staff.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          >
            <StaffCard staff={staff} />
          </motion.div>
        ))}
      </div>
    </DashboardLayout>
  );
}
