// function divide(a, b) {
//     if(b == 0) {
//         throw 'Zero Division Error!';
//     }
//     return a / b;
// }

// let result = divide(8, 0)
// console.log(result);

// let items = [1, 5, 9, 11];
// for (let item of items) {
//     console.log(item);
// }

// alert("Press OK to enter!");


// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints += 50;
// console.log(bonusPoints);

// bonusPoints -= 75;
// console.log(bonusPoints);

// bonusPoints += 45;
// console.log(bonusPoints);


// function printNum() {
//     console.log("42")
// }

// printNum();

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// 1. Grab the save-el paragraph and store it in a variable called saveEl
let count = 0;
let countElement = document.getElementById("count-elm");
let saveEl = document.getElementById("save-el");
function increment() {
  //console.log("Increment works!");
  count +=1;
  countElement.textContent = count;
  //console.log("Counter: " + count);
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  // 3. Render the variable in the saveEl using innerText
  // NB: Make sure to not delete the existing content of the paragraph
  let countDash = count + " - ";
  saveEl.textContent += countDash;
  countElement.textContent = 0;
  count = 0;
  //console.log(count);
}

// Create a function that logs out the sum of all the lap times
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function addLaps() {
    let totalTime = lap1 + lap2 + lap3;
    //console.log("Total time: " + totalTime);
}

addLaps();
// Create a function that increments the lapsCompleted variable with one
// Run it three times

let lapsCompleted = 0;
function completeLaps() {
  lapsCompleted++;
}

completeLaps();
completeLaps();
completeLaps();
//console.log("Laps completed: " + lapsCompleted);




// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
// Render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById("welcome-el");
let name = "Ismail";
let greeting = "Welcome ";

welcomeEl.innerText = greeting + name;
