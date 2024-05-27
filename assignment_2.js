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
    for (var key in updatevalues) {
        newstudent[key] = updatevalues[key];
    }
    console.log(newstudent);
}
updatestudentNameAndEmail(newstudent, updatevalues);
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
var leadArray = new Array;
allEmployee.forEach(function (employee) {
    if (employee.position) {
        leadArray.push(employee.position.id);
    }
});
var printLeads = function (allEmployees) {
    function checkLead(employee) {
        var islead = false;
        leadArray.forEach(function (id) {
            if (id === employee.id) {
                islead = true;
            }
        });
        return islead;
    }
    allEmployees.forEach(function (employee) {
        if (checkLead(employee) == true) {
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
    address: { city: "warangal",
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
        state: "state"
    }
};
function detail2(student) {
    var result = '';
    for (var key in studentDetails2) {
        var studentKey = key;
        result += "".concat(studentKey, ": ").concat(student[studentKey], ", ");
    }
    console.log(result);
}
detail2(studentDetails2);
