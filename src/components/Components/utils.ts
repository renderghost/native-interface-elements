import { ComponentMetadata, ComponentResult } from "../../types";
import { renderComponent } from "../Component";

/**
 * Utility functions for component operations.
 * Provides common utilities for component metadata manipulation.
 */
export class ComponentUtils {
  /**
   * Maps component metadata to results with rendering capabilities.
   *
   * @param {ComponentMetadata[]} components - Array of component metadata.
   * @returns {ComponentResult[]} Array of component results.
   */
  static mapToResults(components: ComponentMetadata[]): ComponentResult[] {
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
   * @param {ComponentMetadata[]} components - Array of components to count.
   * @returns {number} Total number of components.
   */
  static getCount(components: ComponentMetadata[]): number {
    return components.length;
  }

  /**
   * Validates component metadata structure.
   *
   * @param {ComponentMetadata} component - Component to validate.
   * @returns {boolean} True if component is valid.
   */
  static isValidComponent(component: ComponentMetadata): boolean {
    return !!(
      component &&
      component.id &&
      component.title &&
      component.slug &&
      component.category &&
      component.description &&
      component.codeExample
    );
  }

  /**
   * Sorts components by a specified field.
   *
   * @param {ComponentMetadata[]} components - Array of components to sort.
   * @param {keyof ComponentMetadata} field - Field to sort by.
   * @param {"asc" | "desc"} direction - Sort direction.
   * @returns {ComponentMetadata[]} Sorted array of components.
   */
  static sortComponents(
    components: ComponentMetadata[],
    field: keyof ComponentMetadata,
    direction: "asc" | "desc" = "asc",
  ): ComponentMetadata[] {
    return [...components].sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];

      if (aValue === undefined || bValue === undefined) {
        return 0;
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        const comparison = aValue.localeCompare(bValue);
        return direction === "asc" ? comparison : -comparison;
      }

      if (aValue < bValue) return direction === "asc" ? -1 : 1;
      if (aValue > bValue) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }
}

