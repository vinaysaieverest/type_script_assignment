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




//Assignement3 

//task1


type student4 = {
    name:string;
    age : number;
    place : string;
    class : number;
}
const newstudent:student4 = {
    name:"vinaysai",
    age :22,
    place:"warangal",
    class:10,
}
type updatestudent = Pick<student4 ,"name" | "age">
const updatevalues:updatestudent = {
    name :"Vijay",
    age : 25,
}

function updatestudentNameAndEmail(newstudent:student4,updatevalues:updatestudent){
    for(const key in updatevalues){
        newstudent[key] = updatevalues[key];
    }
    console.log(newstudent)
}
updatestudentNameAndEmail(newstudent,updatevalues)




//task 2
type isString <T> = T extends string ? "yes" : "no"

type test1 = isString<string>
function checkIfString<T>(value: T): isString<T> {
    if (typeof value === "string") {
      return "Yes" as isString<T>; 
    } else {
      return "No" as isString<T>; 
    }
  }


const a = checkIfString("hello")
const b = checkIfString(99)
console.log(a)
console.log(b)


//task _3
//relation of employee

type employee ={
    name : string;
    id : number;
    age : number;
    position?: employee; 
}
 const person1 : employee ={
    name : "vinaysai",
    id : 1,
    age :20,
    
 }
 const person2 : employee = {
    name : "vinaysai1",
    id : 2,
    age :21,
    position : person1
 }
 const person3 : employee = {
    name : "vinaysai2",
    id : 3,
    age :21,
    position : person2
 }
 const allEmployee :employee[] = [person1,person2,person3]
 console.log(allEmployee)



 //task 4 
const leadArray = new Array<number>;
allEmployee.forEach(employee=>{
    if(employee.position){
        leadArray.push(employee.position.id);
    }
})
const printLeads = (allEmployees : employee[]) : void  => {
    function checkLead(employee : employee) : boolean{
        let islead = false;
        leadArray.forEach(id => {
            if(id===employee.id){
                islead = true
            }
        });
        return islead;
    }
    allEmployees.forEach(employee=>{
        if(checkLead(employee)==true){
            console.log(`${employee.name} is Lead`);
        }
        else{
            console.log(`${employee.name} is not Lead`);
         }
    })
}

printLeads(allEmployee);
