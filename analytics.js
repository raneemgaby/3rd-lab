export function calculateClassAverage(students,courseId){
    let total=0;
    let average=0;
    let count=0;
      for(let i=0;i<students.length;i++){
        if(students[i].courses===courseId){
            total+=students[i].grade;
            count++;
        }
    }
     average=total/count;
     return average;
}

export function findTopStudent(students){
    return students.reduce((top, current) => current.getAverage() > top.getAverage() ? current : top, students[0]);
}

export function filterStudents(students,criteriaFn){
    return students.filter(criteriaFn);
}
