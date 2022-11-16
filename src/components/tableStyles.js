/* eslint-disable max-lines-per-function */
import { React } from 'react';
import marksheets from '../service/marksheets';

const tableHeader = [
	'Rollno',
	'Name',
	'Tamil',
	'English',
	'Maths',
	'Science',
	'Social',
	'Total',
];

const StudentTable = () =>
	<div>
		<h1>Marksheets</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					{
						tableHeader.map((heading, key) =>
							<th key={ key } className="thStyle">{heading} </th>)
					}
				</tr>
			</thead>
			<tbody>
				{
					marksheets.map((marksheet, key) =>
						<tr key={ key }>
							<td className="columnStyle">{marksheet.rollno}</td>
							<td className="texttdStyle">{marksheet.name}</td>
							<td className="columnStyle">{marksheet.tamil}</td>
							<td className="columnStyle">{marksheet.english}</td>
							<td className="columnStyle">{marksheet.maths}</td>
							<td className="columnStyle">{marksheet.science}</td>
							<td className="columnStyle">{marksheet.social}</td>
							<td className="columnStyle">{marksheet.tamil
								+ marksheet.english
								+ marksheet.maths
								+ marksheet.science
								+ marksheet.social}</td>
						</tr>)
				}
			</tbody>
		</table>
	</div>;

export default StudentTable;
