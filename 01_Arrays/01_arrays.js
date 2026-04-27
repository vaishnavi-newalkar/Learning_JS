// const myArr = [1, 2, 3, 4, 5,"true","heelo"];

// //copy created is shallow copy copy reference= actual reference
// console.log(myArr);
// console.log(myArr.length);
// console.log(myArr[0]);
// console.log(myArr[1]);

// myArr.push(6);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(0);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(3));
// console.log(myArr.includes(10));
// const newArr=myArr.join();
// console.log(typeof newArr);

// //slice and splice
// const myArr2 = myArr.slice(0,3);
// console.log(myArr2);
// console.log(myArr);

// myArr.splice(1,2);
// console.log(myArr);


const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dcHeroes = ["Batman", "Superman", "WonderWoman", "Flash", "Green Lantern"];
// Accessing elements
// marvelHeroes.push(dcHeroes); //pushes array inside array..Nomerging happens
// console.log(marvelHeroes); //

marvelHeroes.concat(dcHeroes); //merges two arrays and returns new array
console.log("A",marvelHeroes); //original array remains unchanged

// const newMarvelHeroes = marvelHeroes.concat(dcHeroes);
// console.log("B",newMarvelHeroes); //new array with merged values

// const allHeroes = [...marvelHeroes,...dcHeroes]; //spread operator to merge arrays
// console.log("C",allHeroes); //new array with merged values


// const another_array = [1,2,3,[4,5,6],7,8];
// console.log(another_array[3][1]); //accessing nested array element
// const flattened_array = another_array.flat(); //flattening nested array
// console.log(flattened_array); //flattened array with all elements at same level
console.log(Array.isArray("hello")); //checking if value is an array
console.log(Array.from("hello")); //creating array from string

console.log(Array.from({name:"John",age:30})); //creating array from object (only values are taken)
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); //creating array from individual values