function handleClick() {
  const randomNumber10 = Math.random() * 10;

if (randomNumber10 >= 7) {console.log("high");}
else if (randomNumber10 >= 3 && randomNumber10 < 7) {console.log("middle");}
else {console.log("low");}

  // if number is greater than 7 then say "high"
  // otherwise if number is greater than 3 then say "middle"
  // otherwise say "low"
}


// function handleClick() {
//   let age = parseInt(prompt("What is your age?"));

//   if (age >= 21) {
//     console.log("You are an adult");
//   } else if (age >= 13 && age < 21) {
//     console.log("You are a teenager");
//   } else {
//     console.log("You are a child");
//   }
// }