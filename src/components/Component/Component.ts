import { getComponentMetadataBySlug } from "../../constants/components";
import { ComponentCategory, ComponentMetadata } from "../../types";

/**
 * Renders a single component display with its metadata and example.
 *
 * @param slug - The component slug to display
 * @returns Component metadata and rendered example or null if not found
 */
export const renderComponent = (slug: string) => {
  const metadata = getComponentMetadataBySlug(slug);

  if (!metadata) {
    return null;
  }

  return {
    metadata,
    renderExample: () => {
      // Create a container div with the component's HTML
      const container = document.createElement("div");
      container.className =
        "bones-card p-4 bg-bones-white border border-bones-gainsboro rounded-lg";
      container.innerHTML = metadata.codeExample;
      return container;
    },
    renderCodeExample: () => {
      // Create a pre element to display the code
      const codeContainer = document.createElement("pre");
      codeContainer.className =
        "bg-bones-ghostwhite p-4 rounded border text-sm font-mono overflow-x-auto";

      const codeElement = document.createElement("code");
      codeElement.textContent = metadata.codeExample;
      codeContainer.appendChild(codeElement);

      return codeContainer;
    },
  };
};

/**
 * Gets component metadata by slug.
 *
 * @param slug - The component slug to look up
 * @returns ComponentMetadata or undefined if not found
 */
export const getComponent = (slug: string): ComponentMetadata | undefined => {
  return getComponentMetadataBySlug(slug);
};

/**
 * Gets the display category name for a component category.
 *
 * @param category - The ComponentCategory enum value
 * @returns The display string for the category
 */
export const getCategoryDisplayName = (category: ComponentCategory): string => {
  return category;
};

/**
 * Formats component description for display.
 *
 * @param description - The component description
 * @returns Formatted description
 */
export const formatDescription = (description: string): string => {
  return description;
};

// Types are re-exported from the shared types file
export type { ComponentMetadata };
export { ComponentCategory };
