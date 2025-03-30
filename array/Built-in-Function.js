const arr = [1, 2, 3, 'rahul'];
arr.push('Singh');
arr.unshift('Bangalore');
arr.push(5)

for(let item of arr){
  console.log(item);
}
console.log('----------------')
arr.pop()
arr.shift()
for(let item of arr){
  console.log(item);
}
const newArr = [1,2,3,4,5]
const newMappedArr =  newArr.map(item => item*2);
console.log(newMappedArr);

const newFilterredArr = newArr.filter(item => item%2);
console.log(newFilterredArr);

const newReducedArr = newArr.reduce((acc, current) => acc + current);
console.log(newReducedArr);

const findResult = newArr.find(item => item > 2);
console.log(findResult);

const slicedResult = newArr.slice(0,3);
console.log(slicedResult);

const splicedResult = newArr.splice(0,3,10,20,30);
console.log(splicedResult);
console.log(newArr);

const ifExist = newArr.includes(50);
console.log(ifExist);

const reverse = newArr.reverse();
console.log(reverse);
