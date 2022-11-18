/* eslint-disable max-lines-per-function */
import { React } from 'react';
import marksheets from '../service/marksheets';
import processMarkSheets from '../service/studentManager';

const tableHeader = [
	'Rollno',
	'Name',
	'Tamil',
	'English',
	'Maths',
	'Science',
	'Social',
	'Total',
	'Result',
	'Rank',
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
					processMarkSheets(marksheets).map((student, key) =>
						<tr key={ key }>
							<td className="columnStyle">{student.rollno}</td>
							<td className="texttdStyle">{student.name}</td>
							<td className="columnStyle">{student.tamil}</td>
							<td className="columnStyle">{student.english}</td>
							<td className="columnStyle">{student.maths}</td>
							<td className="columnStyle">{student.science}</td>
							<td className="columnStyle">{student.social}</td>
							<td className="columnStyle">{student.total}</td>
							<td className="columnStyle">{student.result}</td>
							<td className="columnStyle">{student.rank}</td>

						</tr>)
				}
			</tbody>
		</table>
	</div>;

export default StudentTable;
