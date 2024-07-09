const myName = "Marco";

let myAge = 46;

//Function
function multiplier(num1, num2) {
  return num1 * num2;
}

// multiplier(2, 2);

// Array
const myList = ["one", "two", "three"];
console.log(myList.length);
//Object
const marco = {
  height: 1.6,
  colorOfEye: "a bit blue",
  age: 46,
};

myAge = 47;
for (let counter = 0; counter < myList.length; counter = counter + 1) {
  console.log(`the actual counter is; ${counter} and my age is ${myAge}`);
}
