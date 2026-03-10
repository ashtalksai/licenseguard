"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockPractice } from "@/lib/mock-data";
import { toast } from "sonner";

export default function SettingsPage() {
  const [practiceName, setPracticeName] = useState(mockPractice.name);

  return (
    <DashboardLayout>
      <h1 className="font-display font-bold text-2xl text-brand-navy mb-6">
        Practice Settings
      </h1>

      <Tabs defaultValue="practice" className="max-w-2xl">
        <TabsList className="mb-6">
          <TabsTrigger value="practice">Practice Info</TabsTrigger>
          <TabsTrigger value="billing">Plan & Billing</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        <TabsContent value="practice">
          <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5 space-y-5">
            <div>
              <Label htmlFor="name">Practice Name</Label>
              <Input
                id="name"
                value={practiceName}
                onChange={(e) => setPracticeName(e.target.value)}
                className="mt-1.5 rounded-xl max-w-md"
              />
            </div>
            <div>
              <Label>Specialty</Label>
              <select className="mt-1.5 w-full max-w-md h-10 rounded-xl border border-input bg-background px-3 text-sm">
                <option>Family Medicine</option>
                <option>Dermatology</option>
                <option>Urgent Care</option>
                <option>Physical Therapy</option>
                <option>Behavioral Health</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <Label>State</Label>
              <select className="mt-1.5 w-full max-w-md h-10 rounded-xl border border-input bg-background px-3 text-sm">
                <option>Wisconsin</option>
                <option>California</option>
                <option>Texas</option>
                <option>New York</option>
                <option>Florida</option>
              </select>
            </div>
            <Button
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-xl"
              onClick={() => toast.success("Settings saved!")}
            >
              Save Changes
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="billing">
          <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-accent text-accent-foreground text-sm px-3 py-1 capitalize">
                  {mockPractice.plan}
                </Badge>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Staff used</span>
                  <span className="font-medium text-brand-navy">
                    5 of 20
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full"
                    style={{ width: "25%" }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Next billing date: April 10, 2026
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-brand-navy mb-2">
                Need more staff slots?
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Upgrade to Agency for 50+ staff members and multi-practice support.
              </p>
              <Button variant="outline" className="rounded-xl">
                Upgrade Plan
              </Button>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <button className="text-destructive hover:underline">
                  Cancel Plan
                </button>
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="account">
          <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5 space-y-6">
            <div>
              <Label>Email</Label>
              <Input
                value="admin@westsidefm.com"
                disabled
                className="mt-1.5 rounded-xl max-w-md bg-gray-50"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Contact support to change your email address.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-brand-navy mb-3">
                Change Password
              </h3>
              <div className="space-y-3 max-w-md">
                <div>
                  <Label>Current Password</Label>
                  <Input type="password" className="mt-1.5 rounded-xl" />
                </div>
                <div>
                  <Label>New Password</Label>
                  <Input type="password" className="mt-1.5 rounded-xl" />
                </div>
                <Button
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-xl"
                  onClick={() => toast.success("Password updated!")}
                >
                  Update Password
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t border-destructive/20">
              <h3 className="font-semibold text-destructive mb-2">
                Danger Zone
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Permanently delete your account and all data. This action cannot
                be undone.
              </p>
              <Button
                variant="outline"
                className="border-destructive text-destructive hover:bg-destructive hover:text-white rounded-xl"
              >
                Delete Account
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
