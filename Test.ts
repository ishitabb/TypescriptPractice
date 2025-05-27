//A function that takes an array of numbers and returns their sum. 
// Use TypeScript to enforce that the input is an array of numbers.
function sumOfArray(a : number[]) : number {
    return a.reduce((sum, num) => sum + num,0 )
}

console.log(sumOfArray([3,5]))