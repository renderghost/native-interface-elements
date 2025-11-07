import { ComponentMetadata, ComponentsByCategory, ComponentCategory } from "../../types";
import { ComponentFilter } from "./filtering";

/**
 * Handles component grouping functionality.
 * Provides various grouping capabilities for component metadata.
 */
export class ComponentGrouping {
  /**
   * Groups components by category.
   *
   * @param {ComponentMetadata[]} components - Array of components to group.
   * @returns {ComponentsByCategory} Object with categories as keys and component arrays as values.
   */
  static groupByCategory(components: ComponentMetadata[]): ComponentsByCategory {
    return components.reduce<ComponentsByCategory>((acc, component) => {
      const category = component.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category]?.push(component);
      return acc;
    }, {});
  }

  /**
   * Groups components by subcategory within a category.
   *
   * @param {ComponentMetadata[]} components - Array of components to group.
   * @param {ComponentCategory} category - Category to group within.
   * @returns {Object} Object with subcategories as keys and component arrays as values.
   */
  static groupBySubcategory(
    components: ComponentMetadata[],
    category?: ComponentCategory,
  ): { [subcategory: string]: ComponentMetadata[] } {
    const filtered = category
      ? ComponentFilter.filter(components, { category })
      : components;

    return filtered.reduce<{ [subcategory: string]: ComponentMetadata[] }>(
      (acc, component) => {
        const subcategory = component.subcategory || "Other";
        if (!acc[subcategory]) {
          acc[subcategory] = [];
        }
        acc[subcategory].push(component);
        return acc;
      },
      {},
    );
  }

  /**
   * Gets unique categories from all components.
   *
   * @param {ComponentMetadata[]} components - Array of components to analyze.
   * @returns {ComponentCategory[]} Array of unique categories.
   */
  static getCategories(components: ComponentMetadata[]): ComponentCategory[] {
    const categories = new Set(components.map((c) => c.category));
    return Array.from(categories);
  }

  /**
   * Gets unique subcategories, optionally filtered by category.
   *
   * @param {ComponentMetadata[]} components - Array of components to analyze.
   * @param {ComponentCategory} category - Optional category to filter subcategories.
   * @returns {string[]} Array of unique subcategories.
   */
  static getSubcategories(
    components: ComponentMetadata[],
    category?: ComponentCategory,
  ): string[] {
    const filtered = category
      ? ComponentFilter.filter(components, { category })
      : components;
    const subcategories = new Set(
      filtered
        .map((c) => c.subcategory)
        .filter((sub): sub is string => sub !== undefined),
    );
    return Array.from(subcategories);
  }
}

