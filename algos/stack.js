
// stack node
class StackNode{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// stack
class Stack {
    constructor(){
        this.top = null;
        this.length = 0;
    }

    display(){
        let nextNode = this.top;
        let itemIndex = 0
        while(nextNode){
            console.log("Item " + itemIndex + ": "+nextNode.data)
            nextNode = nextNode.next;
            itemIndex++;
        }
    }

    isEmpty(){
        if(this.top == null){ return true; }
        return false;
    }

    push(item){
        let newNode = new StackNode(item);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this.length;
    }

    peek(){
        return this.top;
    }

    peekAtIndex(index){
        if(this.size() < index){
            return null;
        }
        
        let thisNode = this.top;
        for(var i = 0; i < index; i++){
            thisNode = thisNode.next;
        }
        return thisNode;
    }

    pop(){
        if(this.isEmpty()){ return undefined; }
        let oldTop = this.top;
        this.top = oldTop.next;
        this.length--;
        return oldTop;
    }

    size(){
        return this.length;
    }
}

// ## TEST CASES ##

let plateStack = new Stack();

plateStack.push("item")
plateStack.push("time")
plateStack.push("meti")
plateStack.push("emit")

plateStack.display();