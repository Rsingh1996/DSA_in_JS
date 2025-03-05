// Problem 1: Gievn a number 'n', find the first 'n' elements of the fabonacci sequence.
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

// Problem 2: Gievn an natural number 'n', determine if the number is prime of not.
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
