export class Student{
    constructor(id,name,courses){
        Object.defineProperity(this,'id',{
            value:id,
            writable:false,
            configurable:false,
        });
        this.id=id;
        this.name=name;
        this.courses=courses;
    }
    addCourse(courseId,grade){
         this.courses.push({courseId,grade});
    }
    getAverage(){
        const total=this.courses.reduce((s,c)=>s+c.grade,0);
        return total/this.courses.length;
    }
}