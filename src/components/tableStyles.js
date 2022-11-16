/* eslint-disable max-lines-per-function */
import { React } from 'react';
import marksheets from '../service/marksheets';

const tableStyle = {
	background: 'lavender',
	width: '1000px',
	height: '480px',
	borderCollapse: 'collapse',
	textAlign: 'center',
	margin: 'auto',
};

const thStyle = {
	borderTop: '3px solid black',
	border: '2px solid black',
	height: '40px',
	fontSize: '20px',
};
const columnStyle = {
	borderTop: '3px solid black',
	border: '2px solid black',
	textAlign: 'right',
	paddingRight: '5px',
	fontStyle: 'TimesNewRoman',

};
const texttdStyle = {
	...columnStyle,
	textAlign: 'left',
	paddingLeft: '5px',
};

const tableHeader = [
	'Rollno',
	'Name',
	'Tamil',
	'English',
	'Maths',
	'Science',
	'Social',
];

const StudentTable = () =>
	<div>
		<h1>Marksheets</h1>
		<table style={ tableStyle }>
			<thead>
				<tr>
					{
						tableHeader.map((heading, key) =>
							<th key={ key } style={ thStyle }>{heading} </th>)
					}
				</tr>
			</thead>
			<tbody>
				{
					marksheets.map((marksheet, key) =>
						<tr key={ key }>
							<td style={ columnStyle }>{marksheet.rollno}</td>
							<td style={ texttdStyle }>{marksheet.name}</td>
							<td style={ columnStyle }>{marksheet.tamil}</td>
							<td style={ columnStyle }>{marksheet.english}</td>
							<td style={ columnStyle }>{marksheet.maths}</td>
							<td style={ columnStyle }>{marksheet.science}</td>
							<td style={ columnStyle }>{marksheet.social}</td>
						</tr>)
				}
			</tbody>
		</table>
	</div>
	;

export default StudentTable;
