import { React } from 'react';

const processStudentMark = (student, key) =>
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
	</tr>;

export default processStudentMark;
