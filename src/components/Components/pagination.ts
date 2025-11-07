import {
  ComponentMetadata,
  ComponentFilterOptions,
  PaginatedComponentResults,
} from "../../types";
import { ComponentFilter } from "./filtering";
import { ComponentUtils } from "./utils";

/**
 * Handles component pagination functionality.
 * Provides pagination capabilities with filtering support.
 */
export class ComponentPagination {
  /**
   * Gets components with pagination support.
   *
   * @param {ComponentMetadata[]} components - Array of components to paginate.
   * @param {number} page - Page number (1-based).
   * @param {number} pageSize - Number of components per page.
   * @param {ComponentFilterOptions} options - Optional filter options.
   * @returns {PaginatedComponentResults} Object with components and pagination info.
   */
  static paginate(
    components: ComponentMetadata[],
    page: number = 1,
    pageSize: number = 10,
    options: ComponentFilterOptions = {},
  ): PaginatedComponentResults {
    const filtered = ComponentFilter.filter(components, options);
    const totalCount = filtered.length;
    const totalPages = Math.ceil(totalCount / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageComponents = filtered.slice(startIndex, endIndex);

    return {
      components: ComponentUtils.mapToResults(pageComponents),
      pagination: {
        totalCount,
        totalPages,
        currentPage: page,
        hasNext: page < totalPages,
        hasPrevious: page > 1,
      },
    };
  }

  /**
   * Calculates pagination metadata without returning components.
   *
   * @param {number} totalCount - Total number of items.
   * @param {number} page - Current page number (1-based).
   * @param {number} pageSize - Number of items per page.
   * @returns {Object} Pagination metadata.
   */
  static getPaginationInfo(
    totalCount: number,
    page: number,
    pageSize: number,
  ): {
    totalCount: number;
    totalPages: number;
    currentPage: number;
    hasNext: boolean;
    hasPrevious: boolean;
    startIndex: number;
    endIndex: number;
  } {
    const totalPages = Math.ceil(totalCount / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalCount);

    return {
      totalCount,
      totalPages,
      currentPage: page,
      hasNext: page < totalPages,
      hasPrevious: page > 1,
      startIndex,
      endIndex,
    };
  }
}

