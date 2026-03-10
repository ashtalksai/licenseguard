"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X, Plus, UserPlus, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { StatCard } from "@/components/dashboard/stat-card";
import { StaffCard } from "@/components/dashboard/staff-card";
import { AddStaffDialog } from "@/components/dashboard/add-staff-dialog";
import { mockStaff } from "@/lib/mock-data";
import { useStaffStore } from "@/lib/use-staff-store";
import { getDaysUntil } from "@/lib/utils";
import { toast } from "sonner";

export default function DashboardPage() {
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const {
    staff: userStaff,
    isLoaded,
    isEmpty,
    isDemoMode,
    setIsDemoMode,
    addStaffMember,
  } = useStaffStore();

  // Use mock data only in demo mode, otherwise use localStorage staff
  const displayStaff = isDemoMode ? mockStaff : userStaff;

  // Calculate stats from display data
  const allCredentials = displayStaff.flatMap((s) => s.credentials);
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

  if (!isLoaded) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <AddStaffDialog
        open={addDialogOpen}
        onOpenChange={setAddDialogOpen}
        onAdd={(member) => {
          addStaffMember(member);
          toast.success(`${member.name} added to your team`);
        }}
      />

      {/* Demo Mode Banner */}
      <AnimatePresence>
        {isDemoMode && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-blue-50 border-b border-blue-200 rounded-xl px-4 sm:px-6 py-3 mb-4 flex items-center gap-3"
          >
            <Shield className="h-5 w-5 text-blue-600 shrink-0" />
            <p className="text-sm font-medium text-blue-800 flex-1">
              📋 Demo Mode — Showing sample data. <button onClick={() => setIsDemoMode(false)} className="underline font-semibold hover:text-blue-900">Exit demo</button> to manage your own team.
            </p>
            <button
              onClick={() => setIsDemoMode(false)}
              className="text-blue-600 hover:text-blue-800"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Alert Banner */}
      <AnimatePresence>
        {totalExpiring > 0 && !bannerDismissed && !isEmpty && (
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

      {/* Empty State for New Users */}
      {isEmpty ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center text-center py-20 px-6"
        >
          <div className="w-20 h-20 bg-brand-navy/10 rounded-2xl flex items-center justify-center mb-6">
            <Users className="h-10 w-10 text-brand-navy" />
          </div>
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-3">
            Welcome to LicenseGuard
          </h2>
          <p className="text-muted-foreground max-w-md mb-2">
            Start tracking credentials for your medical staff. Add your first team member to begin monitoring license expirations and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button
              onClick={() => setAddDialogOpen(true)}
              className="bg-brand-navy hover:bg-brand-navy/90 text-white rounded-xl px-6 py-3 text-base"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Add Your First Staff Member
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsDemoMode(true)}
              className="border-brand-navy/30 text-brand-navy hover:bg-brand-navy/5 rounded-xl px-6 py-3 text-base"
            >
              <Shield className="h-5 w-5 mr-2" />
              View Demo Data
            </Button>
          </div>
        </motion.div>
      ) : (
        <>
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
              onClick={() => setAddDialogOpen(true)}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Staff Member
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayStaff.map((staff, i) => (
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
        </>
      )}
    </DashboardLayout>
  );
}
