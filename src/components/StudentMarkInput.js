import { keys } from '@laufire/utils/lib';
import { React } from 'react';

const StudentMarkInput = (context) => {
	const { setState, state } = context;
	const { currentMarkSheet } = state;

	return <div>
		{keys(currentMarkSheet).map((header, key) =>
			<span key={ key }>
				<label>{header}</label>
				<input
					type="text"
					placeholder="enter value"
					style={ { width: '80px' } }
					onChange={ (event) => setState({
						...state,
						currentMarkSheet: { ...currentMarkSheet,
							[header]: event.target.value },
					}) }
				/>
			</span>)}
	</div>;
};

export default StudentMarkInput;
