// Gievn a number 'n', find the first 'n' elements of the fabonacci sequence.
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
