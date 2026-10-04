export class Student{
    constructor(id,name,courses=[]){
        Object.defineProperity(this,'id',{ //define the id as a read-only property and non-writable or configurable
            value:id,
            writable:false,
            configurable:false,
        });
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
