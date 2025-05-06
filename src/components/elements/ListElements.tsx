'use client';

import React from 'react';
import ComponentDisplay from '../ComponentDisplay/ComponentDisplay';

const ListElements: React.FC = () => {
	return (
		<section id='list-elements'>
			<h2 className='text-2xl font-bold mb-6 pb-2 border-b'>
				List Elements
			</h2>

			<ComponentDisplay
				id='unordered-list'
				title='Unordered List'
				codeExample={`<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>`}>
				<ul>
					<li>First item</li>
					<li>Second item</li>
					<li>Third item</li>
				</ul>
			</ComponentDisplay>

			<ComponentDisplay
				id='ordered-list'
				title='Ordered List'
				codeExample={`<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`}>
				<ol>
					<li>First item</li>
					<li>Second item</li>
					<li>Third item</li>
				</ol>
			</ComponentDisplay>

			<ComponentDisplay
				id='ordered-list-type'
				title='Ordered List with Type'
				codeExample={`<ol type="A">
  <li>Item A</li>
  <li>Item B</li>
  <li>Item C</li>
</ol>

<ol type="i">
  <li>Item i</li>
  <li>Item ii</li>
  <li>Item iii</li>
</ol>`}>
				<div>
					<ol type='A'>
						<li>Item A</li>
						<li>Item B</li>
						<li>Item C</li>
					</ol>

					<ol type='i'>
						<li>Item i</li>
						<li>Item ii</li>
						<li>Item iii</li>
					</ol>
				</div>
			</ComponentDisplay>

			<ComponentDisplay
				id='description-list'
				title='Description List'
				codeExample={`<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
  <dt>JS</dt>
  <dd>JavaScript</dd>
</dl>`}>
				<dl>
					<dt>HTML</dt>
					<dd>HyperText Markup Language</dd>
					<dt>CSS</dt>
					<dd>Cascading Style Sheets</dd>
					<dt>JS</dt>
					<dd>JavaScript</dd>
				</dl>
			</ComponentDisplay>

			<ComponentDisplay
				id='nested-list'
				title='Nested List'
				codeExample={`<ul>
  <li>First level
    <ul>
      <li>Second level</li>
      <li>Second level
        <ul>
          <li>Third level</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>First level</li>
</ul>`}>
				<ul>
					<li>
						First level
						<ul>
							<li>Second level</li>
							<li>
								Second level
								<ul>
									<li>Third level</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>First level</li>
				</ul>
			</ComponentDisplay>
		</section>
	);
};

export default ListElements;
