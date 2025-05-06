'use client';

import React from 'react';
import ComponentDisplay from '../ComponentDisplay/ComponentDisplay';

const TableElements: React.FC = () => {
	return (
		<section id='table-elements'>
			<h2 className='text-2xl font-bold mb-6 pb-2 border-b'>
				Table Elements
			</h2>

			<ComponentDisplay
				id='table'
				title='Basic Table'
				codeExample={`<table border="1">
  <caption>Monthly Savings</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
</table>`}>
				<table border={1}>
					<caption>Monthly Savings</caption>
					<thead>
						<tr>
							<th>Month</th>
							<th>Savings</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>January</td>
							<td>$100</td>
						</tr>
						<tr>
							<td>February</td>
							<td>$80</td>
						</tr>
					</tbody>
				</table>
			</ComponentDisplay>

			<ComponentDisplay
				id='table-sections'
				title='Table with Sections'
				codeExample={`<table border="1">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
    </tr>
  </tfoot>
</table>`}>
				<table border={1}>
					<thead>
						<tr>
							<th>Header 1</th>
							<th>Header 2</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Data 1</td>
							<td>Data 2</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>Footer 1</td>
							<td>Footer 2</td>
						</tr>
					</tfoot>
				</table>
			</ComponentDisplay>

			<ComponentDisplay
				id='table-colspan-rowspan'
				title='Table with Colspan and Rowspan'
				codeExample={`<table border="1">
  <tr>
    <th>Name</th>
    <th colspan="2">Phone</th>
  </tr>
  <tr>
    <td>John Doe</td>
    <td>555-1234</td>
    <td>555-5678</td>
  </tr>
  <tr>
    <td rowspan="2">Jane Smith</td>
    <td>555-8765</td>
    <td>555-4321</td>
  </tr>
  <tr>
    <td>555-7890</td>
    <td>555-0987</td>
  </tr>
</table>`}>
				<table border={1}>
					<tbody>
						<tr>
							<th>Name</th>
							<th colSpan={2}>Phone</th>
						</tr>
						<tr>
							<td>John Doe</td>
							<td>555-1234</td>
							<td>555-5678</td>
						</tr>
						<tr>
							<td rowSpan={2}>Jane Smith</td>
							<td>555-8765</td>
							<td>555-4321</td>
						</tr>
						<tr>
							<td>555-7890</td>
							<td>555-0987</td>
						</tr>
					</tbody>
				</table>
			</ComponentDisplay>
		</section>
	);
};

export default TableElements;
