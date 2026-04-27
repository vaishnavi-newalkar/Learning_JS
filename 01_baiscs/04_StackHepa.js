//Two types of memory
//Stack (Primitive) & Heap (Non-primitive) memory
//stack memory 
let myYoutubename = "groot.com"
let anothername= myYoutubename //U create a copy at some other memory place having same value as ytname
anothername="ChaiAurcode"
console.log(anothername);
console.log(myYoutubename);

//Heap memory
let user1 = {
    email: "groot@gmail.com",
    upi: "groot@ybl"
}

let user2 = user1;  //Copy not created // reference given of same location
user2.email="captainamerica@gmail.com"

console.log(user1.email);
console.log(user2.email)

