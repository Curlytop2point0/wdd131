const PI = 3.14;
let radius = 3;
let area = radius * radius * PI;
console.log(area);

radius = 20;
area = radius * radius * PI;
console.log(area);

// type coersion
const one = 1;
const two = '2';

let result = one * two;
console.log(result);

result = one + two;
console.log(result);

result = one + Number(two);
console.log(result);

// Scope
let course = "CSE131"; // global scope
if (true) {
  let student = "John";
  console.log(course); //works just fine, course is global
  console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block

/*
  Generative AI disclosure (CSE policy):
  1. JavaScript produced with assistance from Grok Bot (Dynamic Web Fundamentals), xAI, September 19, 2026.
  Aligned to the WDD 131 JS Variables and Constants ponder video. I reviewed and take responsibility for this work.
*/