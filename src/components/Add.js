import { React } from 'react';

const Add = (context) => {
	const { setState, state } = context;
	const { stuMarkSheets, currentMarkSheet } = state;

	return (
		<button onClick={ () => setState({
			...state,
			stuMarkSheets: [...stuMarkSheets, currentMarkSheet],
		}) }
		>
			Add</button>
	);
};

export default Add;
