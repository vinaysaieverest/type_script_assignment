"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Class = /** @class */ (function () {
    function Class(name, branch, year) {
        this.name = name;
        this.branch = branch;
        this.year = year;
    }
    Class.prototype.displayDetails = function () {
        console.log("Name: ", this.name);
        console.log("Branch: ", this.branch);
        console.log("Year: ", this.year);
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
var newstudent = {
    name: "vinaysai",
    age: 22,
    place: "warangal",
    class: 10,
};
var updatevalues = {
    name: "Vijay",
    age: 25,
};
function updatestudentNameAndEmail(newstudent, updatevalues) {
    return __assign(__assign({}, newstudent), updatevalues);
}
newstudent = updatestudentNameAndEmail(newstudent, updatevalues);
console.log(newstudent);
function checkIfString(value) {
    if (typeof value === "string") {
        return "Yes";
    }
    else {
        return "No";
    }
}
var a = checkIfString("hello");
var b = checkIfString(99);
console.log(a);
console.log(b);
var person1 = {
    name: "vinaysai",
    id: 1,
    age: 20,
};
var person2 = {
    name: "vinaysai1",
    id: 2,
    age: 21,
    position: person1
};
var person3 = {
    name: "vinaysai2",
    id: 3,
    age: 21,
    position: person2
};
var allEmployee = [person1, person2, person3];
console.log(allEmployee);
//task 4 
// const leadArray = new Array<number>;
// allEmployee.forEach(employee => {
//     if (employee.position) {
//         leadArray.push(employee.position.id);
//     }
// })
// const printLeads = (allEmployees: employee[]): void => {
//     function checkLead(employee: employee): boolean {
//         let islead = false;
//         leadArray.forEach(id => {
//             if (id === employee.id) {
//                 islead = true
//             }
//         });
//         return islead;
//     }
//     allEmployees.forEach(employee => {
//         if (checkLead(employee) == true) {
//             console.log(`${employee.name} is Lead`);
//         }
//         else {
//             console.log(`${employee.name} is not Lead`);
//         }
//     })
// }
// printLeads(allEmployee);
var printLeads = function (allEmployees) {
    allEmployees.forEach(function (employee) {
        var isLead = allEmployees.some(function (e) { var _a; return ((_a = e.position) === null || _a === void 0 ? void 0 : _a.name) === employee.name; });
        if (isLead) {
            console.log("".concat(employee.name, " is Lead"));
        }
        else {
            console.log("".concat(employee.name, " is not Lead"));
        }
    });
};
printLeads(allEmployee);
var StudentRequired = {
    name: "vinaysai",
    id: 2612,
    email: "chelpurivinaysai02@gmail.com",
    address: {
        city: "warangal",
        state: "Telangana",
        pincode: 506002,
    }
};
console.log(StudentRequired);
var studentDetails = {
    name: "Vinay Sai",
    email: "chelpurivinaysai02@gmail.com"
};
function printByConcatenating(student) {
    var result = '';
    for (var key in studentDetails) {
        var studentKey = key;
        result += "".concat(studentKey, ": ").concat(student[studentKey], ", ");
    }
    console.log(result);
}
printByConcatenating(studentDetails);
var studentDetails2 = {
    name: "Vinay Sai",
    email: "chelpurivinaysai02@gmail.com",
    address: {
        area: "warangal",
        state: "Telangana"
    }
};
function detail2(obj) {
    var result = '';
    for (var key in obj) {
        var value = obj[key];
        if (typeof value === 'object') {
            result += detail2(value);
        }
        else {
            result += "".concat(key, ": ").concat(value, ", ");
        }
    }
    return result;
}
var finalOutput = detail2(studentDetails2);
console.log(finalOutput.slice(0, -2));
