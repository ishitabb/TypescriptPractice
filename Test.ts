//A function that takes an array of numbers and returns their sum. 
// Use TypeScript to enforce that the input is an array of numbers.
function sumOfArray(a : number[]) : number {
    return a.reduce((sum, num) => sum + num,0 )
}

console.log(sumOfArray([3,5]))



// A function that returns random numeric value
function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomValue() {
    return (Math.random());
}

var t = getRandomNumber(9,44)
var y = getRandomValue()
console.log(t,y)

// A function that returns random numeric value with a keyword
function getRandomBusinessValue(min: number, max: number) {
    return ('Business'+(Math.floor(Math.random() * (max - min + 1)) + min));
}

var business = getRandomBusinessValue(0,1000)
console.log(business)
//1.  Program to create a list of key value pairs, fetch keys dynamically and assign values dynamically, use value in a function





//2. Create a function that reverses a string. Ensure the input is typed as a string in TypeScript.
// Why It’s Useful: Practices string manipulation and type safety.
// Example: Input: "hello" → Output: "olleh"

//3. Write a function to check if a string is a palindrome (reads the same forward and backward). Use TypeScript to type the input and output.
// Why It’s Useful: Reinforces string manipulation and boolean return types.
// Example: Input: "racecar" → Output: true; Input: "hello" → Output: false

//4. Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz". Use TypeScript to type the input as a number.
// Why It’s Useful: Builds logic for conditionals and loops.
// Example: Input: 5 → Output: 1, 2, Fizz, 4, Buzz

//5. Write a function to find the largest number in an array. Use TypeScript to ensure the array contains only numbers.
// Why It’s Useful: Practices array iteration and comparison logic.
// Example: Input: [3, 1, 4, 1, 5] → Output: 5

// w3schools oops using typescript
