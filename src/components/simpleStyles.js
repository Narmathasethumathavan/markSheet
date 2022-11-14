import { React } from 'react';
import compensations from '../service/data';

const rowStyle = {
	background: 'PaleGoldenRod',
	borderTop: '2px dotted Teal',
	height: '50px',
	fontSize: '18px',
	color: 'MidnightBlue',
	fontFamily: 'Times New Roman',
	textAlign: 'center',
};

const columnStyle = {
	display: 'inline-block',
	border: '1px solid navy',
	width: '150px',
};

const SimpleStyles = () => {
	const lines = compensations.map(({ name, amount }, key) =>
		<div
			key={ key }
			style={ rowStyle }
		>
			<span style={ columnStyle }>{name}</span>
			<span style={ columnStyle }>{amount}</span>

		</div>);

	return <div>
		<h3> Compensations </h3>
		<div>{ lines } </div>
	</div>;
};

export default SimpleStyles;
