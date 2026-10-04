import Student from './model.js';
import fetchStudents from './database';
import {calculateClassAverage,findTopStudent,filterStudents} from './analytics.js';
fetchStudents((rawStudents))=>{
    const students=rawStudents.map(s=>new Student (s.id,s.name,s.courses));

    console.log("Testing Immutibility:");
    console.log("Original ID:",students[0].id);
    console.log("Attempting to change ID to 999...");
    students[0].id=999;
    console.log("Final ID:",students[0].id,"(Success ID did not change)")

    console.log("--- Analytics Report ---");
    console.log(`Class Average for Course 101: ${calculateClassAverage(students,101)}`);

    const topStudent=findTopStudent(students);
    console.log(`Top Student: ${topStudent.name} (Average: ${topStudent.getAverage()})`);

    const course102Students=filterStudents(students,s=>s.courses.some(c=>c.courseId===102));
    console.log(`Students in course 102: ${course102Students.map(s=>s.name).join(", ")}`);
}
