//const tinderUser = new Object() //Object Constructor//Singleton Object
const tinderUser = {} //Object Literal//Non sigleton Object tinderUser.id = "123abc"

tinderUser.id = "123abc"
tinderUser.name = "Groot"
tinderUser.isLoggedIn = false

// console.log(tinderUser)
const regularUser = {
    email: "user@yahoo.com",
    fullname: {
        userFullName: {
            firstName: "Groot",
            lastName: "R"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {obj1, obj2} //Spread Operator
 console.log(obj3)

 const obj4 = Object.assign({}, obj1, obj2) //Merging two objects
//  console.log(obj4)

const users = [
    {

    },
    {

    },
    {

    },
]

users[0].id = "123abc"

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("abc")) //false
console.log(tinderUser.hasOwnProperty("name")) //true