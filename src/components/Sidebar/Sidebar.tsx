'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentCategory, ComponentData } from '../../types/Component';
import { getComponentsByCategory } from '../../constants/components';

/**
 * Sidebar component that displays navigation menu based on component data.
 * Features collapsible sections and active state highlighting.
 */
const Sidebar = () => {
  const pathname = usePathname();
  const componentsByCategory = getComponentsByCategory();
  
  // Track which categories are expanded (default all expanded on desktop, only active on mobile)
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  
  // Initialize expanded state based on the active route
  useEffect(() => {
    const initialExpanded: Record<string, boolean> = {};
    
    // Expand all categories on initial load for desktop
    Object.keys(ComponentCategory).forEach(category => {
      initialExpanded[category] = true;
    });
    
    setExpandedCategories(initialExpanded);
  }, []);
  
  // Toggle a category's expanded state
  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };
  
  // Group components by subcategory within each category
  const groupBySubcategory = (components: ComponentData[]) => {
    const grouped: Record<string, ComponentData[]> = {};
    
    components.forEach(component => {
      const subcategory = component.subcategory || 'Other';
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
    <div className="h-full flex flex-col">
      <header className='mb-8'>
        <Link href="/" className="block">
          <h1 className='text-2xl font-bold mb-2 text-bones-black'>
            Native Interface Elements
          </h1>
        </Link>
        <p className='text-sm text-bones-slategray'>
          A comprehensive guide to native HTML interface elements rendered in your browser.
        </p>
      </header>

      <nav className="flex-1 overflow-y-auto">
        <ul className='space-y-6'>
          {Object.entries(componentsByCategory).map(([categoryKey, components]) => {
            const category = categoryKey as unknown as ComponentCategory;
            const bySubcategory = groupBySubcategory(components || []);
            
            return (
              <li key={categoryKey} className="mb-2">
                {/* Category Header (Clickable) */}
                <button 
                  onClick={() => toggleCategory(categoryKey)}
                  className="w-full flex items-center justify-between text-left font-semibold text-bones-dimgray border-b border-bones-gainsboro pb-2 mb-2"
                >
                  <span>{category}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform ${expandedCategories[categoryKey] ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Components List (Collapsible) */}
                {expandedCategories[categoryKey] && (
                  <div className="ml-2">
                    {Object.entries(bySubcategory).map(([subcategory, subcategoryComponents]) => (
                      <div key={subcategory} className="mb-4">
                        {/* Only show subcategory if it's not 'Other' */}
                        {subcategory !== 'Other' && (
                          <h3 className="text-sm font-medium text-bones-gray mb-2">{subcategory}</h3>
                        )}
                        
                        <ul className="space-y-1 ml-2">
                          {subcategoryComponents.map(component => (
                            <li key={component.slug}>
                              <Link
                                href={`/components/${component.slug}`}
                                className={`block py-1 px-2 rounded text-sm transition-colors ${
                                  isActive(component.slug)
                                    ? 'bg-bones-lightsteelblue text-bones-midnightblue font-medium'
                                    : 'text-bones-slategray hover:text-bones-midnightblue hover:bg-bones-aliceblue'
                                }`}
                              >
                                {component.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      
      <footer className="mt-auto pt-4 border-t border-bones-gainsboro text-xs text-bones-gray">
        <p>© 2025 Native Interface Elements</p>
        <p className="mt-1">
          <Link href="/" className="text-bones-blue hover:underline">Home</Link> • <Link href="/about" className="text-bones-blue hover:underline">About</Link>
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
