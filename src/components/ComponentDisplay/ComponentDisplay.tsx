'use client';

import React from 'react';
import { ComponentData } from '../../types/Component';
import styles from './styles.module.css';

interface ComponentDisplayProps {
  component: ComponentData;
}

/**
 * ComponentDisplay renders a single component with its metadata and example.
 * Shows both the rendered component and its code example.
 */
const ComponentDisplay: React.FC<ComponentDisplayProps> = ({ component }) => {
  const { id, title, category, description, codeExample, element, subcategory } = component;
  
  return (
    <div className={styles.componentWrapper}>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      
      <div className="text-sm text-bones-gray mb-4">
        <span className="bg-bones-gainsboro px-2 py-1 rounded-md">{category}</span>
        {subcategory && (
          <span className="ml-2 bg-bones-ghostwhite px-2 py-1 rounded-md">{subcategory}</span>
        )}
      </div>
      
      <p className={styles.description}>{description}</p>
      
      <div className={`${styles.renderedComponent} p-6 border border-bones-gainsboro rounded-md bg-bones-white mb-4`}>
        {element}
      </div>
      
      <h3 className="text-sm font-semibold mb-2 text-bones-dimgray">Code Example</h3>
      <pre className={`${styles.codeSample} p-4 bg-bones-whitesmoke rounded-md overflow-x-auto text-sm`}>
        <code>{codeExample}</code>
      </pre>
    </div>
  );
};

export default ComponentDisplay;
