// const createArrayWithString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithObject = (value: { id: number; name: string }) => [value];

const createArrayWithGeneric = <T>(value: T) => {
    return [value]
}

const arrString = createArrayWithGeneric("Apple");
const arrNumber = createArrayWithGeneric(222);
const arrObject = createArrayWithGeneric({id: 2, name: "Emon" });

// Tuple 

const createArrayTupleWithGeneric = <X, Y> (param1: X , param2: Y) => [param1, param2];

const res1 = createArrayTupleWithGeneric({name: "Emon", id: 12}, ["Emon"]);
const res2 = createArrayTupleWithGeneric("Emon Hossain", {age: 23});


const courseStudentDetails = <T> (studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo
    }
}

const student1 = {
    name: "Emon Hossain",
    age: 20,
    hasPen: true,
}

const student2 = {
    name: "Mejba",
    age: 30,
    isMarried: true,
    isCar: true,
}


const result = courseStudentDetails(student1)
console.log(result);