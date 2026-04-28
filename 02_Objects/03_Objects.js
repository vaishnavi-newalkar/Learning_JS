const course={
    coursename: "Machine learning",
    course_price: "1000",
    Course_Instructor: "Krish Naik"
}

//console.log(Course_Instructor) /// 1 way to print but agar 
// multiple baar print karnaa hoga to baar baar . lagake poora likhna hoga so to avoid this much of code repetition

// way2:-
//This is called Destructuring
const {Course_Instructor:I} = course
console.log(I);

// Concept of APIs
const character = {
    name: "Groot",
    title: "GOTG"
};
console.log(character);
//API sai data array ya json(object) form mai u get.
