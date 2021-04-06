class DoublyLinkedListNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;

    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


 push(val) {
        const newNode = new DoublyLinkedListNode(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
}

 [Symbol.iterator]() {
        let current = this.head;
        return new Object ({
           next: () =>  {
               const isDone = !Boolean(current);
               const value = isDone ? undefined : current.value;
               current = isDone ? null : current.next;
               return {
                   value,
                   done: isDone,
               }
           }
      })
 }

}
 const a = new DoublyLinkedList;
a.push(12);
a.push(5);
a.push('g');
a.push(true);
console.log(a);
for(let key of a) {
    console.log(key);
}