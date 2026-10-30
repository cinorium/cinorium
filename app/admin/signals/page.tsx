import { redirect } from "next/navigation";
import { isAuthenticatedAdmin } from "@/lib/signals/auth";
import { signalsStorage } from "@/lib/signals/storage";
import AdminHeader from "./components/AdminHeader";
import LeadsDashboard from "./components/LeadsDashboard";

export const metadata = {
  title: "Signals Admin | Lead Management Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function SignalsAdminPage() {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    redirect("/admin/signals/login");
  }

  let leads: any[] = [];
  let summary = {
    totalLeads: 0,
    newLeads: 0,
    qualifiedLeads: 0,
    convertedLeads: 0,
    leadsByInterest: {},
    leadsByCampaign: {},
    leadsByStatus: { NEW: 0, CONTACTED: 0, QUALIFIED: 0, CONVERTED: 0, LOST: 0 },
    totalSessions: 0,
    totalImpressions: 0,
    totalDismissals: 0,
    conversionRate: 0,
  };
  let diagnostics = undefined;

  try {
    leads = await signalsStorage.getLeads();
    summary = await signalsStorage.getAnalyticsSummary();
    diagnostics = await signalsStorage.getDiagnostics();
  } catch (err) {
    console.error("[Signals Admin] Failed to fetch leads/summary:", err);
  }

  return (
    <div className="min-h-screen bg-amber-50/20 text-gray-900 pb-20">
      <AdminHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Title row */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-1">
                Cinorium Signals Mini CRM
              </span>
              <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                Visitor Signals &amp; Lead Inbox
              </h1>
            </div>
            <p className="text-xs text-gray-500 max-w-sm">
              First-party behavioral leads captured via non-intrusive contextual prompts and voluntary submissions.
            </p>
          </div>
        </div>

        <LeadsDashboard initialLeads={leads} summary={summary} diagnostics={diagnostics} />
      </main>
    </div>
  );
}

