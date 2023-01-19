import { React, useState } from 'react';
import './App.scss';
import Add from './components/Add';
import StudentMarkInput from './components/StudentMarkInput';
import StudentTable from './components/studentTable';
import marksheets from './service/marksheets';

const getInitialState = {
	currentMarkSheet: {
		rollno: 0,
		name: 'Ar',
		tamil: 99,
		english: 92,
		maths: 91,
		science: 95,
		social: 93,
	},
	stuMarkSheets: marksheets,
};

const App = (context) => {
	const [state, setState] = useState(getInitialState);
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<StudentTable { ...extendedContext }/>
		<StudentMarkInput { ...extendedContext }/>
		<Add { ...extendedContext }/>
	</div>;
};

export default App;
