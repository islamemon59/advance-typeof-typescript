type Student = {
    id: number,
    name: string,
    age: number,
    class: string
}

const student1 = {
    id: 1,
    name: "Emon Hossain",
    age: 20,
    class: "1st"
}
const student2 = {
    id: 1,
    name: "Emon Hossain",
    age: 20,
    class: "1st",
    hasPen: true
}


const courseStudentInfo = <T extends Student> (studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo
    }
}

const res1 = courseStudentInfo(student2)
console.log(res1);