import { ComponentMetadata, ComponentResult, ComponentCategory } from "../../types";
import { ComponentFilter } from "./filtering";
import { ComponentUtils } from "./utils";

/**
 * Handles component searching functionality.
 * Provides search capabilities with filtering and result mapping.
 */
export class ComponentSearch {
  /**
   * Searches components by term and returns results with rendering capabilities.
   *
   * @param {ComponentMetadata[]} components - Array of components to search.
   * @param {string} searchTerm - Term to search for.
   * @param {number} limit - Maximum number of results to return.
   * @returns {ComponentResult[]} Array of component results with rendering functions.
   */
  static search(
    components: ComponentMetadata[],
    searchTerm: string,
    limit?: number,
  ): ComponentResult[] {
    const filtered = ComponentFilter.filter(components, { searchTerm, limit });
    return ComponentUtils.mapToResults(filtered);
  }

  /**
   * Gets components by category with optional search.
   *
   * @param {ComponentMetadata[]} components - Array of components to search.
   * @param {ComponentCategory} category - Component category to filter by.
   * @param {string} searchTerm - Optional search term within the category.
   * @returns {ComponentResult[]} Array of component results.
   */
  static searchByCategory(
    components: ComponentMetadata[],
    category: ComponentCategory,
    searchTerm?: string,
  ): ComponentResult[] {
    const filtered = ComponentFilter.filter(components, { category, searchTerm });
    return ComponentUtils.mapToResults(filtered);
  }

  /**
   * Gets components by subcategory.
   *
   * @param {ComponentMetadata[]} components - Array of components to search.
   * @param {string} subcategory - Subcategory to filter by.
   * @returns {ComponentResult[]} Array of component results.
   */
  static searchBySubcategory(
    components: ComponentMetadata[],
    subcategory: string,
  ): ComponentResult[] {
    const filtered = ComponentFilter.filter(components, { subcategory });
    return ComponentUtils.mapToResults(filtered);
  }

  /**
   * Gets a single component by slug.
   *
   * @param {ComponentMetadata[]} components - Array of components to search.
   * @param {string} slug - Component slug to find.
   * @returns {ComponentResult | null} Component result or null if not found.
   */
  static findBySlug(
    components: ComponentMetadata[],
    slug: string,
  ): ComponentResult | null {
    const component = components.find((c) => c.slug === slug);
    if (!component) {
      return null;
    }

    const results = ComponentUtils.mapToResults([component]);
    return results[0] || null;
  }
}

