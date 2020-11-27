const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

const getSubjects = function(student) {
  let subjects = Object.keys(student.subjects);
  subjects = subjects.map((element)=>{
    element = element[0].toUpperCase()+element.slice(1).toLowerCase();
    if (element.includes('_')){
      return element.split('_').join(' ');
    }
    return element;
  });
  return subjects;
  };

const subjectsOfStud = getSubjects(students[0]);
console.log(subjectsOfStud);

const getAverageMark = function(student) {
  const marks = Object.values(student.subjects);
  const averageOfSubjects = [];
  for(let i = 0; i < marks.length; i++){
    const averageMarkSubject = +((marks[i].reduce((sum,mark)=>sum+mark,0)/marks[i].length).toFixed(2));
    averageOfSubjects.push(averageMarkSubject);
  }
  return +((averageOfSubjects.reduce((sum,mark)=>sum+mark,0)/averageOfSubjects.length).toFixed(2));
}

console.log(getAverageMark(students[0])); //считал так: (средние оценки по предметам)/(количество предметов)

const getStudentInfo = function(student) {
  return{
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
  }
}

console.log(getStudentInfo(students[0]));

const getStudentsNames = function(students){
  const names = students.reduce((names,student)=>{
    names.push(student.name);
    return names;
  },[])
  return names.sort();
}

console.log(getStudentsNames(students));

const getBestStudent = function(students) {
  const markPerStudent = students.map((student)=>[student.name,getAverageMark(student)]);
  let bestStudent = ['',0];
  for(let i = 0; i< markPerStudent.length; i++){
    if(markPerStudent[i][1]>bestStudent[1]) bestStudent = markPerStudent[i];
  }
  return bestStudent[0];
}

console.log(getBestStudent(students));

const calculateWordLetters = function(word){
  const letterArray = word.toLowerCase().split('');
  return letterArray.reduce((result,letter)=>{
    if (!result[letter]){
      result[letter] = letterArray.reduce((count,thisLetter)=>{
        if (thisLetter === letter){
          count++;
        }
        return count;
      },0);
    }
    return result;
  },{})
}

console.log(calculateWordLetters('умОпомрачительно'));