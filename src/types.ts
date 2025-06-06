/**
 * Shared TypeScript types for the Native Interface Elements project.
 *
 * This file serves as the central source of truth for all data structures
 * used throughout the application, ensuring type consistency and reducing
 * duplication.
 */

import React from "react";

// =============================================================================
// COMPONENT CATEGORY TYPES
// =============================================================================

/**
 * Enum defining all available component categories.
 * Used for grouping components in the sidebar and ensuring type safety.
 */
export enum ComponentCategory {
  FORM = "Form Inputs",
  INTERACTIVE = "Interactive Elements",
  TEXT = "Text Elements",
  MEDIA = "Media Elements",
  TABLE = "Table Elements",
  LIST = "List Elements",
  EMBEDDED = "Embedded Content",
}

/**
 * Type for mapping category names to their display values.
 */
export type CategoryDisplayName = {
  [K in ComponentCategory]: string;
};

// =============================================================================
// COMPONENT DATA TYPES
// =============================================================================

/**
 * Base interface for component properties.
 * Contains the minimal data required to represent a component.
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
  /** Code example showing how to use the component */
  codeExample: string;
}

/**
 * Pure component metadata without React elements.
 * Contains only serializable data for component information.
 */
export interface ComponentMetadata {
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
}

/**
 * Extended interface for component data with React elements.
 * Includes additional properties for rendering and interaction.
 */
export interface ComponentData extends ComponentMetadata {
  /** React element to render as a live example */
  element: React.ReactNode;
}

// =============================================================================
// COMPONENT ORGANIZATION TYPES
// =============================================================================

/**
 * Type for grouping components by category.
 * Maps category enum values to arrays of component metadata.
 */
export type ComponentsByCategory = {
  [K in ComponentCategory]?: ComponentMetadata[];
};

/**
 * Type for grouping components by subcategory.
 * Maps subcategory names to arrays of component metadata.
 */
export type ComponentsBySubcategory = {
  [subcategory: string]: ComponentMetadata[];
};

/**
 * Type for nested categorization (category -> subcategory -> components).
 */
export type ComponentHierarchy = {
  [K in ComponentCategory]?: ComponentsBySubcategory;
};

// =============================================================================
// COMPONENT FILTERING AND SEARCH TYPES
// =============================================================================

/**
 * Options for filtering and searching components.
 */
export interface ComponentFilterOptions {
  /** Search term to filter components by title, description, or category */
  searchTerm?: string;
  /** Filter by specific category */
  category?: ComponentCategory;
  /** Filter by specific subcategory */
  subcategory?: string;
  /** Limit the number of results */
  limit?: number;
}

/**
 * Result structure for component operations with rendering capabilities.
 */
export interface ComponentResult {
  /** The component metadata */
  metadata: ComponentMetadata;
  /** Function to render the component example */
  renderExample: () => HTMLElement;
  /** Function to render the code example */
  renderCodeExample: () => HTMLElement;
}

/**
 * Pagination information for component listings.
 */
export interface PaginationInfo {
  /** Current page number (1-based) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Total number of items */
  totalCount: number;
  /** Whether there's a next page */
  hasNext: boolean;
  /** Whether there's a previous page */
  hasPrevious: boolean;
}

/**
 * Paginated component results.
 */
export interface PaginatedComponentResults {
  /** Array of component results for the current page */
  components: ComponentResult[];
  /** Pagination information */
  pagination: PaginationInfo;
}

// =============================================================================
// UI STATE TYPES
// =============================================================================

/**
 * State for sidebar navigation.
 */
export interface SidebarState {
  /** Whether the sidebar is open (mobile) */
  isOpen: boolean;
  /** Which categories are expanded */
  expandedCategories: Record<string, boolean>;
  /** Currently active component slug */
  activeComponent?: string;
}

/**
 * Theme preferences for the application.
 */
export interface ThemePreferences {
  /** Color scheme preference */
  colorScheme: "light" | "dark" | "auto";
  /** Reduced motion preference */
  reduceMotion: boolean;
  /** High contrast preference */
  highContrast: boolean;
}

