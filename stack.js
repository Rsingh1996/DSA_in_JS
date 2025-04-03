// Stack - LIFO
// Operation - Push and Pop
/* Usage : Trace Back
- Browser history tracking
- Undo operation when typing
- Expression conversions
- Call stack in JS runtime
*/

class Stack {
  constructor(){
    this.item = [];
  } 

  // Push an element onto the stack
  push(item){
    this.item.push(item);
    return this.item;
  }

  // Pop an element from the stack
  pop(item){
    if(this.isEmpty()){
      return "Underflow";
    }
    return this.item.pop();
  }
  // Retrieves the item at the top of the stack without removing it.
  peek(){
    if(this.isEmpty()){
      return "No elements in Stack";
    }
    return this.item[this.item.length - 1];
  }
  // Return number of item in stack
  size(){
    return this.item.length;
  }
  // Check if stack is empty
  isEmpty(){
    return this.item.length === 0;
  }
  // Print the item of stack
  printStack(){
    let str = '';
    for(let i = 0; i < this.item.length; i++){
      str += this.item[i]+ ' ';
    }
    return str;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack()) // output - 10 20 30
console.log(stack.size()) // output - 3
console.log(stack.peek()) // output - 30
console.log(stack.pop()) // output - 30
console.log(stack.isEmpty()) // output - false
console.log(stack); // output - Stack { item: [ 10, 20 ] }
/* 
Time Complexities (Big-O Notation):
1. push(item): O(1) - Adding an item to the end of an array is a constant-time operation.
2. pop(): O(1) - Removing the last item from an array is also a constant-time operation.
3. peek(): O(1) - Accessing the last element of the array is direct and takes constant time.
4. size(): O(1) - Accessing the length of an array is constant time.
5. isEmpty(): O(1) - Checking if the array is empty is a simple comparison.
*/
