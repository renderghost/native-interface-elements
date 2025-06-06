"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentCategory, ComponentMetadata } from "../../types";
import { components } from "../../constants/components";

/**
 * Sidebar component that displays navigation menu based on component data.
 * Features collapsible sections and active state highlighting.
 */
const Sidebar = () => {
  const pathname = usePathname();
  // Get components using the constants import
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

  // Track which categories are expanded (default all expanded on desktop, only active on mobile)
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});

  // Initialize expanded state based on the active route
  useEffect(() => {
    const initialExpanded: Record<string, boolean> = {};

    // Expand all categories on initial load for desktop
    Object.keys(ComponentCategory).forEach((category) => {
      initialExpanded[category] = true;
    });

    setExpandedCategories(initialExpanded);
  }, []);

  // Toggle a category's expanded state
  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Group components by subcategory within each category
  const groupBySubcategory = (components: ComponentMetadata[]) => {
    const grouped: Record<string, ComponentMetadata[]> = {};

    components.forEach((component) => {
      const subcategory = component.subcategory || "Other";
      if (!grouped[subcategory]) {
        grouped[subcategory] = [];
      }
      grouped[subcategory].push(component);
    });

    return grouped;
  };

  // Check if a component is currently active
  const isActive = (slug: string) => {
    return pathname === `/components/${slug}`;
  };

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

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-6">
          {Object.entries(componentsByCategory).map(
            ([categoryKey, components]) => {
              const category = categoryKey as unknown as ComponentCategory;
              const bySubcategory = groupBySubcategory(components || []);

              return (
                <li key={categoryKey} className="mb-2">
                  {/* Category Header (Clickable) */}
                  <button
                    onClick={() => toggleCategory(categoryKey)}
                    className="text-bones-dimgray border-bones-gainsboro mb-2 flex w-full items-center justify-between border-b pb-2 text-left font-semibold"
                  >
                    <span>{category}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 transition-transform ${expandedCategories[categoryKey] ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Components List (Collapsible) */}
                  {expandedCategories[categoryKey] && (
                    <div className="ml-2">
                      {Object.entries(bySubcategory).map(
                        ([subcategory, subcategoryComponents]) => (
                          <div key={subcategory} className="mb-4">
                            {/* Only show subcategory if it's not 'Other' */}
                            {subcategory !== "Other" && (
                              <h3 className="text-bones-gray mb-2 text-sm font-medium">
                                {subcategory}
                              </h3>
                            )}

                            <ul className="ml-2 space-y-1">
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
                        ),
                      )}
                    </div>
                  )}
                </li>
              );
            },
          )}
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
