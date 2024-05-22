"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Class = /** @class */ (function () {
    function Class(name, branch, year) {
        this.name = name;
        this.branch = branch;
        this.year = year;
    }
    Class.prototype.displayDetails = function () {
        console.log(student);
    };
    return Class;
}());
var student = new Class("vinaysai", "EEE", 2022);
student.displayDetails();
var generics_1 = require("./generics");
var details = "vinay sai";
var details1 = 5;
var results = (0, generics_1.student1)(details);
var results1 = (0, generics_1.student1)(details1);
console.log(results);
console.log(results1);
var student2 = {
    name: "Vinay Sai",
    age: 20,
    grade: "A"
};
console.log(student2);
