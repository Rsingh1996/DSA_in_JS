// Queue - FIFO
// Operation - Enqueue(rear/tail end) and Dequeue(front/head end)
/* Usage : Process in Order
- Printers 
- CPU task scheduling
- Callback queue in JS runtime to determine the code execution
*/

class Queue {
  constructor(){
    this.item = [];
  } 

  // add an element onto the queue
  enqueue(item){
    this.item.push(item);
    return this.item;
  }

  // remove an element from the queue
  dequeue(item){
    if(this.isEmpty()){
      return "Underflow";
    }
    return this.item.shift();
  }
  // Retrieves the item at the top of the queue without removing it.
  peek(){
    if(this.isEmpty()){
      return "No elements in Stack";
    }
    return this.item[0];
  }
  // Return number of item in queue
  size(){
    return this.item.length;
  }
  // Check if queue is empty
  isEmpty(){
    return this.item.length === 0;
  }
  // Print the item of queue
  printQueue(){
    let str = '';
    for(let i = 0; i < this.item.length; i++){
      str += this.item[i]+ ' ';
    }
    return str;
  }
}

const queue = new Queue();
console.log(queue.isEmpty()) // output - true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size()) // output - 3
console.log(queue.printQueue()) // output - 10 20 30
console.log(queue.dequeue()) // output - 10
console.log(queue.peek()) // output - 20
console.log(queue.isEmpty()) // output - false
console.log(queue); // output - Queue { item: [ 20, 30 ] }
/* 
Time Complexities (Big-O Notation):
1. enqueue(item): O(1) - Adding an item to the end of an array is a constant-time operation.
2. dequeue(): O(n) - Removing the first item from an array requires shifting all elements, which is O(n).
3. peek(): O(1) - Accessing the last element of the array is direct and takes constant time.
4. size(): O(1) - Accessing the length of an array is constant time.
5. isEmpty(): O(1) - Checking if the array is empty is a simple comparison.
*/
