const ageInput = prompt("what is your age");
const firstNameInput = prompt("what is your name");

// console.log(promptNumber);
// console.log(typeof promptNumber);

const person = {
  member: {
    name: "firstName",
    lastName: "lastName",
  },
  age: 0,
  enterAge() {
    person.age = ageInput;
  },
  enterFirstName() {
    person.member.name = firstNameInput;
  },
};

person.enterAge();
person.enterFirstName();

console.log(person);
