import React from "react";
import { Sidebar } from "./_components/sidebar";
import { AIUsage } from "./_components/ai-usage";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar (plus large) */}
      <div className="w-80 hidden md:block fixed h-screen bg-gray-900 shadow-2xl">
        <Sidebar />
        <AIUsage />
      </div>

      {/* Contenu principal */}
      <div className="flex-1 md:ml-80 bg-gray-50 min-h-screen p-8">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;