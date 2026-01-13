// welcome

// Grading System with vanila javascrpt

// let marks = -76;
// if (marks > 100 || marks < 0) {
//   console.log("Your marks is invalid please enter correct marks!!!");
// }
// else if (marks > 32 && marks <= 39) {
//   console.log(
//     "You just pass the exam and you got D . But very poor performance"
//   );
// }
//  else if (marks > 39 && marks < 50) {
//   console.log("You have got C . Also very poor needs to improve!");
// }
//  else if (marks >= 50 && marks < 60) {
//   console.log("You have got B . Also very poor needs to improve!");
// }
// else if (marks >= 60 && marks < 70) {
//   console.log("You have got A- . Also very poor needs to improve!");
// }
// else if (marks >= 70 && marks < 80) {
//   console.log("You have got A . Not bad but improvement needed!");
// }
// else if (marks >= 80 && marks <= 100) {
//   console.log("You have got A+ .Great result , good luck for future!");
// }
// else {
//   console.log("Your are failed!!");
// }

// Grading system end here

// Males Marriage System  in Bangladesh

// let gender = 'Male';
// let minIncome = 100000;
// let address = "Dhaka";
// let age = 21;
// let jobCriteria = "governmentJob";

// if(gender!== 'Male'){
//     console.log('Ohh , We are looking or a perfect Male candidate in planet Earth. You just leave!!!')
// }
// else if(minIncome < 100000 ){
//     console.log('You are too poor to marry. Income enough money first.')
// }
// else if(address !== 'Dhaka'){
//     console.log('Only Dhakaiya pola needed.')
// }
// else if(age < 21){
//     console.log('Hey kid what are you doing here. Grow up first!!')

// }
// else if(jobCriteria !== 'governmentJob') {
//     console.log('We only want Shorkai Takla . private job has no Garunttee')
// }
// else{
//     console.log('Congratulation you qualified to marry my daughter!!')
// }
// Marrige system ends here

// Here comes the loops and array method practice

// loops

// print 1 - 100 number and its summation

// for(let i = 1; i <= 100; i++){

// console.log(i)
// }

// summation

let sum = 0;

for (let j = 0; j < 101; j++) {
  sum += j;
}
console.log(sum);

// output 5050

// Making a namta

let namtaNumber = 7;

for (let i = 1; i < 11; i++) {
  const result = ` ${namtaNumber} * ${i} = ${namtaNumber * i}`;
  console.log(result);
}

//  Determine the greater number with  ternary operator

let a = 5;
let b = 4;
let c = 7;

a > b && a > c
  ? console.log("A is the biggest")
  : b > a && b > c
  ? console.log("B is the biggest number")
  : console.log("C is the Biggest number");

// Output : C is the biggest number

//  ====== Now we will practice the Heart of javascript and it's  Function . Javascript is nothing but using function.==== //

// Basic old function

function sumOfTwoNumber(a, b) {
  return a + b;
}
const result = sumOfTwoNumber(2, 3);
console.log(result);

// ES6 Arrow Function

const squareNumber = (a) => {
  return a * a;
};
console.log(squareNumber(9));

// Even more simple way

const squareNumber1 = (a) => a * a;
console.log(squareNumber1(5));

// Function for determine even or odd number

const evenOdd = (number) => {
  if (number % 2 === 0) {
    return "Corresponding number is an Even number";
  } else {
    return "Corresponding number is an Odd number";
  }
};
console.log(evenOdd(4));

// Using Ternary Operator in jsx style

const evenOdd1 = (number) => {
  return typeof number !== "number" || number == 0
    ? `Please enter a valid number`
    : number % 2 == 0
    ? `This ${number} is and Even number`
    : `This ${number} is and Odd number`;
};
console.log(evenOdd1("asdfasfd"));
console.log(evenOdd1(0));
console.log(evenOdd1(6));
console.log(evenOdd1(9));

// Now we will practice the object
// The most used object system in react is array of object for getting the data dynamically in DOM

const studentsData = [
  {
    name:'Akil Anjum ',
    roll:651309,
    age:20,
    isMarried:false
  },
  {
    name:'Istiak Ahmed',
    roll:661309,
    age:22,
    isMarried:true
  },
  {
    name:'Al-Jihad',
    roll:651339,
    age:25,
    isMarried:false
  }
]

console.log(studentsData)
// print specific object index
console.log(studentsData[0])
console.log(studentsData[2])

// We can destructure the elements and use it directly

const {name,age,isMarried} = studentsData[0]
console.log(name)
console.log(age)
console.log(isMarried)




