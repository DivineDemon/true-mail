"use client";

import Navbar from "@/components/dashboard/navbar";
import { GlobalProvider } from "@/components/providers/global-provider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalProvider>
      <div className="h-screen w-full overflow-hidden">
        <Navbar />
        <div className="h-[calc(100vh-64px)] w-full">{children}</div>
      </div>
    </GlobalProvider>
  );
}
