import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
	return (
		<aside className='w-full md:w-64 bg-gray-50 dark:bg-gray-900 p-6 shrink-0  dark:border-gray-800 h-auto md:h-screen overflow-y-hidden'>
			<header className='mb-8'>
				<h1 className='text-2xl font-bold mb-2'>
					Native HTML Elements
				</h1>
				<p className='text-sm text-gray-600 dark:text-gray-400'>
					This is what all HTML interface elements look like in your
					current browser and OS. No styles, no scripts, no build
					step.
				</p>
			</header>

			<nav>
				<h2 className='text-lg font-semibold mb-4 border-b pb-2'>
					Navigation
				</h2>
				<ul className='space-y-2'>
					<li>
						<Link
							href='#text-inputs'
							className='text-blue-600 hover:underline'>
							Text Inputs
						</Link>
					</li>
					<li>
						<Link
							href='#date-time-inputs'
							className='text-blue-600 hover:underline'>
							Date & Time Inputs
						</Link>
					</li>
					<li>
						<Link
							href='#other-inputs'
							className='text-blue-600 hover:underline'>
							Other Inputs
						</Link>
					</li>
					<li>
						<Link
							href='#buttons'
							className='text-blue-600 hover:underline'>
							Buttons
						</Link>
					</li>
					<li>
						<Link
							href='#progress-meter'
							className='text-blue-600 hover:underline'>
							Progress & Meter
						</Link>
					</li>
					<li>
						<Link
							href='#fieldset'
							className='text-blue-600 hover:underline'>
							Fieldset
						</Link>
					</li>
					<li>
						<Link
							href='#interactive-elements'
							className='text-blue-600 hover:underline'>
							Interactive Elements
						</Link>
					</li>
					<li>
						<Link
							href='#media-elements'
							className='text-blue-600 hover:underline'>
							Media Elements
						</Link>
					</li>
					<li>
						<Link
							href='#embedded-content'
							className='text-blue-600 hover:underline'>
							Embedded Content
						</Link>
					</li>
					<li>
						<Link
							href='#table-elements'
							className='text-blue-600 hover:underline'>
							Table Elements
						</Link>
					</li>
					<li>
						<Link
							href='#list-elements'
							className='text-blue-600 hover:underline'>
							List Elements
						</Link>
					</li>
					<li>
						<Link
							href='#text-level-elements'
							className='text-blue-600 hover:underline'>
							Text-Level Elements
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
