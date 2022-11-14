import { React } from 'react';
import './App.scss';
import compensations from './service/data';

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
