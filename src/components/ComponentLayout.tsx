'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

interface ComponentLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

/**
 * ComponentLayout implements a one-third, two-third split layout.
 * It handles responsive behavior, collapsing to a stacked layout on mobile.
 */
const ComponentLayout: React.FC<ComponentLayoutProps> = ({ sidebar, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar when route changes on mobile
  React.useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden w-full py-2 px-4 bg-bones-gray text-bones-white flex items-center justify-between"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span>Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform ${sidebarOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar - 1/3 on desktop, full width collapsible on mobile */}
        <aside
          className={`
            ${sidebarOpen ? 'block' : 'hidden'} 
            md:block
            w-full md:w-1/3 lg:w-1/4 xl:w-1/5
            bg-bones-whitesmoke
            border-r border-bones-gainsboro
            overflow-y-auto
          `}
        >
          <div className="sticky top-0 p-4 md:p-6 h-screen overflow-y-auto">
            {sidebar}
          </div>
        </aside>

        {/* Main Content - 2/3 on desktop, full width on mobile */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto bg-bones-white min-h-screen">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ComponentLayout;

