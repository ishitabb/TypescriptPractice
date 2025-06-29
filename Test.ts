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
//1. Program to create a list of key value pairs, fetch keys dynamically and assign values dynamically, use value in a function
let obj : {[testKey: string] : [testValue : string] } = {}
let sampleObjKeys = ['key1', 'key2', 'key3']
let sampleObjValues = ['value1', 'value2', 'value3']

function setObjItem(passedKey:any, passedValue: any){
    obj[passedKey] = passedValue
    console.log(obj)
}

setObjItem(sampleObjKeys[0], sampleObjValues[0])
const nextKey = sampleObjKeys.find(item => item === 'key2')
const nextValue= sampleObjValues.find(item => item ==='value2')
setObjItem(nextKey, nextValue)

//2. Create a function that reverses a string. Ensure the input is typed as a string in TypeScript.
// Why It’s Useful: Practices string manipulation and type safety.
// Example: Input: "hello" → Output: "olleh"
let sampleString = 'sample string'
let l = sampleString.length
let reverseSampleString = ''
for (let i=l-1; i>=0; i--) {
    reverseSampleString = reverseSampleString+sampleString[i]
}
console.log(reverseSampleString)

//standard approach
function reverseString(str: string): string {
    // Method 1: Using split, reverse, and join
    return str.split('').reverse().join(''); //split creates array of characters in string, reverse reverses the array, join joins the characters and forms a string

    // Method 2: Using spread operator and reverse
    // return [...str].reverse().join('');

    // Method 3: Manual iteration (loop)
    /*
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
    */

    // Method 4: Using recursion
    /*
    if (str === '') return '';
    return reverseString(str.slice(1)) + str[0]; // Recursively processes the string by taking the first character and appending it to the reversed remainder. Slice function removes character from string. 1 is the position to start with.
    */
}

// Example usage
const input: string = "Hello, World!";
const reversed: string = reverseString(input);
console.log(`Input: ${input}`); // Output: Input: Hello, World!
console.log(`Reversed: ${reversed}`); // Output: Reversed: !dlroW ,olleH

//3. Write a function to check if a string is a palindrome (reads the same forward and backward). Use TypeScript to type the input and output.
// Why It’s Useful: Reinforces string manipulation and boolean return types.
// Example: Input: "racecar" → Output: true; Input: "hello" → Output: false

function checkPallindrome(str: string) {
    let revstr : string = str.split('').reverse().join('')
    let answer : boolean
    if (str === revstr){answer = true}
    else {answer = false} 
    //console.log(answer)
return answer
}
let bool = checkPallindrome('chalyaaraaylahc')
console.log(bool)

//4. Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz". Use TypeScript to type the input as a number.
// Why It’s Useful: Builds logic for conditionals and loops.
// Example: Input: 5 → Output: 1, 2, Fizz, 4, Buzz

function fizzBuzz(n: number){
    let fb : any[] =[]
    for ( let i : any = 1; i<=n; i++) {
        if (i % 3 == 0 && i %5 != 0) {
            fb.push('Fizz')
        }
        else if (i % 5 == 0 && i % 3 != 0) {
            fb.push('Buzz')
        }
        else if (i % 5 == 0 && i % 3 == 0) {
            fb.push('FizzBuzz')
        }
        else {
            fb.push(i)
        }
    }
    return fb
}

console.log(fizzBuzz(20))

//5. Write a function to find the largest number in an array. Use TypeScript to ensure the array contains only numbers.
// Why It’s Useful: Practices array iteration and comparison logic.
// Example: Input: [3, 1, 4, 1, 5] → Output: 5
function arrayLargestNum(array5: number[]) {
    for (let i =0 ; i <array5.length ;  i++) {
        array5.sort((a, b) => a - b)
    }
    
    console.log(array5)
}
let arrayPassed5 : number[] = [3,5,1,88,55,9,34,0,55,6]

arrayLargestNum(arrayPassed5)


// w3schools oops using typescript
