// types/Component.ts
// This file defines the types for component data and categories

import React from 'react';

/**
 * Enum of all available component categories.
 * Used for grouping components in the sidebar and ensuring type safety.
 */
export enum ComponentCategory {
  FORM = 'Form Inputs',
  INTERACTIVE = 'Interactive Elements',
  TEXT = 'Text Elements',
  MEDIA = 'Media Elements',
  TABLE = 'Table Elements',
  LIST = 'List Elements',
  EMBEDDED = 'Embedded Content',
}

/**
 * Base interface for component properties.
 * Used for backward compatibility.
 */
export interface ComponentProps {
  /** Unique identifier for the component */
  id: string;
  /** Display title of the component */
  title: string;
  /** Category name (string version for backward compatibility) */
  category: string;
  /** Description of the component's purpose and usage */
  description: string;
  /** Code example showing how to use the component (renamed to match current usage) */
  codeExample: string;
}

/**
 * Extended interface for component data.
 * Includes additional properties for routing and organization.
 */
export interface ComponentData {
  /** Unique identifier for the component */
  id: string;
  /** URL-friendly identifier for routing */
  slug: string;
  /** Display title of the component */
  title: string;
  /** Component category using the enum for type safety */
  category: ComponentCategory;
  /** Optional subcategory for further organization */
  subcategory?: string;
  /** Description of the component's purpose and usage */
  description: string;
  /** Code example showing how to use the component */
  codeExample: string;
  /** React element to render as a live example */
  element: React.ReactNode;
}

/**
 * Type for grouping components by category.
 * Maps category enum values to arrays of component data.
 */
export type ComponentsByCategory = {
  [key in ComponentCategory]?: ComponentData[];
};
