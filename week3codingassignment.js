// 1 Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 

// Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console. 

// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths). 

// Use a loop to iterate through the array and calculate the average age. Print the result to the console. 
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let firstElement = ages [0];
let lastElement = ages [ages.length - 1];

    console.log (lastElement - firstElement);

ages.push(27);
firstElement = ages [0];
lastElement = ages [ages.length - 1];

    console.log (lastElement - firstElement);

let sum = 0

for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
}

console.log(sum / ages.length);

//2 Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. 
// Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console. 
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console. 
 
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let total = 0
for (i = 0; i < names.length; i++) {
    let userName = names[i];
    let totalLetters = userName.length;
    totalLetters = totalLetters + total;
}


let allNames = "";
for( let i = 0; i < names.length; i++) {
    let name = names[i];
    allNames = allNames + " " + name;
}
    console.log (allNames);
//3 How do you access the last element of any array? 
     // let lastElement = array [array.length -1];
//4 How do you access the first element of any array? 
     // let firstElement =array[0];
//5 Create a new array called nameLengths. Write a loop to iterate over the previously created 
//names array and add the length of each name to the nameLengths array. 


let nameLengths = [];

  for( let i = 0; i < names.length; i++){
    let totalLetters = 0
    let currentName = names[i];
    let numLetters = currentName.length;
    totalLetters = totalLetters + numLetters;
        nameLengths.push (totalLetters);
  } 
  
  console.log (nameLengths);

//6  Write a loop to iterate over 
// the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console. 
sum = 0
for (let i =0; i < names.length; i++){
sum += nameLengths[i];
}
console.log (sum);

//7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number
// of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). 

function printFunction (word, n) {
    console.log (word + n);
}
    printFunction("Hello", "Hello".repeat (2));

//8  Write a function that takes two parameters, firstName and lastName, and returns a full name 
// (the full name should be the first and the last name separated by a space). 
function twoNames (firstName, lastName){
    console.log (firstName + " " + lastName);
}
    twoNames ("Lucas", "Erickson");

// 9 Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. 

function arraySum (newArray) {
    let sum = 0;
    for (let i =0; i < newArray.length; i++){
    sum += newArray[i];
    } if (sum > 100) {
        return true;
    }   else
    return false;
}
    console.log (arraySum ([12, 75, 3]));
    console.log (arraySum ([32, 32, 45]));

    //10 Write a function that takes an array of numbers and returns the average of all the elements in the array. 

function average( avgOfArrays ){
        let sum = 0;
        for ( let i = 0; i < avgOfArrays.length; i++ ){
            sum += avgOfArrays[i];
        }
        return ( sum / avgOfArrays.length );
    }
    
    console.log( average( [ 1, 2, 3, 2 ] ) );
    console.log( average( [ 5, 5, 5, 5 ] ) );

// 11 Write a function that takes two arrays of numbers and returns true if the average of the elements in the first 
// array is greater than the average of the elements in the second array. 

function twoArrays (firstArray, secondArray){
    if (average (firstArray) > average (secondArray)) {
    return true; 
    }
        return false;
}

console.log (twoArrays( [ 5, 4, 9, 10], [4, 5, 6, 8]));
console.log (twoArrays([ 3, 2, 4, 5], [7, 8, 6, 8]));


// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and 
// returns true if it is hot outside and if moneyInPocket is greater than 10.50. 
let isHotOuside = true
function willBuyDrink (isHotOutside, moneyInPocket){
    if (moneyInPocket > 10.50 && isHotOuside === true) {
    return true;
    }
    return false;
}
    console.log (willBuyDrink(true, 9.25))

 //13 Create a function of your own that solves a problem. In comments, write what the function does and why you created it. 

    function doINeedGas (tankAtE, moneyInBank) {
        if ((tankAtE === true) && (moneyInBank > 0)) {
            return ('Put Gas In!!');
        }
        if  ((tankAtE === false) && (moneyInBank > 0)) {
            return('Keep driving!!');
        }   return ('Call for help');
        
    }
        console.log (doINeedGas (false, 4));
        console.log(doINeedGas(true, 12));
        console.log(doINeedGas(true, 0));