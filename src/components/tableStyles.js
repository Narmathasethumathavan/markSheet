/* eslint-disable max-lines-per-function */
import { React } from 'react';
import marksheet from '../service/marksheet';

const tableStyle = {
	background: 'lavender',
	width: '1000px',
	height: '480px',
	border: '1px solid Blue',
	textAlign: 'center',
	margin: 'auto',
};

const thStyle = {
	borderTop: '3px solid black',
	border: '2px solid black',
	height: '40px',
	fontSize: '20px',
};
const tdStyle = {
	borderTop: '3px solid black',
	border: '2px solid black',
	textAlign: 'right',
	paddingRight: '5px',
	fontweight: 'bold',

};
const texttdStyle = {
	...tdStyle,
	textAlign: 'left',
	paddingLeft: '5px',
};

const TableStyles = () =>
	<div>
		 <h1>Marksheets</h1>
		<table style={ tableStyle }>
			<thead>
				<tr>
					<th style={ thStyle }>Rollno</th>
					<th style={ thStyle }>Name</th>
					<th style={ thStyle }>Tamil</th>
					<th style={ thStyle }>English</th>
					<th style={ thStyle }>Maths</th>
					<th style={ thStyle }>Science</th>
					<th style={ thStyle }>Social</th>
				</tr>
			</thead>
			<tbody>
				{
					marksheet.map((value, key) =>
						<tr key={ key }>
							<td style={ tdStyle }>{value.rollno}</td>
							<td style={ texttdStyle }>{value.name}</td>
							<td style={ tdStyle }>{value.tamil}</td>
							<td style={ tdStyle }>{value.english}</td>
							<td style={ tdStyle }>{value.maths}</td>
							<td style={ tdStyle }>{value.science}</td>
							<td style={ tdStyle }>{value.social}</td>
						</tr>)
				}
			</tbody>
		</table>
	</div>
	;

export default TableStyles;
