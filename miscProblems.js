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
console.log(cartesianProduct(A,B)); // Output: [ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ]
