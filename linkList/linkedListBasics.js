// These are fundamental problems that involve basic operations like insertion, deletion, and traversal.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
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
    let outputList = "";
    while (current) {
      outputList += current.data + "~>";
      current = current.next;
    }
    console.log(outputList);
  }

  nodeCount() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  search(element) {
    let current = this.head;
    while (current) {
      if (current.data === element) {
        return `${current.data} exists`;
      } else {
        current = current.next;
      }
    }
    return `${element} not found`;
  }
  delete(value) {
    if (!this.head) {
      console.log("The list is empty.");
      return;
    }
    if (this.head.data == value) {
      this.head = this.head.next;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
    console.log(`${value} not found in the list.`);
  }
  insertAtBeginning(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  insertAtEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  insertAtPosition(value, position) {
    const newNode = new Node(value);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let currentPosition = 0;
    while (currentPosition !== null && currentPosition < position - 1) {
      current = current.next;
      currentPosition++;
    }
    if (currentPosition === null) {
      console.log(`Postion is out of bound`);
      return;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
//Traverse and print all elements in the linked list.
console.log("Linked List: ");
list.print(); // output 10~>20~>30~>40~>
//Search for a value in the linked list.
console.log(list.search(50)); // output - 50 not found

//Count the number of nodes in the linked list.
console.log("Number of nodes:", list.nodeCount()); // output - Number of nodes: 3

//Insertion in Linked List
//Insert at the beginning, end, or a specific position.
list.insertAtBeginning(50);
list.insertAtEnd(70);
list.insertAtPosition(100, 0);
list.insertAtPosition(150, 3);
list.print();
//Delete the first node, last node, or node at a specific position.
list.delete(10); // first node
list.print(); // output 20~>30~>40~>
list.delete(40); // last node
list.print(); // output 10~>20~>30~>

/*
Time Complexity - Big-O
Append: O(n)
Insert at Beginning: O(1)
Insert at a Specific Position: O(n)
Delete (by value): O(n)
Delete at Beginning: O(1)
Delete at End: O(n)
Search: O(n)
Traversal (print all elements): O(n)
Count Nodes: O(n)
*/
