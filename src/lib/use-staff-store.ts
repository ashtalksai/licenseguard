"use client";

import { useState, useEffect, useCallback } from "react";
import type { StaffMember, Credential } from "./types";

const STORAGE_KEY = "licenseguard_staff";
const DEMO_DISMISSED_KEY = "licenseguard_demo_dismissed";

export function useStaffStore() {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setStaff(JSON.parse(stored));
      } catch {
        setStaff([]);
      }
    }
    setIsLoaded(true);
  }, []);

  const persist = useCallback((data: StaffMember[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setStaff(data);
  }, []);

  const addStaffMember = useCallback(
    (member: Omit<StaffMember, "id" | "credentials">) => {
      const newMember: StaffMember = {
        ...member,
        id: `staff-${Date.now()}`,
        credentials: [],
      };
      const updated = [...staff, newMember];
      persist(updated);
      return newMember;
    },
    [staff, persist]
  );

  const removeStaffMember = useCallback(
    (id: string) => {
      persist(staff.filter((s) => s.id !== id));
    },
    [staff, persist]
  );

  const addCredential = useCallback(
    (staffId: string, credential: Omit<Credential, "id" | "staffId">) => {
      const updated = staff.map((s) => {
        if (s.id !== staffId) return s;
        return {
          ...s,
          credentials: [
            ...s.credentials,
            { ...credential, id: `cred-${Date.now()}`, staffId },
          ],
        };
      });
      persist(updated);
    },
    [staff, persist]
  );

  const isEmpty = isLoaded && staff.length === 0 && !isDemoMode;

  return {
    staff,
    isLoaded,
    isEmpty,
    isDemoMode,
    setIsDemoMode,
    addStaffMember,
    removeStaffMember,
    addCredential,
  };
}
