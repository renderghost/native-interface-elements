'use client';

import React, { useRef } from 'react';
import { ComponentCategory, ComponentData } from '../types/Component';

// Pre-define reusable components
const DialogComponent = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <div>
      <button onClick={() => dialogRef.current?.showModal()}>
        Open Dialog
      </button>
      <dialog ref={dialogRef}>
        <h4>Dialog Title</h4>
        <p>
          This is a dialog window. Press Escape to close or
          click the button below.
        </p>
        <button onClick={() => dialogRef.current?.close()}>
          Close
        </button>
      </dialog>
    </div>
  );
};

/**
 * Consolidated source of truth for all component data
 * Used for both navigation and component display
 */
export const components: ComponentData[] = [
  // Form Input Components
  {
    id: 'text-input',
    slug: 'text-input',
    title: 'Text Input',
    category: ComponentCategory.FORM,
    subcategory: 'Text Inputs',
    description: 'Standard text input field for single-line text entry.',
    codeExample: `<input type="text" placeholder="Text input" />`,
    element: <input type='text' placeholder='Text input' />
  },
  {
    id: 'password-input',
    slug: 'password-input',
    title: 'Password Input',
    category: ComponentCategory.FORM,
    subcategory: 'Text Inputs',
    description: 'Password input that masks entered characters.',
    codeExample: `<input type="password" placeholder="Password" />`,
    element: <input type='password' placeholder='Password' />
  },
  {
    id: 'email-input',
    slug: 'email-input',
    title: 'Email Input',
    category: ComponentCategory.FORM,
    subcategory: 'Text Inputs',
    description: 'Input field optimized for email addresses.',
    codeExample: `<input type="email" placeholder="Email" />`,
    element: <input type='email' placeholder='Email' />
  },
  {
    id: 'tel-input',
    slug: 'tel-input',
    title: 'Telephone Input',
    category: ComponentCategory.FORM,
    subcategory: 'Text Inputs',
    description: 'Input field optimized for telephone numbers.',
    codeExample: `<input type="tel" placeholder="Telephone" />`,
    element: <input type='tel' placeholder='Telephone' />
  },
  {
    id: 'url-input',
    slug: 'url-input',
    title: 'URL Input',
    category: ComponentCategory.FORM,
    subcategory: 'Text Inputs',
    description: 'Input field optimized for URL entry.',
    codeExample: `<input type="url" placeholder="https://renderg.host" />`,
    element: <input type='url' placeholder='https://renderg.host' />
  },
  {
    id: 'search-input',
    slug: 'search-input',
    title: 'Search Input',
    category: ComponentCategory.FORM,
    subcategory: 'Text Inputs',
    description: 'Input field optimized for search queries.',
    codeExample: `<input type="search" placeholder="Search" />`,
    element: <input type='search' placeholder='Search' />
  },
  
  // Date & Time Inputs
  {
    id: 'date-input',
    slug: 'date-input',
    title: 'Date Input',
    category: ComponentCategory.FORM,
    subcategory: 'Date & Time',
    description: 'Input field for selecting a date.',
    codeExample: `<input type="date" />`,
    element: <input type='date' />
  },
  {
    id: 'time-input',
    slug: 'time-input',
    title: 'Time Input',
    category: ComponentCategory.FORM,
    subcategory: 'Date & Time',
    description: 'Input field for selecting a time.',
    codeExample: `<input type="time" />`,
    element: <input type='time' />
  },
  {
    id: 'datetime-local-input',
    slug: 'datetime-local-input',
    title: 'DateTime-Local Input',
    category: ComponentCategory.FORM,
    subcategory: 'Date & Time',
    description: 'Input field for selecting a date and time.',
    codeExample: `<input type="datetime-local" />`,
    element: <input type='datetime-local' />
  },
  {
    id: 'month-input',
    slug: 'month-input',
    title: 'Month Input',
    category: ComponentCategory.FORM,
    subcategory: 'Date & Time',
    description: 'Input field for selecting a month and year.',
    codeExample: `<input type="month" />`,
    element: <input type='month' />
  },
  {
    id: 'week-input',
    slug: 'week-input',
    title: 'Week Input',
    category: ComponentCategory.FORM,
    subcategory: 'Date & Time',
    description: 'Input field for selecting a week and year.',
    codeExample: `<input type="week" />`,
    element: <input type='week' />
  },
  
  // Other Inputs
  {
    id: 'number-input',
    slug: 'number-input',
    title: 'Number Input',
    category: ComponentCategory.FORM,
    subcategory: 'Other Inputs',
    description: 'Input field for numerical values.',
    codeExample: `<input type="number" min="0" max="10" />`,
    element: <input type='number' min='0' max='10' />
  },
  {
    id: 'range-input',
    slug: 'range-input',
    title: 'Range Input',
    category: ComponentCategory.FORM,
    subcategory: 'Other Inputs',
    description: 'Slider input for selecting a value from a range.',
    codeExample: `<input type="range" min="0" max="10" />`,
    element: <input type='range' min='0' max='10' />
  },
  {
    id: 'color-input',
    slug: 'color-input',
    title: 'Color Input',
    category: ComponentCategory.FORM,
    subcategory: 'Other Inputs',
    description: 'Input field for selecting a color.',
    codeExample: `<input type="color" />`,
    element: <input type='color' />
  },
  {
    id: 'file-input',
    slug: 'file-input',
    title: 'File Input',
    category: ComponentCategory.FORM,
    subcategory: 'Other Inputs',
    description: 'Input field for uploading files.',
    codeExample: `<input type="file" />`,
    element: <input type='file' />
  },
  {
    id: 'checkbox-input',
    slug: 'checkbox-input',
    title: 'Checkbox Input',
    category: ComponentCategory.FORM,
    subcategory: 'Other Inputs',
    description: 'Input field for boolean selection.',
    codeExample: `<input type="checkbox" id="check1" />
<label for="check1">Checkbox label</label>`,
    element: (
      <>
        <input type='checkbox' id='check1' />
        <label htmlFor='check1'>Checkbox label</label>
      </>
    )
  },
  {
    id: 'radio-input',
    slug: 'radio-input',
    title: 'Radio Input',
    category: ComponentCategory.FORM,
    subcategory: 'Other Inputs',
    description: 'Input field for selecting one option from a group.',
    codeExample: `<input type="radio" id="radio1" name="radios" />
<label for="radio1">Option 1</label>
<input type="radio" id="radio2" name="radios" />
<label for="radio2">Option 2</label>`,
    element: (
      <>
        <input type='radio' id='radio1' name='radios' />
        <label htmlFor='radio1'>Option 1</label>
        <input type='radio' id='radio2' name='radios' />
        <label htmlFor='radio2'>Option 2</label>
      </>
    )
  },
  {
    id: 'textarea',
    slug: 'textarea',
    title: 'Textarea',
    category: ComponentCategory.FORM,
    subcategory: 'Other Inputs',
    description: 'Multi-line text input field.',
    codeExample: `<textarea placeholder="Textarea"></textarea>`,
    element: <textarea placeholder='Textarea'></textarea>
  },
  {
    id: 'select',
    slug: 'select',
    title: 'Select',
    category: ComponentCategory.FORM,
    subcategory: 'Other Inputs',
    description: 'Dropdown menu for selecting from a list of options.',
    codeExample: `<select>
  <option value="">Choose...</option>
  <option>One</option>
  <option>Two</option>
</select>`,
    element: (
      <select>
        <option value=''>Choose...</option>
        <option>One</option>
        <option>Two</option>
      </select>
    )
  },
  {
    id: 'datalist',
    slug: 'datalist',
    title: 'Datalist',
    category: ComponentCategory.FORM,
    subcategory: 'Other Inputs',
    description: 'Input field with predefined options that users can select from.',
    codeExample: `<input list="browsers" placeholder="Enter a browser" />
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
</datalist>`,
    element: (
      <>
        <input list='browsers' placeholder='Enter a browser' />
        <datalist id='browsers'>
          <option value='Chrome' />
          <option value='Firefox' />
          <option value='Safari' />
          <option value='Edge' />
        </datalist>
      </>
    )
  },
  
  // Buttons
  {
    id: 'submit-input',
    slug: 'submit-input',
    title: 'Submit Button',
    category: ComponentCategory.FORM,
    subcategory: 'Buttons',
    description: 'Button for submitting a form.',
    codeExample: `<input type="submit" value="Submit" />`,
    element: <input type='submit' value='Submit' />
  },
  {
    id: 'reset-input',
    slug: 'reset-input',
    title: 'Reset Button',
    category: ComponentCategory.FORM,
    subcategory: 'Buttons',
    description: 'Button for resetting a form to its initial values.',
    codeExample: `<input type="reset" value="Reset" />`,
    element: <input type='reset' value='Reset' />
  },
  {
    id: 'button-element',
    slug: 'button-element',
    title: 'Button Element',
    category: ComponentCategory.FORM,
    subcategory: 'Buttons',
    description: 'Generic button element for various actions.',
    codeExample: `<button>Button</button>`,
    element: <button>Button</button>
  },
  
  // Progress & Meter
  {
    id: 'progress',
    slug: 'progress',
    title: 'Progress',
    category: ComponentCategory.FORM,
    subcategory: 'Progress & Meter',
    description: 'Visual indicator of progress toward a goal.',
    codeExample: `<progress value="70" max="100"></progress>`,
    element: <progress value='70' max='100'></progress>
  },
  {
    id: 'meter',
    slug: 'meter',
    title: 'Meter',
    category: ComponentCategory.FORM,
    subcategory: 'Progress & Meter',
    description: 'Visual indicator for a scalar value within a known range.',
    codeExample: `<meter value="0.6">60%</meter>`,
    element: <meter value='0.6'>60%</meter>
  },
  
  // Fieldset
  {
    id: 'fieldset-legend',
    slug: 'fieldset-legend',
    title: 'Fieldset with Legend',
    category: ComponentCategory.FORM,
    subcategory: 'Fieldset',
    description: 'Container for grouping related form elements with a caption.',
    codeExample: `<fieldset>
  <legend>Legend</legend>
  <label for="f1">Label</label>
  <input id="f1" type="text" />
</fieldset>`,
    element: (
      <fieldset>
        <legend>Legend</legend>
        <label htmlFor='f1'>Label</label>
        <input id='f1' type='text' />
      </fieldset>
    )
  },
  
  // Interactive Elements
  {
    id: 'details-summary',
    slug: 'details-summary',
    title: 'Details & Summary',
    category: ComponentCategory.INTERACTIVE,
    description: 'Disclosure widget that can show or hide content.',
    codeExample: `<details>
  <summary>Click to expand</summary>
  <p>This is the hidden content that appears when the summary is clicked.</p>
</details>`,
    element: (
      <details>
        <summary>Click to expand</summary>
        <p>
          This is the hidden content that appears when the summary
          is clicked.
        </p>
      </details>
    )
  },
  {
    id: 'dialog',
    slug: 'dialog',
    title: 'Dialog',
    category: ComponentCategory.INTERACTIVE,
    description: 'Modal or popup dialog box.',
    codeExample: `<button onclick="document.getElementById('demo-dialog').showModal()">Open Dialog</button>
<dialog id="demo-dialog">
  <h4>Dialog Title</h4>
  <p>This is a dialog window. Press Escape to close or click the button below.</p>
  <button onclick="document.getElementById('demo-dialog').close()">Close</button>
</dialog>`,
    element: <DialogComponent />
  },
  
  // Text Elements
  {
    id: 'mark',
    slug: 'mark',
    title: 'Mark',
    category: ComponentCategory.TEXT,
    description: 'Highlighted text for reference or notation purposes.',
    codeExample: `<p>This text contains <mark>highlighted</mark> content.</p>`,
    element: (
      <p>
        This text contains <mark>highlighted</mark> content.
      </p>
    )
  },
  {
    id: 'time',
    slug: 'time',
    title: 'Time',
    category: ComponentCategory.TEXT,
    description: 'Represents a specific period in time.',
    codeExample: `<p>The event starts at <time datetime="2023-07-07T20:00:00">8 PM</time>.</p>`,
    element: (
      <p>
        The event starts at{' '}
        <time dateTime='2023-07-07T20:00:00'>8 PM</time>.
      </p>
    )
  },
  {
    id: 'abbr',
    slug: 'abbr',
    title: 'Abbreviation',
    category: ComponentCategory.TEXT,
    description: 'Represents an abbreviation or acronym with an optional title attribute for the full description.',
    codeExample: `<p><abbr title="HyperText Markup Language">HTML</abbr> is the standard markup language for web pages.</p>`,
    element: (
      <p>
        <abbr title='HyperText Markup Language'>HTML</abbr> is the
        standard markup language for web pages.
      </p>
    )
  },
  {
    id: 'code',
    slug: 'code',
    title: 'Code',
    category: ComponentCategory.TEXT,
    description: 'Represents a fragment of computer code.',
    codeExample: `<p>The <code>console.log()</code> function outputs a message to the console.</p>`,
    element: (
      <p>
        The <code>console.log()</code> function outputs a message to
        the console.
      </p>
    )
  },
  {
    id: 'kbd',
    slug: 'kbd',
    title: 'Keyboard Input',
    category: ComponentCategory.TEXT,
    description: 'Represents user input from a keyboard.',
    codeExample: `<p>Please press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>`,
    element: (
      <p>
        Please press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.
      </p>
    )
  },
  {
    id: 'samp',
    slug: 'samp',
    title: 'Sample Output',
    category: ComponentCategory.TEXT,
    description: 'Represents sample output from a computer program.',
    codeExample: `<p>The computer said: <samp>Disk failure imminent. Please backup your data.</samp></p>`,
    element: (
      <p>
        The computer said:{' '}
        <samp>Disk failure imminent. Please backup your data.</samp>
      </p>
    )
  },
  {
    id: 'small',
    slug: 'small',
    title: 'Small Text',
    category: ComponentCategory.TEXT,
    description: 'Represents smaller text, such as copyright information or side comments.',
    codeExample: `<p>This is regular text. <small>This is small text often used for disclaimers or copyright notices.</small></p>`,
    element: (
      <p>
        This is regular text.{' '}
        <small>
          This is small text often used for disclaimers or
          copyright notices.
        </small>
      </p>
    )
  },
  {
    id: 'cite',
    slug: 'cite',
    title: 'Citation',
    category: ComponentCategory.TEXT,
    description: 'Represents the title of a creative work.',
    codeExample: `<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>`,
    element: (
      <p>
        <cite>The Scream</cite> by Edvard Munch. Painted in 1893.
      </p>
    )
  },
  {
    id: 'sub-sup',
    slug: 'sub-sup',
    title: 'Subscript and Superscript',
    category: ComponentCategory.TEXT,
    description: 'Represents subscript (sub) and superscript (sup) text.',
    codeExample: `<p>H<sub>2</sub>O is water and E = mc<sup>2</sup> is Einstein's famous equation.</p>`,
    element: (
      <p>
        H<sub>2</sub>O is water and E = mc<sup>2</sup> is
        Einstein&apos;s famous equation.
      </p>
    )
  },
  {
    id: 'ruby',
    slug: 'ruby',
    title: 'Ruby Annotations',
    category: ComponentCategory.TEXT,
    description: 'Represents small annotations often used in East Asian typography.',
    codeExample: `<ruby>
  漢 <rp>(</rp><rt>han</rt><rp>)</rp>
  字 <rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>`,
    element: (
      <ruby>
        漢 <rp>(</rp>
        <rt>han</rt>
        <rp>)</rp>字 <rp>(</rp>
        <rt>zi</rt>
        <rp>)</rp>
      </ruby>
    )
  },
  {
    id: 'em-strong',
    slug: 'em-strong',
    title: 'Emphasis and Strong',
    category: ComponentCategory.TEXT,
    description: 'Represents emphasized (em) and strongly emphasized (strong) text.',
    codeExample: `<p>This text is <em>emphasized</em> and this text is <strong>strong</strong>.</p>`,
    element: (
      <p>
        This text is <em>emphasized</em> and this text is{' '}
        <strong>strong</strong>.
      </p>
    )
  },
];

/**
 * Utility function to group components by category
 * @returns An object with category keys and component arrays
 */
export const getComponentsByCategory = () => {
  const grouped = components.reduce<{ [key in ComponentCategory]?: ComponentData[] }>((acc, component) => {
    const category = component.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category]?.push(component);
    return acc;
  }, {});
  
  return grouped;
};

/**
 * Utility function to get a component by its slug
 * @param slug The slug to look up
 * @returns The component data or undefined if not found
 */
export const getComponentBySlug = (slug: string) => {
  return components.find(component => component.slug === slug);
};

// No need for additional exports or default export since we're using named exports directly

