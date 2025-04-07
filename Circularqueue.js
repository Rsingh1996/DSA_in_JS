// Circular Queue | Circular or Ring Buffer - FIFO | Fixed in size and single block of memory is used
// Operation - Enqueue(rear/tail end) and Dequeue(front/head end)
// Reuse empty block created during Dequeue Op
/* Usage : When working with queue of fixed maximum size.  Process in Order
- Clock
- Streaming data
- Traffic lights
*/

class Circularqueue{
  constructor(capacity){
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }
  isFull(){
      return this.currentLength === capacity;
  }
  isEmpty(){
    return this.currentLength === 0;
  }
  enqueue(element){
      if(!this.isFull()){
          this.rear = (this.rear+1)%this.capacity;
          this.items[this.rear] = element;
          this.currenLength += 1;
          if(this.front === -1){
              this.front = this.rear;
          }
  }
      }
    
  dequeue(){
      if(this.isEmpty()){
          return null;
      }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front += 1;
    this.currenLength -= 1;
    if(this.isEmpty()){
          this.front = -1;
          this.rear = -1;
      }
      return item;
  }
  
}
