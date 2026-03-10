"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Bell,
  Settings,
  HelpCircle,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard#staff", icon: Users, label: "Staff Members" },
  { href: "/dashboard/settings/alerts", icon: Bell, label: "Alert Settings" },
  { href: "/dashboard/settings", icon: Settings, label: "Practice Settings" },
  { href: "/contact", icon: HelpCircle, label: "Help & Support" },
];

interface SidebarProps {
  className?: string;
  onNavClick?: () => void;
}

export function Sidebar({ className, onNavClick }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex flex-col bg-brand-navy text-white h-full",
        className
      )}
    >
      {/* Logo */}
      <div className="p-6 pb-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-placeholder.png"
            alt="LicenseGuard"
            width={28}
            height={28}
            className="brightness-0 invert"
          />
          <span className="font-display font-bold text-lg">LicenseGuard</span>
        </Link>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavClick}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors relative",
                isActive
                  ? "bg-white/10 text-accent"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              )}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent rounded-r" />
              )}
              <item.icon className="h-4.5 w-4.5 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Upgrade Prompt */}
      <div className="p-3 mt-auto">
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <p className="text-sm font-medium text-white mb-1">
            Unlock reports & CME
          </p>
          <p className="text-xs text-gray-400 mb-3">
            Upgrade to Professional — $49/mo
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center text-xs text-accent hover:text-accent-hover font-medium"
          >
            Upgrade <ArrowUpRight className="h-3 w-3 ml-1" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
