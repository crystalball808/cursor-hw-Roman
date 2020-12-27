export const rateStudent = function(students, marks){
	const studentMark = [];
	for (let i = 0; i < students.length && i < marks.length; i++) {
		studentMark.push([students[i], marks[i]]);
	}
	return studentMark;
}