const arr = [1, 2, 3, 'rahul'];
arr.push('Singh'); // Big-O = O(1)
arr.unshift('Bangalore'); // Big-O = O(n)
arr.push(5) // Big-O = O(1)

for(let item of arr){
  console.log(item);
}
console.log('----------------')
arr.pop() // Big-O = O(1)
arr.shift() // Big-O = O(n)
for(let item of arr){
  console.log(item);
}
const newArr = [1,2,3,4,5]
const newMappedArr =  newArr.map(item => item*2);
console.log(newMappedArr); // Big-O = O(n)

const newFilterredArr = newArr.filter(item => item%2);
console.log(newFilterredArr); // Big-O = O(n)

const newReducedArr = newArr.reduce((acc, current) => acc + current);
console.log(newReducedArr); // Big-O = O(n)

const findResult = newArr.find(item => item > 2);
console.log(findResult); // Big-O = O(n)

const slicedResult = newArr.slice(0,3);
console.log(slicedResult); // Big-O = O(n)

const splicedResult = newArr.splice(0,3,10,20,30);
console.log(splicedResult); // Big-O = O(n)
console.log(newArr);

const ifExist = newArr.includes(50);
console.log(ifExist); // Big-O = O(n)

const reverse = newArr.reverse();
console.log(reverse); // Big-O = O(n)
