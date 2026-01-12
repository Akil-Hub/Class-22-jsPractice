// welcome

// Grading System with vanila javascrpt

let marks = -76;
if (marks > 100 || marks < 0) {
  console.log("Your marks is invalid please enter correct marks!!!");
}
else if (marks > 32 && marks <= 39) {
  console.log(
    "You just pass the exam and you got D . But very poor performance"
  );
}
 else if (marks > 39 && marks < 50) {
  console.log("You have got C . Also very poor needs to improve!");
}
 else if (marks >= 50 && marks < 60) {
  console.log("You have got B . Also very poor needs to improve!");
} 
else if (marks >= 60 && marks < 70) {
  console.log("You have got A- . Also very poor needs to improve!");
} 
else if (marks >= 70 && marks < 80) {
  console.log("You have got A . Not bad but improvement needed!");
} 
else if (marks >= 80 && marks <= 100) {
  console.log("You have got A+ .Great result , good luck for future!");
} 
else {
  console.log("Your are failed!!");
}

// Grading system end here


// Males Marriage System  in Bangladesh 

let gender = 'Male';
let minIncome = 100000;
let address = "Dhaka";
let age = 21;
let jobCriteria = "governmentJob";

if(gender!== 'Male'){
    console.log('Ohh , We are looking or a perfect Male candidate in planet Earth. You just leave!!!')
}
else if(minIncome < 100000 ){
    console.log('You are too poor to marry. Income enough money first.')
}
else if(address !== 'Dhaka'){
    console.log('Only Dhakaiya pola needed.')
}
else if(age < 21){
    console.log('Hey kid what are you doing here. Grow up first!!')

}
else if(jobCriteria !== 'governmentJob') {
    console.log('We only want Shorkai Takla . private job has no Garunttee')
}
else{
    console.log('Congratulation you qualified to marry my daughter!!')
}
// Marrige system ends here

