class Class {

    name: string;
    branch: string;
    year: number;


    constructor(name: string, branch: string, year: number) {
        this.name = name;
        this.branch = branch;
        this.year = year;
    }


    displayDetails(): void {
        console.log(student);
    }
    
}
let student = new Class("vinaysai", "EEE", 2022);
student.displayDetails()

import { student1 } from "./generics";

let details = "vinay sai"
let details1 = 5
let results = student1(details)
let results1 = student1(details1)
console.log(results)
console.log(results1)



interface Student {
    name: string;
    age: number;
    grade: string;
}

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

type ReadonlyStudent = MyReadonly<Student>;

const student2: ReadonlyStudent = {
    name: "Vinay Sai",
    age: 20,
    grade: "A"
};

//student2.name = "anjani"; here when we are trying change it shows error

