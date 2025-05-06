'use client';

import React from 'react';
import ComponentDisplay from '../ComponentDisplay/ComponentDisplay';

const TextElements: React.FC = () => {
	return (
		<section id='text-level-elements'>
			<h2 className='text-2xl font-bold mb-6 pb-2 border-b'>
				Text-Level Elements
			</h2>

			<ComponentDisplay
				id='mark'
				title='Mark'
				codeExample={`<p>This text contains <mark>highlighted</mark> content.</p>`}>
				<p>
					This text contains <mark>highlighted</mark> content.
				</p>
			</ComponentDisplay>

			<ComponentDisplay
				id='time'
				title='Time'
				codeExample={`<p>The event starts at <time datetime="2023-07-07T20:00:00">8 PM</time>.</p>`}>
				<p>
					The event starts at{' '}
					<time dateTime='2023-07-07T20:00:00'>8 PM</time>.
				</p>
			</ComponentDisplay>

			<ComponentDisplay
				id='abbr'
				title='Abbreviation'
				codeExample={`<p><abbr title="HyperText Markup Language">HTML</abbr> is the standard markup language for web pages.</p>`}>
				<p>
					<abbr title='HyperText Markup Language'>HTML</abbr> is the
					standard markup language for web pages.
				</p>
			</ComponentDisplay>

			<ComponentDisplay
				id='code'
				title='Code'
				codeExample={`<p>The <code>console.log()</code> function outputs a message to the console.</p>`}>
				<p>
					The <code>console.log()</code> function outputs a message to
					the console.
				</p>
			</ComponentDisplay>

			<ComponentDisplay
				id='kbd'
				title='Keyboard Input'
				codeExample={`<p>Please press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>`}>
				<p>
					Please press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.
				</p>
			</ComponentDisplay>

			<ComponentDisplay
				id='samp'
				title='Sample Output'
				codeExample={`<p>The computer said: <samp>Disk failure imminent. Please backup your data.</samp></p>`}>
				<p>
					The computer said:{' '}
					<samp>Disk failure imminent. Please backup your data.</samp>
				</p>
			</ComponentDisplay>

			<ComponentDisplay
				id='small'
				title='Small Text'
				codeExample={`<p>This is regular text. <small>This is small text often used for disclaimers or copyright notices.</small></p>`}>
				<p>
					This is regular text.{' '}
					<small>
						This is small text often used for disclaimers or
						copyright notices.
					</small>
				</p>
			</ComponentDisplay>

			<ComponentDisplay
				id='cite'
				title='Citation'
				codeExample={`<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>`}>
				<p>
					<cite>The Scream</cite> by Edvard Munch. Painted in 1893.
				</p>
			</ComponentDisplay>

			<ComponentDisplay
				id='sub-sup'
				title='Subscript and Superscript'
				codeExample={`<p>H<sub>2</sub>O is water and E = mc<sup>2</sup> is Einstein's famous equation.</p>`}>
				<p>
					H<sub>2</sub>O is water and E = mc<sup>2</sup> is
					Einstein&apos;s famous equation.
				</p>
			</ComponentDisplay>

			<ComponentDisplay
				id='ruby'
				title='Ruby Annotations'
				codeExample={`<ruby>
  漢 <rp>(</rp><rt>han</rt><rp>)</rp>
  字 <rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>`}>
				<ruby>
					漢 <rp>(</rp>
					<rt>han</rt>
					<rp>)</rp>字 <rp>(</rp>
					<rt>zi</rt>
					<rp>)</rp>
				</ruby>
			</ComponentDisplay>

			<ComponentDisplay
				id='em-strong'
				title='Emphasis and Strong'
				codeExample={`<p>This text is <em>emphasized</em> and this text is <strong>strong</strong>.</p>`}>
				<p>
					This text is <em>emphasized</em> and this text is{' '}
					<strong>strong</strong>.
				</p>
			</ComponentDisplay>
		</section>
	);
};

export default TextElements;
