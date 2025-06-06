/**
 * Components module exports.
 * Provides access to the Components class and utility functions.
 */
export {
  Components,
  components,
  getAllComponents,
  filterComponents,
  searchComponents,
  getComponentsByCategory,
  getComponentsBySubcategory,
  getComponentBySlug,
  groupByCategory,
  groupBySubcategory,
  getCategories,
  getSubcategories,
  getCount,
  getComponentsPaginated,
} from "./Components";

export type { ComponentMetadata } from "./Components";

// Import and re-export types from main types file
export type {
  ComponentFilterOptions,
  ComponentResult,
  PaginatedComponentResults,
  ComponentsByCategory,
} from "../../types";

export { ComponentCategory } from "./Components";
