import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'bones-black': '#000000',
				'bones-dimgray': '#282828',
				'bones-gainsboro': '#DCDCDC',
				'bones-darkgray': '#A9A9A9',
				'bones-ghostwhite': '#F8F8FF',
				'bones-gray': '#808080',
				'bones-snow': '#FFFAFA',
				'bones-linen': `#FAF0E6`,
				'bones-floralwhite': `#FFFAF0`,
				'bones-lightsteelblue': '#B0C4DE',
				'bones-slategray': '#708090',
				'bones-white': '#FFFFFF',
				'bones-whitesmoke': '#EDEAE5',
				// Yellows
				'bones-yellow': '#FFFF00',
				'bones-gold': '#F6D200',
				'bones-goldenrod': '#DAA520',
				// Blues
				'bones-aliceblue': '#F0F8FF',
				'bones-cyan': '#00FFFF',
				'bones-lavender': '#E6E6FA',
				'bones-lightcyan': '#E0FFFF',
				'bones-blue': '#0000FF',
				'bones-mediumblue': '#0000CD',
				'bones-thistle': '#D8BFD8',
				'bones-midnightblue': '#191970',
				// Reds
				'bones-red': '#FF0000',
				'bones-firebrick': '#B22222',
				'bones-darkred': '#8B0000',
				// Purples
				'bones-magenta': '#FF00FF',
				'bones-rebeccapurple': '#663399',
				'bones-indigo': '#4B0082',
				// Utilities
				'bones-transparent': 'transparent',
			},
		},
		fontFamily: {
			sans: ['var(--font-dm-sans)'],
			serif: ['var(--font-dm-serif-display)'],
		},
	},
	darkMode: 'media',
	plugins: [],
};

export default config;
