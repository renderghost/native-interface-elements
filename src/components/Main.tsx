import React from 'react';
import Link from 'next/link';

const Main = () => {
	return (
		<main className="flex-1 p-4 md:p-8 overflow-auto">
        {children}
      </main>
	);
};

export default Main;
