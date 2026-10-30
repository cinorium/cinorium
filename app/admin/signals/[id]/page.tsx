import { redirect, notFound } from "next/navigation";
import { isAuthenticatedAdmin } from "@/lib/signals/auth";
import { signalsStorage } from "@/lib/signals/storage";
import AdminHeader from "../components/AdminHeader";
import LeadDetailView from "./LeadDetailView";

export const metadata = {
  title: "Lead Details | Cinorium Signals Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    redirect("/admin/signals/login");
  }

  const { id } = await params;
  const lead = await signalsStorage.getLeadById(id);
  if (!lead) {
    notFound();
  }

  const notes = await signalsStorage.getLeadNotes(id);

  return (
    <div className="min-h-screen bg-amber-50/20 text-gray-900 pb-20">
      <AdminHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <LeadDetailView initialLead={lead} initialNotes={notes} />
      </main>
    </div>
  );
}

