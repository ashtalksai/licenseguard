import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStatusColor(daysUntilExpiry: number | null): "green" | "amber" | "orange" | "red" | "gray" {
  if (daysUntilExpiry === null) return "gray"
  if (daysUntilExpiry <= 0) return "red"
  if (daysUntilExpiry <= 7) return "red"
  if (daysUntilExpiry <= 30) return "orange"
  if (daysUntilExpiry <= 90) return "amber"
  return "green"
}

export function getStatusLabel(daysUntilExpiry: number | null): string {
  if (daysUntilExpiry === null) return "No expiry set"
  if (daysUntilExpiry <= 0) return "Expired"
  if (daysUntilExpiry === 1) return "Expires tomorrow"
  if (daysUntilExpiry <= 7) return `Expires in ${daysUntilExpiry} days`
  if (daysUntilExpiry <= 30) return `Expiring in ${daysUntilExpiry} days`
  if (daysUntilExpiry <= 90) return `Expiring in ${daysUntilExpiry} days`
  return "Compliant"
}

export function getDaysUntil(date: string): number {
  const now = new Date()
  const expiry = new Date(date)
  const diff = expiry.getTime() - now.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}
