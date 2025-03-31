const set = new Set([1,2,3]);
set.add(4);
console.log(set.has(4)); // output - true
set.delete(3)
console.log(set.size); // output - 3

for(const item of set){
  console.log(item)
} // // output - 1 2 4
set.clear();

for(const item of set){
  console.log('item', item)
} // // output - nothing will be there in set
