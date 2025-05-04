// Linked List - Linear Data structure
// Operation - Insertion(beginning/end/given index), Deletion(item from given index or value) and Search
/* Usage : 
- All applications of stack and queue
- Image viewer
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return console.log("invalid index");
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return `Invalid index`;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
      return removedNode.value;
    }

    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log(`List is Empty`);
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return `${value} is removed from list`;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return `${value} is removed from list`;
      }
      return null;
    }
  }
  search(value) {
    if (this.isEmpty()) {
      return `List is Empty`;
    }
    let i = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return `${value} is found at index ${i}`;
      }
      current = current.next;
      i++;
    }
    return -1;
  }

  print() {
    if (this.isEmpty()) {
      console.log(`List is Empty`);
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log("List is ? : ", list.isEmpty()); // List is ? :  true
console.log("List Size : ", list.getSize()); // List Size :  0
list.prepend(10); // Big-0 = O(1)
list.print(); // 10 // Big-0 = O(n)
list.prepend(20); // Big-0 = O(1)
list.prepend(30); // Big-0 = O(1)
console.log("List is ? : ", list.isEmpty()); // List is ? :  false
console.log("List Size : ", list.getSize()); // List Size :  3
list.print(); // 30 20 10 // Big-0 = O(n)
list.append(40); // Big-0 = O(n)
list.append(50); // Big-0 = O(n)
list.append(60); // Big-0 = O(n)
list.print(); // 30 20 10 40 50 60  // Big-0 = O(n)
list.insert(70, 2);
list.insert(100, 4);
list.print(); // 30 20 70 10 100 40 50 60
console.log(list.removeFrom(-9)); // Invalid index
console.log(list.removeFrom(4)); // 100 // Big-0 = O(n)
list.print(); // 30 20 70 10 40 50 60 / Big-0 = O(n)
console.log(list.removeValue(50)); // 50 is removed from list
list.print(); // 30 20 70 10 40 60 / Big-0 = O(n)
