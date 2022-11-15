/* eslint-disable max-len */
/* eslint-disable indent */
import { React } from 'react';
import marksheet from '../service/marksheet';

const rowStyle = {
	background: 'PaleGoldenRod',
	borderTop: '1px double navy',
	height: '55px',
	fontSize: '18px',
	color: 'Navy',
	fontFamily: 'Times New Roman',
	textAlign: 'center',
};

const columnStyle = {
	display: 'inline-block',
	border: '1px solid black',
	width: '150px',
};
const titleStyle = {
	background: 'PaleGoldenRod',
	borderTop: '2px double Teal',
	height: '50px',
	color: 'Navy',
	fontFamily: 'Times New Roman',
	paddingLeft: '15px',
	fontSize: '25px',
	wordSpacing: '80px',
};

const SimpleStyles = () => {
	const student = marksheet.map(({ rollno, name, tamil, english, maths, science, social }, key) =>
		<div
			key={ key }
			style={ rowStyle }
		>
			<span style={ columnStyle }>{ rollno }</span>
			<span style={ columnStyle }>{ name}</span>
			<span style={ columnStyle }>{tamil}</span>
			<span style={ columnStyle }>{english}</span>
			<span style={ columnStyle }>{maths}</span>
			<span style={ columnStyle }>{science}</span>
			<span style={ columnStyle }>{social}</span>

		</div>);

	return <div>
		<h1> Marksheets </h1>
		<div style={ titleStyle }>Rollno Name Tamil English Maths Science Social</div>
		<div>{student} </div>
	</div>;
};

export default SimpleStyles;
