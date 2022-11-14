import { React } from 'react';
import './App.scss';

const compensations = [
	{
		name: 'A',
		amount: 200,
	},
	{
		name: 'B',
		amount: 300,
	},
];

const App = () => {
	const lines = compensations.map(({ name, amount }, key) =>
		<div
			key={ key }
			style={
				{
					background: 'green',
					border: '10px solid pink',
					marginTop: '20px',
				}
			}
		>
			{ name } got { amount }.
		</div>);

	//	eslint-disable-next-line no-console
	console.log({ lines });

	return lines;
};

export default App;
