class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    traverse(){
        let current = this.head;

        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    pop(){
        if(!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(!this.length){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    //removing node at the start
    shift(){
        if(!this.head) return undefined;
        var current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }

        return current;
    }

    //adding node at the start
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        
        let counter = 0,current = this.head;

        while(counter !== index){
            current = current.next;
            counter++;
        }

        return current
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true
        }
        return false;
    }
}

const myList = new SinglyLinkedList();
myList.push("Hi")
myList.push("this")
myList.push("is")
myList.push("Praveen")
myList.push("!!!")
myList.push(":)")
// myList.traverse()
// console.log(myList.pop());
// console.log(myList.pop());
// console.log(myList.pop());
// console.log(myList.pop());
// console.log(myList.pop());
// console.log(myList.pop());
// console.log(myList.pop());
// console.log(myList.shift());
// console.log(myList.shift());
// console.log(myList.shift());
// console.log(myList.shift());
// console.log(myList.shift());
// console.log(myList.shift());
// console.log(myList.shift());
// console.log(myList.shift());
// console.log(myList.unshift("new"));
// console.log(myList.get(-1))
// console.log(myList.get(0))
// console.log(myList.get(1))
// console.log(myList.get(2))
// console.log(myList.get(3))
// console.log(myList.get(4))
// console.log(myList.get(5))
// console.log(myList.get(6))
// console.log(myList.get(7))
console.log(myList.set(0, "hello"))
console.log(myList.set(-1, "hello"))
console.log(myList);