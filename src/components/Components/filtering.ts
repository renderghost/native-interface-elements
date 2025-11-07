import { ComponentMetadata, ComponentFilterOptions, ComponentCategory } from "../../types";

/**
 * Filters components based on search criteria.
 * Provides various filtering capabilities for component metadata.
 */
export class ComponentFilter {
  /**
   * Filters components based on search criteria.
   *
   * @param {ComponentMetadata[]} components - Array of components to filter.
   * @param {ComponentFilterOptions} options - Filter and search options.
   * @returns {ComponentMetadata[]} Filtered array of component metadata.
   */
  static filter(
    components: ComponentMetadata[],
    options: ComponentFilterOptions = {},
  ): ComponentMetadata[] {
    let filtered = [...components];

    // Apply search term filter
    if (options.searchTerm) {
      filtered = this.filterBySearchTerm(filtered, options.searchTerm);
    }

    // Apply category filter
    if (options.category) {
      filtered = this.filterByCategory(filtered, options.category);
    }

    // Apply subcategory filter
    if (options.subcategory) {
      filtered = this.filterBySubcategory(filtered, options.subcategory);
    }

    // Apply limit
    if (options.limit && options.limit > 0) {
      filtered = filtered.slice(0, options.limit);
    }

    return filtered;
  }

  /**
   * Filters components by search term across multiple fields.
   *
   * @param {ComponentMetadata[]} components - Components to filter.
   * @param {string} searchTerm - Term to search for.
   * @returns {ComponentMetadata[]} Filtered components.
   */
  private static filterBySearchTerm(
    components: ComponentMetadata[],
    searchTerm: string,
  ): ComponentMetadata[] {
    const searchLower = searchTerm.toLowerCase();
    return components.filter(
      (component) =>
        component.title.toLowerCase().includes(searchLower) ||
        component.description.toLowerCase().includes(searchLower) ||
        component.category.toLowerCase().includes(searchLower) ||
        (component.subcategory?.toLowerCase().includes(searchLower) ?? false),
    );
  }

  /**
   * Filters components by category.
   *
   * @param {ComponentMetadata[]} components - Components to filter.
   * @param {ComponentCategory} category - Category to filter by.
   * @returns {ComponentMetadata[]} Filtered components.
   */
  private static filterByCategory(
    components: ComponentMetadata[],
    category: ComponentCategory,
  ): ComponentMetadata[] {
    return components.filter((component) => component.category === category);
  }

  /**
   * Filters components by subcategory.
   *
   * @param {ComponentMetadata[]} components - Components to filter.
   * @param {string} subcategory - Subcategory to filter by.
   * @returns {ComponentMetadata[]} Filtered components.
   */
  private static filterBySubcategory(
    components: ComponentMetadata[],
    subcategory: string,
  ): ComponentMetadata[] {
    return components.filter(
      (component) => component.subcategory === subcategory,
    );
  }
}

