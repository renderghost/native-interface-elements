import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ComponentDisplay from '@/components/ComponentDisplay/ComponentDisplay';
import ComponentLayout from '@/components/ComponentLayout';
import Sidebar from '@/components/Sidebar/Sidebar';
import { getComponentBySlug, components } from '@/constants/components';

// Define the params type for getStaticParams and page props
type PageParams = {
  params: {
    slug: string;
  };
};

/**
 * Generate static params for all component slugs at build time
 * This improves performance by pre-rendering all component pages
 */
export function generateStaticParams() {
  return components.map((component) => ({
    slug: component.slug,
  }));
}

/**
 * Generate dynamic metadata for each component page
 */
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const component = getComponentBySlug(params.slug);
  
  if (!component) {
    return {
      title: 'Component Not Found',
      description: 'The requested component could not be found.'
    };
  }
  
  return {
    title: `${component.title} | Native Interface Elements`,
    description: component.description,
    openGraph: {
      title: component.title,
      description: component.description,
      type: 'article',
    },
  };
}

/**
 * Component page that displays a single component based on the slug
 */
export default function ComponentPage({ params }: PageParams) {
  // Get component data from the slug
  const component = getComponentBySlug(params.slug);
  
  // If component not found, return 404
  if (!component) {
    notFound();
  }
  
  return (
    <ComponentLayout sidebar={<Sidebar />}>
      <article className="py-8">
        <ComponentDisplay component={component} />
      </article>
    </ComponentLayout>
  );
}

