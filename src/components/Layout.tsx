import React from 'react';
import Sidebar from './Sidebar/Sidebar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='flex flex-col md:flex-row min-h-screen'>
			<Sidebar />
			<main className='flex-1 p-4 md:p-8 overflow-auto'>{children}</main>
		</div>
	);
};

export default Layout;
