// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const add = (a, b) => {
  const c = 5;
  return a + b + c;
};

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
var counter = 0;
function count() {
  // Return a function that when invoked increments and returns a counter variable.
  counter += 1;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
count();
count();
count();
count();
console.log(counter);

// Challenge 2: arrow function technique
var count2num = 0;
const counter2 = () => {
  count2num++;
}
counter2();
counter2();
counter2();
console.log(count2num);

// Challenge 2: arrow function technique pt.2
let counter3 = 0;
const count3 = (testtesttesttesttest) => {
  counter3++;
};
count3();
count3();
count3();
count3();
count3();
count3();
count3();
console.log(counter3);

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let variable = 0;
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  const myObj = {
    increment: function () {
      return variable++;
    },
    decrement: function () {
      return variable--;
    }
  };

  myObj.increment();
  myObj.increment();
  myObj.increment();
  myObj.decrement();

  return myObj;
};

counterFactory();
counterFactory();
counterFactory();
counterFactory();
counterFactory();

console.log(variable);
