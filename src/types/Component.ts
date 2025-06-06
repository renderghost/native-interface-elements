/**
 * Component-related types for the Native Interface Elements project.
 *
 * This file re-exports all component types from the shared types file
 * for backward compatibility. New code should import directly from '../types'.
 *
 * @deprecated Import directly from '../types' instead
 */

// Re-export all component-related types from the shared types file
export {
  ComponentCategory,
  // Type guards
  isComponentCategory,
  isComponentMetadata,
  isComponentData,
} from "../types";

export type {
  ComponentProps,
  ComponentMetadata,
  ComponentData,
  ComponentsByCategory,
  ComponentsBySubcategory,
  ComponentHierarchy,
  ComponentFilterOptions,
  ComponentResult,
  PaginationInfo,
  PaginatedComponentResults,
  // Deprecated types
  ComponentsByType,
  ComponentInfo,
} from "../types";

// Also re-export types
export type { CategoryDisplayName } from "../types";
