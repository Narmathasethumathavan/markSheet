import { React } from 'react';
import marksheets from '../service/marksheets';
import processMarkSheets from '../service/studentManager';
import tableHeader from './tableHeader';
import processStudentMark from './processStudentMark';

const heading = [
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
						heading.map(tableHeader)
					}
				</tr>
			</thead>
			<tbody>
				{
					processMarkSheets(marksheets).map(processStudentMark)
				}
			</tbody>
		</table>
	</div>;

export default StudentTable;
