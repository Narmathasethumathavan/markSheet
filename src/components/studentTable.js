import { React } from 'react';
import tableHeader from './tableHeader';
import processStudentMark from './processStudentMark';
import processMarkSheets from '../service/studentManager';

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

const StudentTable = (context) => {
	const { state: { stuMarkSheets }} = context;

	return <div>
		<h1>Marksheets</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					{heading.map(tableHeader)}
				</tr>
			</thead>
			<tbody>
				{processMarkSheets(stuMarkSheets)
					.map(processStudentMark)}
			</tbody>
		</table>
	</div>;
};

export default StudentTable;
