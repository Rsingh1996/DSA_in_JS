//Problem 1: Gievn an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if target element not found.
// arr = [-5, 2, 10, 4, 6] t= 10 -> should return 2.

const linearSearch = (arr, t) => {
    let arrayLength = arr.length;
    
    for(let i = 0; i < arrayLength; i++ ){
        if(arr[i] === t){
            return i;
        }
    }
 return -1
}
console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // Output: 2
console.log(linearSearch([-5, 2, 10, 4, 6], 4));  // Output: 3
console.log(linearSearch([-5, 2, 10, 4, 6], 6));  // Output: 4
console.log(linearSearch([-5, 2, 10, 4, 6], 1));  // Output: -1
