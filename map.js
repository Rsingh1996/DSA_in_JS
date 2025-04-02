const map = new Map([['a', 1], ['b', 2]]);
map.set('c', 3);
console.log(map.has('b')); // output - true
for(const [key, value] of map){
  console.log(`${key} : ${value}`);
} /* output -
a : 1
b : 2
c : 3
*/
console.log(map.size); // output - 3
map.delete('b');
console.log('After Delete operation')
for(const [key, value] of map){
  console.log(`${key} : ${value}`);
} /* output -
a : 1
c : 3
*/
map.clear();
console.log('After Clear')
for(const [key, value] of map){
  console.log(`${key} : ${value}`);
}
 /* output - Nothing is there no show after clear 

*/
