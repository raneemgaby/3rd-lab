export function calculateClassAverage(students,courseId){
    let total=0;
    let count=0;
      for(let i=0;i<students.length;i++){
        const foundCourse=students[i].courses.find(c=>c.courseId===courseId); //used the find() array method to find the registered students in this course to calculare the course average
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
    return students.filter(criteriaFn); //used filter() array method to filter the students how meet the citeriaFn function
}
