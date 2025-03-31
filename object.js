const obj = {
  name : 'Rahul',
  age : 28,
  'key-three' : true,
  seeMyName : function(){
    console.log(this.name);
  }
}
obj.hobby = 'Sketching';
obj.city = 'Bangalore';

console.log(obj.name); // output - Rahul
console.log(obj['age']); // output - 28
console.log(obj['key-three']); // output - true
console.log(obj); 
/* output - {
  name: 'Rahul',
  age: 28,
  'key-three': true,
  seeMyName: [Function: seeMyName],
  hobby: 'Sketching',
  city: 'Bangalore'
}
*/
delete obj.city;
console.log(obj);
/* output - {
  name: 'Rahul',
  age: 28,
  'key-three': true,
  seeMyName: [Function: seeMyName],
  hobby: 'Sketching'
}
*/
obj.seeMyName(); // output - Rahul
const keys = Object.keys(obj);
console.log('\n keys', keys);
/* output - keys [ 'name', 'age', 'key-three', 'seeMyName', 'hobby' ]
*/
const values = Object.values(obj);
console.log('\n values', values);
/* output -  values [ 'Rahul', 28, true, [Function: seeMyName], 'Sketching' ]
*/
const entries = Object.entries(obj);
console.log('\n entries', entries);
/* output -  entries [
  [ 'name', 'Rahul' ],
  [ 'age', 28 ],
  [ 'key-three', true ],
  [ 'seeMyName', [Function: seeMyName] ],
  [ 'hobby', 'Sketching' ]
]
*/

// Big-O time complexity 
/*
insert - O(1)
remove - O(1)
access - O(1)
searhc - O(n)
Object.keys() - O(n)
Object.values() - O(n)
Object.entries() - O(n)
