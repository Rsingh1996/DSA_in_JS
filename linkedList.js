// Linked List - Linear Data structure
// Operation - Insertion(beginning/end/given index), Deletion(item from given index or value) and Search
/* Usage : 
- All applications of stack and queue
- Image viewer
*/ 
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
    
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        } else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else {
            let prev = this.head;
            while(prev.next){
                prev = prev.next
            }
            prev.next = node;
        }
        this.size++;
    }
    
    print(){
        if(this.isEmpty()){
            console.log(`List is Empty`);
        } else {
            let current = this.head;
            let listValues = '';
            while(current){
                listValues += `${current.value} `
                current = current.next;
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();
console.log('List is ? : ',list.isEmpty()); // List is ? :  true
console.log('List Size : ',list.getSize()); // List Size :  0
list.prepend(10)
list.print(); // 10
list.prepend(20)
list.prepend(30)
console.log('List is ? : ',list.isEmpty()); // List is ? :  false
console.log('List Size : ',list.getSize()); // List Size :  3
list.print(); // 30 20 10 
list.append(40);
list.append(50);
list.append(60);
list.print(); // 30 20 10 40 50 60 
