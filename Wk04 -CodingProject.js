



/**
Promineo Tech Assignment Week 04
Author:  Juan Mejia
  Subject:  Variables and Operations Lab
  Week 04 - Coding Assignment   

*/

/**


 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
       - Do not use numbers to reference the last element, find it programmatically.
       - ages[7] - ages[0] is not allowed!
 */

// Write code here:

//Create an array of ages

var ages = [3,9, 23, 64, 2, 8, 28, 93];

//Subtracting the value of the first element from the last element of the array

var lastElem = ages.length -1;
var ageDifference = ages[lastElem] - ages[0];

//Output of result
console.log("The subtraction of the last value from the first value: ", ageDifference);

//b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

//Adding new age to array

ages.push(55);

//Repeating steps above to see if it repeats and works dynamically

var lastElem = ages.length -1;
var ageDifference = ages[lastElem] - ages[0];

//Output of result
console.log("The new subtraction of the last value from the first value after adding new value: ", ageDifference);


//c. Use a loop to iterate through the array and calculate the average age.

//Calculating the average using a loop

//deaclare the variable of sum
var sum = 0;

//loop to add the elements in the array and get the sum
for (var i = 0; i < ages.length; i++) {

    sum += ages[i];
}

var averageAge = sum /ages.length;

console.log("The average age is: ", averageAge);


/**
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

 */

//Write code here

//Creating Array of Names

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//a. Use a loop to iterate through the array and calculate the average number of letters per name.

var totalLetters = 0;

for (var i = 0; i < names.length; i++){

    totalLetters += names[i].length;
}

//Declaring the average

var averageLetters = totalLetters /names.length;

console.log("This is the average number of letters per name: ", averageLetters);

//b.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 


//Concatnating(joining) all names together using a loop

var joinNames = " ";
for ( var i = 0; i < names.length; i++){

    joinNames += names[i] + " ";

}

console.log("The concatenated names separated by a space: ", joinNames.trim())

/**

3. How do you access the last element of any array?

 */

console.log("You can access the last element in any array by declaring a variable using the index notation with the length of the array minus 1.  Ex. var lastElem = array.length -1; ")

/**
4.How do you access the first element of any array? 

 */

console.log("You can access the first element in any array by declaring a variable using the index notation 0. Ex. var firstElem = array[0];");

/**
5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

 */

//Created a new array called namelengths

let nameLengths = [];

//Wrote a loop to iterate over the previously created names and added the length of each to the namelengths array.
//Pulls names of the previous array
for (let name of names) [

    nameLengths.push(name.length)
]

//there are (6) elements in the array [3, 5, 3, 5, 4, 3] length of each name
console.log("The length of each name is ", nameLengths);

/**
 
6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
 */

for (let i = 0; i < nameLengths.length; i++) {

    sum += nameLengths[i];
}

console.log("Sum of the elements in the array: ", sum);

/**
 
7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
  
 */

//Function with two parameters as arguments
function joinWord(word, n) {
    let result = "";
    
    for (let i = 0; i < n; i++) {
      result += word;
    }
    return result;
  }
  
//Declaring variable to use the function and define the parameters
  var joinString = joinWord("Hello", 3);

  // Result should be : "HelloHelloHello"
  console.log(joinString); 

/**
8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

 */


function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  
  let fullName = getFullName("John", "Smith");

  //Result should be John Smith
  console.log(fullName);

/**
 
9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

 */

function isSumMoreThan100(numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    
    return sum > 100;
  }
  
  let numbers = [72, 12, 42];
  let result = isSumMoreThan100(numbers);
  console.log(result); 

  /**
   
  10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
   */

function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; 
    }
    
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    
    return sum / numbers.length;
  }
  
  let nums = [37, 64, 96, 72];
  let average = calculateAverage(nums);

  console.log(average); 


  /**
   
  11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
    
   */

function compareAvg(array1, array2) {
    function calculateAvg(numbers) {
      if (numbers.length === 0) {
        return 0; // Handle the case of an empty array
      }
      
      let sum = 0;
      
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      
      return sum / numbers.length;
    }
  
    let average1 = calculateAvg(array1);
    let average2 = calculateAvg(array2);
  
    return average1 > average2;
  }
  
  var array1 = [50, 60, 80, 90];
  var array2 = [10, 15, 25, 40];
  var results = compareAvg(array1, array2);
  console.log(results); 


  /**
   12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
  
   */


function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
  }
  
  var isHot = true;
  var money = 17.00;
  var willBuy = willBuyDrink(isHot, money);


  console.log(willBuy);


/**
 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
 * 
 */

//To determine whether or not if I have enough money to make a purchase, if not, I'll use my credit card.

//Defined two parameters for my function. The cashOnHand and the purchaseAmount. 
 function useCardNoCash(cashOnHand, purchaseAmount) {
    if ( cashOnHand !== "number" ||  purchaseAmount !== "number") {
      return "I don't have enough cash on hand. I'll just use my credit card.";
    }
  
    if (cashOnHand >= purchaseAmount) {
      return "cash";
    } else {
      return "credit card";
    }
  }
  

  