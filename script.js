// creating an array
// Array.isarray method

let shoppingList = [
    "milk",
    "bread",
    "cheese",
    3,
];

console.log(Array.isArray (shoppingList));

//how do we target an array within another array and check it is an array

const Array = ["one"]

const someArray = ["one", 6, ["a", "b", "c"]];

//Array.isArray(someArray[2][1]);

//console.log(Array.isArray (shoppingList));