/**
 * User preferences for the application.
 */
export interface UserPreferences {
  /** Theme settings */
  theme: ThemePreferences;
  /** Recently viewed components */
  recentlyViewed: string[];
  /** Bookmarked components */
  bookmarks: string[];
}

// =============================================================================
// NAVIGATION TYPES
// =============================================================================

/**
 * Navigation item for menus and links.
 */
export interface NavigationItem {
  /** Display label */
  label: string;
  /** URL or route */
  href: string;
  /** Whether this item is currently active */
  isActive?: boolean;
  /** Optional icon name */
  icon?: string;
  /** Child navigation items */
  children?: NavigationItem[];
}

/**
 * Breadcrumb item for navigation trails.
 */
export interface BreadcrumbItem {
  /** Display label */
  label: string;
  /** URL or route (optional for current page) */
  href?: string;
  /** Whether this is the current page */
  isCurrent?: boolean;
}

// =============================================================================
// API AND DATA FETCHING TYPES
// =============================================================================

/**
 * Generic API response wrapper.
 */
export interface ApiResponse<T> {
  /** Response data */
  data: T;
  /** Success status */
  success: boolean;
  /** Error message if applicable */
  error?: string;
  /** Additional metadata */
  meta?: Record<string, unknown>;
}

/**
 * Loading state for async operations.
 */
export interface LoadingState {
  /** Whether an operation is in progress */
  isLoading: boolean;
  /** Error message if operation failed */
  error?: string;
  /** Additional loading context */
  context?: string;
}

// =============================================================================
// FORM AND INPUT TYPES
// =============================================================================

/**
 * Base props for form input components.
 */
export interface BaseInputProps {
  /** Input name attribute */
  name: string;
  /** Input label */
  label?: string;
  /** Input placeholder */
  placeholder?: string;
  /** Whether the input is required */
  required?: boolean;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Error message to display */
  error?: string;
  /** Help text to display */
  helpText?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Props for search input components.
 */
export interface SearchInputProps extends BaseInputProps {
  /** Search value */
  value: string;
  /** Change handler */
  onChange: (value: string) => void;
  /** Submit handler */
  onSubmit?: (value: string) => void;
  /** Clear handler */
  onClear?: () => void;
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

/**
 * Make all properties of T optional recursively.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Extract the keys of T that have values assignable to U.
 */
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

/**
 * Create a type with only specified keys from T.
 */
export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Create a type with all keys from T except specified keys.
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Type for CSS class name values.
 */
export type ClassName = string | undefined | null | false;

/**
 * Type for component children prop.
 */
export type Children = React.ReactNode;

// =============================================================================
// DEPRECATED TYPES (for backward compatibility)
// =============================================================================

/**
 * @deprecated Use ComponentsByCategory instead
 */
export type ComponentsByType = ComponentsByCategory;

/**
 * @deprecated Use ComponentMetadata instead
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ComponentInfo extends ComponentMetadata {}

// =============================================================================
// TYPE GUARDS
// =============================================================================

/**
 * Type guard to check if a value is a valid ComponentCategory.
 */
export function isComponentCategory(value: string): value is ComponentCategory {
  return Object.values(ComponentCategory).includes(value as ComponentCategory);
}

/**
 * Type guard to check if an object is ComponentMetadata.
 */
export function isComponentMetadata(obj: unknown): obj is ComponentMetadata {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as ComponentMetadata).id === "string" &&
    typeof (obj as ComponentMetadata).slug === "string" &&
    typeof (obj as ComponentMetadata).title === "string" &&
    isComponentCategory((obj as ComponentMetadata).category) &&
    typeof (obj as ComponentMetadata).description === "string" &&
    typeof (obj as ComponentMetadata).codeExample === "string"
  );
}

/**
 * Type guard to check if an object is ComponentData.
 */
export function isComponentData(obj: unknown): obj is ComponentData {
  return (
    isComponentMetadata(obj) &&
    "element" in obj &&
    React.isValidElement((obj as ComponentData).element)
  );
}
