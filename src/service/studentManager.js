
const getTotal = (student) => {
	const { tamil, english, maths, science, social } = student;

	return Number(tamil) + Number(maths)
	+ Number(english) + Number(science) + Number(social);
};

const getResult = (student) => {
	const passmark = 35;
	const result = Math.min(
		student.tamil, student.english,
		student.maths, student.science, student.social
	) >= passmark
		? 'pass'
		: 'fail';

	return result;
};
const getRank = (finalMarksheets) => {
	const sortedArr = finalMarksheets.sort((a, b) => b.total - a.total);
	let rank = 1;
	const processRank = sortedArr.map((studentData) => ({
		...studentData,
		rank: studentData.result === 'pass' ? rank++ : '-',
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
