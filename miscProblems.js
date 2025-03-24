// Problem - Given two finite non-empty sets, find their Cartesian Product.
// Const A = [1,2] Const b = [3,4,5]
// AxB = [ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ]

const cartesianProduct = (arr1, arr2) => {
    let result = [];
    for(let i = 0; i < arr1.length; i++){
        for(j = 0; j < arr2.length; j++){
            result.push([arr1[i], arr2[j]]);
        }
    }
    return result;
}
const A = [1,2];
const B = [3,4,5];
console.log(cartesianProduct(A,B)); // Output: [ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ] Big-O = (n*m)

// Problem - Given a staircase of 'n' steps, count the number of distinct ways to climb to the top. you can either climb 1 setp or 2 steps at a time.
// n = 1, climbingStaircase(1) = 1    
// n = 2, climbingStaircase(2) = 2
// n = 2, climbingStaircase(3) = 3
// n = 2, climbingStaircase(4) = 5

const climbingStaircase = (n) => {
    if(n < 1) return `Invalid input`;
    const numberOfWays = [1,2];
    for(let i = 2; i <=n; i++){
        numberOfWays[i] = numberOfWays[i-1] + numberOfWays[i-2]
    }
    return numberOfWays[n-1]
    
}
console.log(climbingStaircase(4)); // Output: 5 Big-O = O(n)
