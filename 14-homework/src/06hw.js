export const getAverageMark = function(student) {
  const marks = Object.values(student.subjects);
  const averageOfSubjects = [];
  for(let i = 0; i < marks.length; i++){
    const averageMarkSubject = +((marks[i].reduce((sum,mark)=>sum+mark,0)/marks[i].length).toFixed(2));
    averageOfSubjects.push(averageMarkSubject);
  }
  return +((averageOfSubjects.reduce((sum,mark)=>sum+mark,0)/averageOfSubjects.length).toFixed(2));
}

export const getBestStudent = function(students) {
  const markPerStudent = students.map((student)=>[student.name,getAverageMark(student)]);
  let bestStudent = ['',0];
  for(let i = 0; i< markPerStudent.length; i++){
    if(markPerStudent[i][1]>bestStudent[1]) bestStudent = markPerStudent[i];
  }
  return bestStudent[0];
}