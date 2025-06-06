"use client";

import React from "react";

/**
 * Main layout component for component pages.
 * Provides responsive sidebar layout with main content area.
 */
interface ComponentLayoutProps {
  /** Sidebar content */
  sidebar: React.ReactNode;
  /** Main content */
  children: React.ReactNode;
}

const ComponentLayout: React.FC<ComponentLayoutProps> = ({
  sidebar,
  children,
}) => {
  return (
    <div className="bg-bones-snow flex min-h-screen">
      {/* Sidebar */}
      <aside className="border-bones-gainsboro bg-bones-white hidden border-r lg:fixed lg:inset-y-0 lg:flex lg:w-80 lg:flex-col">
        <div className="flex flex-1 flex-col overflow-y-auto p-6">
          {sidebar}
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:pl-80">
        <main className="flex-1">
          <div className="px-6 lg:px-8">{children}</div>
        </main>
      </div>

      {/* Mobile sidebar overlay - can be implemented later if needed */}
      {/* For now, we'll keep it simple without mobile menu */}
    </div>
  );
};

export default ComponentLayout;
