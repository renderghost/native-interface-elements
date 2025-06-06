import { componentMetadata } from "../../constants/components";
import {
  ComponentCategory,
  ComponentMetadata,
  ComponentFilterOptions,
  ComponentResult,
  ComponentsByCategory,
  PaginatedComponentResults,
} from "../../types";
import { renderComponent } from "../Component/Component";

// Types are now imported from the shared types file

/**
 * Container for all components with filtering, searching, and mapping capabilities.
 * Provides a unified interface for working with multiple components.
 */
export class Components {
  private components: ComponentMetadata[];

  constructor() {
    this.components = componentMetadata;
  }

  /**
   * Gets all available components.
   *
   * @returns Array of all component metadata
   */
  getAllComponents(): ComponentMetadata[] {
    return [...this.components];
  }

  /**
   * Filters components based on search criteria.
   *
   * @param options - Filter and search options
   * @returns Filtered array of component metadata
   */
  filterComponents(options: ComponentFilterOptions = {}): ComponentMetadata[] {
    let filtered = [...this.components];

    // Apply search term filter
    if (options.searchTerm) {
      const searchLower = options.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (component) =>
          component.title.toLowerCase().includes(searchLower) ||
          component.description.toLowerCase().includes(searchLower) ||
          component.category.toLowerCase().includes(searchLower) ||
          (component.subcategory?.toLowerCase().includes(searchLower) ?? false),
      );
    }

    // Apply category filter
    if (options.category) {
      filtered = filtered.filter(
        (component) => component.category === options.category,
      );
    }

    // Apply subcategory filter
    if (options.subcategory) {
      filtered = filtered.filter(
        (component) => component.subcategory === options.subcategory,
      );
    }

    // Apply limit
    if (options.limit && options.limit > 0) {
      filtered = filtered.slice(0, options.limit);
    }

    return filtered;
  }

  /**
   * Searches components by term and returns results with rendering capabilities.
   *
   * @param searchTerm - Term to search for
   * @param limit - Maximum number of results to return
   * @returns Array of component results with rendering functions
   */
  searchComponents(searchTerm: string, limit?: number): ComponentResult[] {
    const filtered = this.filterComponents({ searchTerm, limit });
    return this.mapToResults(filtered);
  }

  /**
   * Gets components by category with optional search.
   *
   * @param category - Component category to filter by
   * @param searchTerm - Optional search term within the category
   * @returns Array of component results
   */
  getComponentsByCategory(
    category: ComponentCategory,
    searchTerm?: string,
  ): ComponentResult[] {
    const filtered = this.filterComponents({ category, searchTerm });
    return this.mapToResults(filtered);
  }

  /**
   * Gets components by subcategory.
   *
   * @param subcategory - Subcategory to filter by
   * @returns Array of component results
   */
  getComponentsBySubcategory(subcategory: string): ComponentResult[] {
    const filtered = this.filterComponents({ subcategory });
    return this.mapToResults(filtered);
  }

  /**
   * Gets a single component by slug.
   *
   * @param slug - Component slug to find
   * @returns Component result or null if not found
   */
  getComponentBySlug(slug: string): ComponentResult | null {
    const component = this.components.find((c) => c.slug === slug);
    if (!component) {
      return null;
    }

    const rendered = renderComponent(slug);
    if (!rendered) {
      return null;
    }

    return {
      metadata: component,
      renderExample: rendered.renderExample,
      renderCodeExample: rendered.renderCodeExample,
    };
  }

  /**
   * Groups components by category.
   *
   * @returns Object with categories as keys and component arrays as values
   */
  groupByCategory(): ComponentsByCategory {
    return this.components.reduce<ComponentsByCategory>((acc, component) => {
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
   * @param category - Category to group within
   * @returns Object with subcategories as keys and component arrays as values
   */
  groupBySubcategory(category?: ComponentCategory): {
    [subcategory: string]: ComponentMetadata[];
  } {
    const filtered = category
      ? this.filterComponents({ category })
      : this.components;

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
   * @returns Array of unique categories
   */
  getCategories(): ComponentCategory[] {
    const categories = new Set(this.components.map((c) => c.category));
    return Array.from(categories);
  }

  /**
   * Gets unique subcategories, optionally filtered by category.
   *
   * @param category - Optional category to filter subcategories
   * @returns Array of unique subcategories
   */
  getSubcategories(category?: ComponentCategory): string[] {
    const filtered = category
      ? this.filterComponents({ category })
      : this.components;
    const subcategories = new Set(
      filtered
        .map((c) => c.subcategory)
        .filter((sub): sub is string => sub !== undefined),
    );
    return Array.from(subcategories);
  }

  /**
   * Maps component metadata to results with rendering capabilities.
   *
   * @param components - Array of component metadata
   * @returns Array of component results
   */
  private mapToResults(components: ComponentMetadata[]): ComponentResult[] {
    return components.map((component) => {
      const rendered = renderComponent(component.slug);
      if (!rendered) {
        // Fallback if renderComponent fails
        return {
          metadata: component,
          renderExample: () => {
            const div = document.createElement("div");
            div.innerHTML = component.codeExample;
            return div;
          },
          renderCodeExample: () => {
            const pre = document.createElement("pre");
            const code = document.createElement("code");
            code.textContent = component.codeExample;
            pre.appendChild(code);
            return pre;
          },
        };
      }

      return {
        metadata: component,
        renderExample: rendered.renderExample,
        renderCodeExample: rendered.renderCodeExample,
      };
    });
  }

  /**
   * Gets the total count of components.
   *
   * @returns Total number of components
   */
  getCount(): number {
    return this.components.length;
  }

  /**
   * Gets components with pagination support.
   *
   * @param page - Page number (1-based)
   * @param pageSize - Number of components per page
   * @param options - Optional filter options
   * @returns Object with components and pagination info
   */
  getComponentsPaginated(
    page: number = 1,
    pageSize: number = 10,
    options: ComponentFilterOptions = {},
  ): PaginatedComponentResults {
    const filtered = this.filterComponents(options);
    const totalCount = filtered.length;
    const totalPages = Math.ceil(totalCount / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageComponents = filtered.slice(startIndex, endIndex);

    return {
      components: this.mapToResults(pageComponents),
      pagination: {
        totalCount,
        totalPages,
        currentPage: page,
        hasNext: page < totalPages,
        hasPrevious: page > 1,
      },
    };
  }
}

/**
 * Default instance of the Components class for easy access.
 */
export const components = new Components();

/**
 * Utility functions for quick access to common operations.
 */
export const {
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
} = components;

// Re-export types for convenience
export type { ComponentMetadata };
export { ComponentCategory };
