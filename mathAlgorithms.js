// Problem 1: Gievn a number 'n', find the first 'n' elements of the fibonacci sequence.
const fibonacci = (n) => {
    if(n < 2){
        return `Invalid value to get fabinacci sequence`;
    }
    let result = [0,1];
    if(n === 2) {
        return result;
    }
    for(let i = 2; i < n; i++){
        result[i]= result[i-2] + result[i-1];
    }
    return result;
}

console.log(fibonacci(7)); // output - [0,1,1,2,3,5,8] // Big-O = O(n)

// Problem 2: Gievn an integer 'n', find the factorial of that integer.
const factorial = (n) => {
    if(n < 0){
        return `Required non-negative integer to get factorial`
    }
    let result = 1;
    for(let i = n; i > 1; i--){
        result = result*i;
    }
    return result;
}
console.log(factorial(5)); // output = 120 // Big-O = O(n)

// Problem 3: Gievn an natural number 'n', determine if the number is prime or not.
const isPrime = (n) => {
    if(n <2 ){
        return false;
    }
    for(let i = 2; i < n; i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(9)); // output = false // Big-O = O(n)
console.log(isPrime(11)); // output = true // Big-O = O(n)

const isPrimeOptimized = (n) => {
    if(n <2 ){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrimeOptimized(27)); // output = false // Big-O = O(sqrt(n))
console.log(isPrimeOptimized(47)); // output = true // Big-O = O(sqrt(n))

// Problem 4: Gievn a positive integer 'n', determine if the number is power of 2 or not.

const isPowerOfTwo = (n) => {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}
console.log(isPowerOfTwo(9)); // output = false // Big-O = O(logn)
console.log(isPowerOfTwo(16)); // output = true // Big-O = O(logn)

const isPowerOfTwoBitWise = (n) => {
    if (n < 1) {
        return false;
    }
    return (n & (n-1)) === 0;
}
console.log(isPowerOfTwoBitWise(9)); // output = false // Big-O = O(1)
console.log(isPowerOfTwoBitWise(64)); // output = true // Big-O = O(1)

// Problem 4: Gievn a number 'n', find the nth elements of the fibonacci sequence using recursion.
const recursiveFibonacci = (n) => {
    if(n < 2) {
        return n;
    }
    return recursiveFibonacci(n-1)+recursiveFibonacci(n-2);
}

console.log(recursiveFibonacci(6)); // output - 8 // Big-O = O(2^n)

// Problem 2: Gievn an integer 'n', find the factorial of that integer using recursion.
const recursiveFactorial = (n) => {
    if(n < 0){
        return `Required non-negative integer to get factorial`
    }
    if(n === 0) {
        return 1;
    }
    return n*recursiveFactorial(n-1);
}
console.log(recursiveFactorial(4)); // output - 24 // Big-O = O(n)
