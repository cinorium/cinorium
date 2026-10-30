"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, ArrowLeft, Activity, ShieldCheck } from "lucide-react";

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/signals/admin/auth", { method: "DELETE" });
      router.push("/admin/signals/login");
      router.refresh();
    } catch {
      router.push("/admin/signals/login");
    }
  };

  return (
    <header className="w-full bg-white border-b-2 border-black sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/signals"
            className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-gray-900"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400 text-black font-extrabold text-sm border-2 border-black">
              CS
            </span>
            <span>Cinorium Signals</span>
          </Link>
          <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live System
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-black px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <span>View Website</span>
          </Link>

          <button
            onClick={handleLogout}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-900 px-3 py-1.5 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 transition-colors"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Lock Session</span>
          </button>
        </div>
      </div>
    </header>
  );
}

