/* eslint-disable max-len */

const getTotal = (student) => {
	const { tamil, english, maths, science, social } = student;

	return tamil + maths + english + science + social;
};

const getResult = (student) => {
	const passmark = 35;
	const result = Math.min(
		student.tamil, student.english, student.maths, student.science, student.social
	) >= passmark
		? 'pass'
		: 'fail';

	return result;
};
const getRank = (finalMarksheets) => {
	const sortedArr = finalMarksheets.sort((a, b) => b.total - a.total);

	let rank = 0;
	// eslint-disable-next-line no-return-assign
	const processRank = sortedArr.map((studentData) => ({
		...studentData,
		rank: studentData.result === 'pass' ? rank += 1 : '-',
	}));

	return processRank;
};

const addFields = (studentmark) => ({
	...studentmark,
	total: getTotal(studentmark),
	result: getResult(studentmark),

});

const processMarkSheets = (marksheets) => {
	const finalMarksheets = marksheets.map(addFields);

	return getRank(finalMarksheets);
};

export default processMarkSheets;
