import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import './globals.css';

// Configure DM Sans font
const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-dm-sans',
	display: 'swap',
});

// Configure DM Serif Display font
const dmSerifDisplay = DM_Serif_Display({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-dm-serif-display',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Native HTML Elements',
	description: 'What every HTML element looks like in your browser.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${dmSans.variable} ${dmSerifDisplay.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
