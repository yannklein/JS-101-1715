// //////////////////////////
// THE 3 BASICS OF A NEW LANG
// //////////////////////////

// 1. The docs:
// - MDN (exhaustive but hard): https://developer.mozilla.org/en-US/docs/Web/JavaScript
// - W3School (easy for beginners): https://www.w3schools.com/js/

// 2. How to run JS?
// To test one line of code, run in the console: node
// To run a file, run in the console: node hello.js

// 3. How to print?
// console.log("Hi #1715");

// //////////////////
// RUBY VS JAVASCRIPT
// //////////////////

// 1. var, const, let and the lower camel case

// 'const' CANNOT be reassigned
const student = "Steven";
// student = "Super Steven";
console.log(student);

// 'let' CAN be reassigned
let age = 21;
// age = age + 1;
age += 1;
console.log(age);

// 'var' is the obsolete 'let' (almost!)

// 2. interpolation
// Note: use backticks (`) for interpolation
console.log(`${student} is ${age} years-old`);

// 3. no float/integer
console.log(typeof(42));
console.log(typeof(42.34));

// 4. how toString/parseInt works
// Note: toString doesn’t work without ()
console.log(   (42).toString()  );
console.log(   parseInt('101', 10)  );


// can be used to convert into binary (= base 2)
// 000
// 001
// 010
// 011
// 100
console.log(   parseInt('101', 2)  );


// 5. delete element in an array with splice
const students = [
  "Yuta",
  "Yu",
  "Joe",
  "Ali"
];

// students << "David"
students.push("David");

// students.splice(1); // from index 1, delete everything
// students.splice(1, 2); // from index 1, delete 2 elements
console.log(students);

// 6. iterate over an array

// Reminder: in ruby 👇
// students.each do |student|
//   puts "#{student} is amazing!"
// end

// JS arraow function: () => {}
students.forEach((student) => {
  console.log(`${student} is amazing!`);
});


// 7. join() returns adds commas
// [1,2,3].join()
// ---> '1,2,3'
// [1,2,3].join("")
// ---> '123'

// 8. object, the magic dot!
const anotherStudent = {
  firstName: "Sunjung",
  lastName: "Hwang" 
};

console.log(anotherStudent["firstName"]);
console.log(anotherStudent.firstName);

anotherStudent.firstName = "Super Sunjung";
anotherStudent.age = 21;
console.log(anotherStudent);

// 9. === VS ==
// sameness in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness



// 10. the JS falsies:
if (0) {
  console.log("this is truthy");
}

null //nil
false //false
""
NaN
0

// 11. JS arrow functions () => {}
// Note: they look like a 'very special' variable

// const square = (number) => {
//   return number * number;
// };

const square = number => number * number;

console.log(square(42));
console.log(square(3));
console.log(square(101));