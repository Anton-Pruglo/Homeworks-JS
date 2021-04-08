class LinkedListIterator {
    #list = null;
    #current = null;

    constructor(list) {
        this.#list = list;
        this.#current = this.#list.head;
    }

    next() {
        const result = {
            value: this.#current?.value,
            done: !this.#current,
        }
        this.#current = this.#current?.next;
        return result;
    }
}

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
    pop() {
        if (this.length === 0) return undefined;
        const temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
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

    shift() {
        if (this.length === 0) return undefined;
        const temp = this.head;
        if (this.length === 1) {
             this.head = null;
             this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
        }

    unshift(val) {
        const newNode = new DoublyLinkedListNode(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    toArray() {
        const listNode = [];
        let currentNode = this.head;
        while (currentNode) {
            listNode.push(currentNode);
            currentNode = currentNode.next;
        }
        return listNode;
    }

    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;
        while (currNode) {
            nextNode = currNode.next;
            prevNode = currNode.previous;
            currNode.next = prevNode;
            currNode.previous = nextNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        this.tail = this.head;
        this.head = prevNode;
        return this;
    }

 [Symbol.iterator] = () => new LinkedListIterator(this);


}
 const a = new DoublyLinkedList;
a.push(true);
a.push(12);
a.push(5);
a.push('g');
a.push(true);
a.pop();
a.push('ga-ga-ga');
a.shift();
a.unshift(55555);
console.log(a);
for(let key of a) {
    console.log(key);
}
const b = a.toArray();
console.log(b);
a.reverse();
console.log(a);