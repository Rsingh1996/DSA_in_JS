// These are fundamental problems that involve basic operations like insertion, deletion, and traversal.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const list = new Linklist();
list.append(10);
list.append(20);
list.append(30);

//Traversal of Linked List
//Traverse and print all elements in the linked list.
console.log("Linked List: ");
list.print();

//Insertion in Linked List
//Insert at the beginning, end, or a specific position.

//Deletion in Linked List
//Delete the first node, last node, or node at a specific position.

//Search an Element in Linked List
//Search for a value in the linked list.

//Find the Length of the Linked List
//Count the number of nodes in the linked list.
