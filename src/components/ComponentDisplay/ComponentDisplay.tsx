'use client';

import React from 'react';
import { ComponentProps } from '../../types/Component';
import styles from './styles.module.css';

const Component: React.FC<ComponentProps> = ({
	id,
	title,
	category,
	description,
	codeSample,
}) => {
	return (
		<div className={styles.componentWrapper}>
			<h3 id={id} className={styles.title}>
				{title} [{category}]
			</h3>
			<p className={styles.description}>{description}</p>
			<div className={styles.renderedComponent}>{codeSample}</div>
			<pre className={styles.codeSample}>{codeSample}</pre>
		</div>
	);
};

export default Component;
