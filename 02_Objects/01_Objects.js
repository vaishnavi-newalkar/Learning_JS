//Singleton Objects --> Created when object is created using CONSTRUCTOR METHOD

//Object Literals
const mySym = Symbol("myKey");

const JsUser ={
    name: "Groot",
    age: 20,
    location: "Dehradun",
    email: "groot@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"],
    [mySym]: "myKey1"
}

console.log(JsUser.email)
console.log(JsUser["email"])      //More preferred works for all cases
console.log(JsUser[mySym])

JsUser.email = "groot@123.gmail.com"
console.log(JsUser.email)


JsUser.greeting = function(){
    console.log("Hello JsUser")
}

JsUser.greeting()
console.log(JsUser.greeting())