import { Metadata } from "next";
import Link from "next/link";
import ComponentLayout from "@/components/ComponentLayout";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ComponentCategory } from "@/types/Component";
import { components } from "@/constants/components";

// Define page metadata
export const metadata: Metadata = {
  title: "Native Interface Elements - HTML Components Reference",
  description:
    "A comprehensive guide to native HTML interface elements rendered in your browser.",
  openGraph: {
    title: "Native Interface Elements",
    description:
      "A comprehensive guide to native HTML interface elements rendered in your browser.",
    type: "website",
  },
};

// Featured components to show on homepage
const featuredComponents = [
  "button-element",
  "checkbox-input",
  "text-input",
  "progress",
  "details-summary",
  "time",
];

export default function Home() {
  // Get featured components from the component metadata
  const featured = components
    .filter((component) => featuredComponents.includes(component.id))
    .slice(0, featuredComponents.length);

  return (
    <ComponentLayout sidebar={<Sidebar />}>
      <div className="space-y-12 py-8">
        {/* Hero section */}
        <section className="border-bones-gainsboro border-b pb-8 text-center">
          <h1 className="text-bones-black mb-4 text-4xl font-bold">
            Native Interface Elements
          </h1>
          <p className="text-bones-slategray mx-auto max-w-2xl text-xl">
            A comprehensive reference for all native HTML interface elements,
            showing how they render in your current browser and operating
            system.
          </p>
        </section>

        {/* About section */}
        <section className="mx-auto max-w-3xl">
          <h2 className="text-bones-black mb-4 text-2xl font-bold">
            About This Project
          </h2>
          <div className="prose text-bones-dimgray">
            <p>
              Native Interface Elements showcases HTML&rsquo;s built-in form
              controls and elements without custom styling or JavaScript
              enhancements. Use this as a reference to:
            </p>

            <ul className="my-4 list-disc space-y-2 pl-6">
              <li>
                See how native elements render across different browsers and
                platforms
              </li>
              <li>Reference proper semantic markup for accessibility</li>
              <li>Compare browser implementation differences</li>
              <li>
                Learn the default behaviors of HTML elements before applying
                custom styles
              </li>
            </ul>

            <p>
              Browse components by category using the sidebar, or explore some
              featured components below to get started.
            </p>
          </div>
        </section>

        {/* Category cards */}
        <section>
          <h2 className="text-bones-black mb-6 text-2xl font-bold">
            Element Categories
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.values(ComponentCategory).map((category) => (
              <div
                key={category}
                className="border-bones-gainsboro rounded-lg border p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="text-bones-black mb-2 text-lg font-semibold">
                  {category}
                </h3>
                <p className="text-bones-slategray mb-4 text-sm">
                  {getCategoryDescription(category)}
                </p>
                <Link
                  href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-bones-blue text-sm font-medium hover:underline"
                >
                  Browse {category} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Featured components */}
        <section>
          <h2 className="text-bones-black mb-6 text-2xl font-bold">
            Featured Components
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((component) => (
              <Link
                key={component.id}
                href={`/components/${component.slug}`}
                className="border-bones-gainsboro hover:bg-bones-ghostwhite rounded-lg border p-6 transition-colors"
              >
                <h3 className="text-bones-black mb-2 text-lg font-semibold">
                  {component.title}
                </h3>
                <p className="text-bones-slategray mb-4 line-clamp-2 text-sm">
                  {component.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="bg-bones-gainsboro rounded-md px-2 py-1 text-xs">
                    {component.category}
                  </span>
                  <span className="text-bones-blue text-sm">
                    View details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Getting started guide */}
        <section className="bg-bones-aliceblue border-bones-lightsteelblue rounded-lg border p-6">
          <h2 className="text-bones-midnightblue mb-4 text-2xl font-bold">
            Getting Started
          </h2>
          <p className="text-bones-slategray mb-4">
            To get the most out of this reference guide:
          </p>

          <ol className="text-bones-slategray list-decimal space-y-2 pl-6">
            <li>
              Use the <strong>sidebar navigation</strong> to browse elements by
              category
            </li>
            <li>
              View <strong>live examples</strong> of each element as it renders
              in your current browser
            </li>
            <li>
              Copy the <strong>code examples</strong> to use in your own
              projects
            </li>
            <li>
              Compare how elements appear across different browsers and devices
            </li>
          </ol>

          <div className="mt-6">
            <Link
              href="/components/text-input"
              className="bg-bones-midnightblue text-bones-white hover:bg-opacity-90 inline-block rounded px-4 py-2 transition-colors"
            >
              Start Exploring →
            </Link>
          </div>
        </section>
      </div>
    </ComponentLayout>
  );
}

// Helper function to get descriptions for each category
function getCategoryDescription(category: ComponentCategory): string {
  switch (category) {
    case ComponentCategory.FORM:
      return "Input elements for collecting user data in forms, including text fields, checkboxes, and buttons.";
    case ComponentCategory.INTERACTIVE:
      return "Elements that respond to user interactions like details/summary and dialog components.";
    case ComponentCategory.TEXT:
      return "Semantic elements for displaying and formatting text content.";
    case ComponentCategory.MEDIA:
      return "Elements for displaying images, audio, and video content.";
    case ComponentCategory.TABLE:
      return "Elements for creating structured data tables with rows and columns.";
    case ComponentCategory.LIST:
      return "Elements for creating ordered, unordered, and description lists.";
    case ComponentCategory.EMBEDDED:
      return "Elements for embedding external content like iframes and objects.";
    default:
      return "Collection of related HTML interface elements.";
  }
}
