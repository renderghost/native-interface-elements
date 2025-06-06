"use client";

import React from "react";
import { ComponentMetadata } from "../../types";

/**
 * Component display that renders component examples and code.
 * Shows the live component, description, and code example.
 */
interface ComponentDisplayProps {
  /** Component metadata to display */
  component: ComponentMetadata;
}

const ComponentDisplay: React.FC<ComponentDisplayProps> = ({ component }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="border-bones-gainsboro border-b pb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-bones-black mb-2 text-3xl font-bold">
              {component.title}
            </h1>
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-bones-lightsteelblue text-bones-midnightblue rounded-full px-3 py-1 text-sm font-medium">
                {component.category}
              </span>
              {component.subcategory && (
                <span className="bg-bones-gainsboro text-bones-slategray rounded-full px-3 py-1 text-sm">
                  {component.subcategory}
                </span>
              )}
            </div>
            <p className="text-bones-slategray max-w-3xl text-lg">
              {component.description}
            </p>
          </div>
        </div>
      </header>

      {/* Live Example */}
      <section>
        <h2 className="text-bones-black mb-4 text-xl font-semibold">
          Live Example
        </h2>
        <div className="border-bones-gainsboro bg-bones-white rounded-lg border p-8">
          <div
            dangerouslySetInnerHTML={{ __html: component.codeExample }}
            className="[&>*]:mb-0"
          />
        </div>
      </section>

      {/* Code Example */}
      <section>
        <h2 className="text-bones-black mb-4 text-xl font-semibold">
          HTML Code
        </h2>
        <div className="border-bones-gainsboro bg-bones-dimgray text-bones-snow overflow-x-auto rounded-lg border">
          <div className="border-bones-gray flex items-center justify-between border-b px-4 py-2">
            <span className="text-bones-gainsboro text-sm">HTML</span>
            <button
              onClick={() =>
                navigator.clipboard.writeText(component.codeExample)
              }
              className="text-bones-gainsboro hover:text-bones-white text-sm transition-colors"
            >
              Copy
            </button>
          </div>
          <pre className="overflow-x-auto p-4 text-sm">
            <code>{component.codeExample}</code>
          </pre>
        </div>
      </section>

      {/* Usage Notes */}
      <section className="bg-bones-aliceblue border-bones-lightsteelblue rounded-lg border p-6">
        <h2 className="text-bones-midnightblue mb-4 text-xl font-semibold">
          Usage Notes
        </h2>
        <div className="prose text-bones-slategray">
          <p>
            This element renders as shown above in your current browser.
            Different browsers and operating systems may display slight
            variations in appearance and behavior.
          </p>
          <p className="mb-0">
            The code example above shows the basic HTML structure. You can copy
            it directly into your projects or use it as a reference for creating
            similar components.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ComponentDisplay;
