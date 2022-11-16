/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* eslint-disable indent */
import { React } from 'react';
import marksheet from '../service/marksheet';

const rowStyle = {
	background: 'Lavender',
	borderTop: '1px double MidnightBlue',
	height: '55px',
	fontSize: '18px',
	color: 'black',
	fontFamily: 'Times New Roman',
	textAlign: 'center',
};

const textColumnStyle = {
	display: 'inline-block',
	border: '1px solid Navy',
	width: '150px',
	textAlign: 'left',
	height: '30px',
	paddingLeft: '5px',
};

const numberColumnStyle = {
	...textColumnStyle,
	paddingRight: '5px',
	textAlign: 'right',
	fontStyle: 'bold',
};

const titleStyle = {

	background: 'Lavender',
	borderTop: '2px double MidnightBlue',
	height: '70px',
	color: 'black',
	fontFamily: 'Times New Roman',
	paddingLeft: '.1px',
	fontSize: '25px',
	wordSpacing: '500px',

};

const SimpleStyles = () => {
	const student = marksheet.map(({ rollno, name, tamil, english, maths, science, social }, key) =>
		<div
			key={ key }
			style={ rowStyle }
		>
			<span style={ numberColumnStyle }>{ rollno }</span>
			<span style={ textColumnStyle }>{ name}</span>
			<span style={ numberColumnStyle }>{tamil}</span>
			<span style={ numberColumnStyle }>{english}</span>
			<span style={ numberColumnStyle }>{maths}</span>
			<span style={ numberColumnStyle }>{science}</span>
			<span style={ numberColumnStyle }>{social}</span>

		</div>);

	return <div>
		<h1> Marksheets </h1>
		<div style={ titleStyle }>
			<span style={ textColumnStyle }> Rollno </span>
			<span style={ textColumnStyle }> Name </span>
			<span style={ textColumnStyle }>Tamil</span>
			<span style={ textColumnStyle }>English</span>
			<span style={ textColumnStyle }>Maths</span>
			<span style={ textColumnStyle }>Science</span>
			<span style={ textColumnStyle }>Social</span>
		</div>
		<div>{student}</div>
	</div>;
};

export default SimpleStyles;
