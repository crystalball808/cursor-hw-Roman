const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


const pairs = function(students){
	const studentPairs = [];
	for (let i = 0; i < students.length; i += 2){
		studentPairs.push([students[i],students[i+1]]);
	}
	return studentPairs;
}

const pairStudents = pairs(students);
console.log(pairStudents);

const pairProject = function(pairs, themes){
	const themePairs = [];
	for (let i = 0; i < pairs.length && i < themes.length; i++){
		themePairs.push([pairs[i].join(' і '),themes[i]]);
	}
	return themePairs;
}

const themesStudents = pairProject(pairStudents,themes);
console.log(themesStudents);

const rateStudent = function(students, marks){
	const studentMark = [];
	for (let i = 0; i < students.length && i < marks.length; i++) {
		studentMark.push([students[i], marks[i]]);
	}
	return studentMark;
}

const studentsMarks = rateStudent(students,marks);
console.log(studentsMarks);

const randomMark = function(){
	const mark = Math.floor((Math.random()*5)) + 1;
	return mark;
}

const pairMark = function(pair){
	const markedPair = [];
	for (var i = 0; i < pair.length; i++) {
		markedPair.push([pair[i][0],pair[i][1],randomMark()]);
	}
	return markedPair;
}

const markedPair = pairMark(themesStudents);
console.log(markedPair);