//This refers to current context

const user={
    username: "hitesh",
    price: 199, 

    welcomeMessage: function(){
        console.log(`Welcome ${this.username} to our website`);
        console.log(this);
    }
     
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) /// this refers to current context

// function chai(){
//     console.log(this);
// }
// chai() /// this will print global object which is window in browser and global in nodejs


// function chai(){
//     let username="Groot",
//     console.log(this.username);
// }
// chai() /// this will print undefined because this is not referring to chai function but it is referring to global object and there is no username in global object so it will print undefined


//ARROW FUNCTION
// const chai = () => {
//     console.log(this);
// }
// chai() /// this will print global object which is window in browser and global in nodejs because arrow function does not have its own this it takes this from its surrounding context which is global object in this case

// const chai = () => {
//     username = "Groot",
//     console.log(this.username);
// }
// chai()

//ARROW FUNCTION SYNTAX: ---->
// const functionName = (parameters) => {
//     // function body
// }

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwoNumbers(3, 5));

//Implicit Return // Return likhna not zaruri
const addTwoNumbers = (num1, num2) => num1 + num2 // one line function return not needed maan lia ki return hi karna hoga
console.log(addTwoNumbers(3, 5));

// Returning Object
const createUser = (username, price) => ({username: username, price: price}) // object return karna hai to object ko parenthesis mai wrap karna hoga nahi to arrow function samjhega ki function body start ho rahi hai
console.log(createUser("hitesh", 199));