console.log("Hello Panda")
type Student={
    name:string;
    age:number;
    email:string;
    course_list:"javascript" |"typescript";
    address:Address;
};
type Address={
    city:string;
    state:string;
    pincode:number
};
let vinaysai: Student = {
    name: "vinay sai",
    age: 20,
    email: "vinay@example.com",
    course_list: "typescript",
    address: {             
        city: "Warangal",
        state: "Telangana",
        pincode: 506002
    }
};

let rekha: Student={
    name: "Rekha",
    age: 20,
    email: "rekha@gmail.com",
    course_list: "javascript",
    address: {             
        city: "karimnagar",
        state: "Telangana",
        pincode: 506101
    }
}
console.log(vinaysai)
console.log(rekha)