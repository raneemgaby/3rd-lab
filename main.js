import Student from './model.js';
import fetchStudents from './database';
import {calculationClassAverage,findTopStudent,filterStudents} from './analytics.js';
fetchStudents((rawStudents))=>{
    const students=rawStudents.map(s=>new Student (s.id,s.name,s.courses));

    console.log("Testing Immutibility:");
    console.log("Original ID:",students[0].id);
    console.log("Attempting to change ID to 999...");
    students[0].id=999;
    console.log("Final ID:",students[0].id,"(Success ID did not change)")

    console.log(calculateClassAverage(students,101));

    console.log(findTopStudent(students));

    const course102Students=filterStudents(students,s=>s.course.some(c=>c.coureId===102));
    console.log("Students in course 102:",course102Students.map(s=>s.name).join(","));
}
