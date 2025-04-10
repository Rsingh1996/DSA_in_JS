// Circular Queue | Circular or Ring Buffer - FIFO | Fixed in size and single block of memory is used
// Operation - Enqueue(rear/tail end) and Dequeue(front/head end)
// Reuse empty block created during Dequeue Op
/* Usage : When working with queue of fixed maximum size.  Process in Order
- Clock
- Streaming data
- Traffic lights
*/

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log('Queue is full');
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  printQueue() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
    } else {
      let i;
      let str = '';
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + ' ';
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

// Example usage:
const queue = new CircularQueue(5);
console.log(queue.isEmpty()); // output - true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.isFull()); // output - true
queue.printQueue(); // output - 10 20 30 40 50
console.log(queue.dequeue()); // output - 10
queue.printQueue(); // output - 20 30 40 50
console.log(queue.peek()); // output - 20
queue.enqueue(60);
queue.printQueue(); // output - 20 30 40 50 60

/* 
Time Complexities (Big-O Notation):
enqueue: O(1) - Adding an element to the rear of the queue is a constant-time operation.
dequeue: O(1) - Removing an element from the front of the queue is a constant-time operation.
peek: O(1) - Accessing the front element of the queue is a constant-time operation.
isFull: O(1) - Checking if the queue is full is a constant-time operation.
isEmpty: O(1) - Checking if the queue is empty is a constant-time operation.
printQueue: O(n) - Printing all elements in the queue takes linear time relative to the number of elements.
*/
