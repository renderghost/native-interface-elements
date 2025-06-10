"use client";

import React, { useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentCategory, ComponentMetadata } from "../../types";
import { components } from "../../constants/components";

/**
 * Sidebar component that displays navigation menu with grouped links sorted A-Z.
 */
const Sidebar = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const scrollPositionRef = useRef<number>(0);

  // Memoize the grouped and sorted component data to prevent re-computation
  const { componentsByCategory, sortedCategories, groupBySubcategory } = useMemo(() => {
    const componentMetadata = components;
    
    // Group components by category
    const componentsByCategory = componentMetadata.reduce<
      Record<string, ComponentMetadata[]>
    >((acc, component) => {
      const category = component.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(component);
      return acc;
    }, {});

    // Sort categories A-Z
    const sortedCategories = Object.keys(componentsByCategory).sort();

    // Group and sort components by subcategory within each category
    const groupBySubcategory = (components: ComponentMetadata[]) => {
      const grouped: Record<string, ComponentMetadata[]> = {};

      components.forEach((component) => {
        const subcategory = component.subcategory || "Other";
        if (!grouped[subcategory]) {
          grouped[subcategory] = [];
        }
        grouped[subcategory].push(component);
      });

      // Sort components within each subcategory A-Z
      Object.keys(grouped).forEach((subcategory) => {
        grouped[subcategory].sort((a, b) => a.title.localeCompare(b.title));
      });

      return grouped;
    };

    return { componentsByCategory, sortedCategories, groupBySubcategory };
  }, []); // Empty dependency array since components data is static

  // Check if a component is currently active
  const isActive = (slug: string) => {
    return pathname === `/components/${slug}`;
  };

  // Preserve scroll position when navigating
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Save scroll position on scroll
    const handleScroll = () => {
      scrollPositionRef.current = nav.scrollTop;
    };

    nav.addEventListener('scroll', handleScroll);
    
    // Restore scroll position after navigation
    const timeoutId = setTimeout(() => {
      nav.scrollTop = scrollPositionRef.current;
    }, 0);

    return () => {
      nav.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return (
    <div className="flex h-full flex-col">
      <header className="mb-8">
        <Link href="/" className="block">
          <h1 className="text-bones-black mb-2 text-2xl font-bold">
            Native Interface Elements
          </h1>
        </Link>
        <p className="text-bones-slategray text-sm">
          A comprehensive guide to native HTML interface elements rendered in
          your browser.
        </p>
      </header>

      <nav ref={navRef} className="flex-1 overflow-y-auto">
        <ul className="space-y-6">
          {sortedCategories.map((categoryKey) => {
            const components = componentsByCategory[categoryKey];
            const bySubcategory = groupBySubcategory(components || []);
            const sortedSubcategories = Object.keys(bySubcategory).sort();

            return (
              <li key={categoryKey} className="mb-6">
                {/* Category Header */}
                <h2 className="text-bones-dimgray border-bones-gainsboro mb-3 border-b pb-2 text-sm font-semibold uppercase tracking-wide">
                  {categoryKey}
                </h2>

                {/* Components List */}
                <div className="space-y-4">
                  {sortedSubcategories.map((subcategory) => {
                    const subcategoryComponents = bySubcategory[subcategory];
                    return (
                      <div key={subcategory}>
                        {/* Subcategory Header (only if not 'Other') */}
                        {subcategory !== "Other" && (
                          <h3 className="text-bones-gray mb-2 text-xs font-medium uppercase tracking-wide">
                            {subcategory}
                          </h3>
                        )}

                        {/* Component Links */}
                        <ul className="space-y-1">
                          {subcategoryComponents.map((component) => (
                            <li key={component.slug}>
                              <Link
                                href={`/components/${component.slug}`}
                                className={`block rounded px-2 py-1 text-sm transition-colors ${
                                  isActive(component.slug)
                                    ? "bg-bones-lightsteelblue text-bones-midnightblue font-medium"
                                    : "text-bones-slategray hover:text-bones-midnightblue hover:bg-bones-aliceblue"
                                }`}
                              >
                                {component.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      <footer className="border-bones-gainsboro text-bones-gray mt-auto border-t pt-4 text-xs">
        <p>© 2025 Native Interface Elements</p>
        <p className="mt-1">
          <Link href="/" className="text-bones-blue hover:underline">
            Home
          </Link>{" "}
          •{" "}
          <Link href="/about" className="text-bones-blue hover:underline">
            About
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
