
// const tinderUsaer = new Object();

const tinderUser ={};

tinderUser.id = "123"
tinderUser.name = "Say";


const reg = {
    email: "Soga@gail.cion",
    fullnae : {
        userFullname : {
            firstname :"Vsihal",
            lastname : "To"
        }
    }
}

// console.log(reg.fullnae);
// console.log(reg.fullnae.userFullname);
// console.log(reg.fullnae.userFullname.firstname);


const obj1 = {
    1 : "a" ,
    2 : "b"
}

const obj2 = {
    3 : "c" ,
    4 : "d"
}

// const obj3 = { obj1 , obj2}

// const object3 = Object.assign({ , obj1, obj2});
// console.log(object3);

// const object 3 = {...obj1 ,...obj2};

// console.log(object3);


const course = {
    courseName :"Spring boot",
    price : 999,
    courseInstructor : "hitesh"
}

const {courseInstructor} = course

console.log(courseInstructor);
