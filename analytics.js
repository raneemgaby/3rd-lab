export function calculateClassAverage(students,courseId){
    let total=0;
    let count=0;
      for(let i=0;i<students.length;i++){
        const foundCourse=students[i].courses.find(c=>c.coursId===courseId);
        if(foundCourse){
            total+=foundCourse.grade;
            count++;
        }
    }
    return count > 0 ? total / count : 0;
}

export function findTopStudent(students){
    return students.reduce((top, current) => current.getAverage() > top.getAverage() ? current : top, students[0]);
}

export function filterStudents(students,criteriaFn){
    return students.filter(criteriaFn);
}
