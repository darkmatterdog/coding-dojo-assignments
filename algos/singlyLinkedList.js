class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    // constructor
    constructor() {
        this.head = null;
    }

    // list operators
    seedFromArr(vals) {
        for(var i = 0; i < vals.length; i++){
            this.insertAtBack(vals[i]);
        }
    }

    toArr() {
        let listArray = [];
        let pointer = this.head;
        while(pointer != null){
            listArray.push(pointer.data);
            pointer = pointer.next;
        }
        return listArray;
    }

    
    display(){
        if(this.isEmpty()){
            console.log("SLL is empty")
        }
        else{
            
            let nextItem = this.head
            let nodeIndex = 0; 
            while(nextItem != null){
                console.log("Node " + nodeIndex + ": " +nextItem.data);
                nextItem = nextItem.next;
                nodeIndex++;
            }
        }
    }


    concat(addList){
        let runner = this.getLastItem();
        runner.next = addList.head;
        return this;
    }


    // gets and checks
    isEmpty() {
        if(this.head != null){ return false }
        return true;
    }

    getItemAndPrevious(data){
        let nodeIndex = 0;
        let runner = this.head
        let previous = null;

        while(runner != null){
            if(runner.data == data){
                return {"index": nodeIndex, "node": runner, "previous": previous};
            }
            previous = runner;
            runner = runner.next;
            nodeIndex++;
        }
        return null;
    }

    getItemByIndex(nodeIndex){
        let thisNode = this.head;
        let thisNodeIndex = 0;

        while(thisNode != null){
            if(thisNodeIndex == nodeIndex){
                return thisNode;
            }
            thisNode = thisNode.next;
            thisNodeIndex++;
        }
        return null;
    }

    getListSize(){
        let runner = this.head;
        let size = 0;

        while(runner != null){
            size++;
            runner = runner.next;
        }
        return size;
    }

    contains(value){
        let item = this.getItemAndPrevious(value);

        if(item == null){
            console.log("Value not found");
            return false;
        }
        else{
            console.log("Found at node "+ item["index"]);
            return true;
        }
    }

    containsRecursive(val, current=this.head){
        if(current == null){
            return false;
        }

        else if(current.data == val){
            return true;
        }
        
        this.containsRecursive(val, current.next);
    }

    getLastItem(){
        return this.getItemByIndex(this.getListSize() - 1);
    }
    secondToLast(){
        return this.getItemByIndex(this.getListSize() - 2);
    }












    // reverse the list
    reverse(){
        if(this.isEmpty() || !this.head.next){
            this.display();
            return this;
        }

        let runner = this.head;
        let stepDad;

        let nodeHolder = runner.next;
        runner.next = null;

        while(nodeHolder){
            stepDad = nodeHolder;
            nodeHolder = nodeHolder.next;
            stepDad.next = runner;
            runner = stepDad;
        }

        this.head = runner;
        this.display();
        return this;
    }


    // find loop
    hasLoop(){
        if(this.isEmpty() || !(this.head.next)){ return false }

        let singleRunner = this.head;
        let doubleRunner = this.head.next;

        while(singleRunner.next && doubleRunner.next && doubleRunner.next.next){
            singleRunner = singleRunner.next;
            doubleRunner = doubleRunner.next.next;

            if(singleRunner === doubleRunner){ return true }
        }
        return false;
    }





    // inserts
    
    insertAtBack(data) {
        let item = new ListNode(data);
        if(this.isEmpty()){ this.head = item }
        else{
            this.getLastItem().next = item;
        }

        return item;
    }

    insertAtFront(data){
        let item = new ListNode(data);
        if(this.isEmpty()){ this.head = item }
        else{
            let oldHead = this.head;
            let newHead = new ListNode(data)
            newHead.next = oldHead;
            this.head = newHead;
        }
    }
    
    insertAtBackRecursive(data, runner = this.head) {
        if(runner == null){
            runner = new ListNode(data);
            return runner;
        }
        else if(runner.next == null){
            runner.next = new ListNode(data)
            return runner.next;
        }
        this.insertAtBackRecursive(data, runner.next);
    }
    
    prepend(value, target){
        let newNode = new ListNode(value)
        
        if(this.isEmpty()){
            return false;
        }
        else if(this.head.data == target){
            newNode.next = this.head;
            this.head = newNode;
            return true;
        }

        let thisValue = this.getItemAndPrevious(target)
        if(thisValue == null){
            return false;
        }
        else{
            thisValue.previous.next = newNode;
            newNode.next = thisValue.node;
            return true;
        }
    }




    splitOnVal(value){
        let newList = new SinglyLinkedList();
        let split = this.getItemAndPrevious(value)
        if(split == null){
            return newList;
        }

        newList.head = split.node;
        if(split.previous != null){
            split.previous.next = null;
        }
        else{
            this.head = null;
        }

        return newList;
    }
    
    recursiveMax(runner = this.head, maxNode = this.head){
        if(runner == null){
            if(maxNode == null){
                return null;
            }
            return maxNode.data;
        }
        else if(runner.data > maxNode.data){
            maxNode = runner;
        }
        return this.recursiveMax(runner.next, maxNode);
    }



    moveMinToFront(){
        if(this.isEmpty() || this.head.next == null){
            return this;
        }
        let runner = this.head;
        let smallestValue = this.head;
        let beforeSmallest = null;

        while(runner.next != null){
            if(runner.next.data < smallestValue.data){
                beforeSmallest = runner;
                smallestValue = runner.next;
            }
            runner = runner.next;
        }

        if(beforeSmallest == null){
            return this;
        }
        else{
            let afterSmallest = smallestValue.next;
            smallestValue.next = this.head;
            this.head = smallestValue;
            beforeSmallest.next = afterSmallest;
        }
        return this;
    }







    // removers

    removeBack(){
        let newBack = this.secondToLast();
        
        if (newBack == null){
            return false;
        }
        else{
            newBack.next = null;
            return true;
        }
    }

    removeVal(value){
        let valuesRemoved = false;
        if(this.isEmpty()){
            return valuesRemoved;
        }
        else{
            let current = this.head
            let runner = current.next;

            if(current.data == value){
                this.head = runner;
                current = runner;
                runner = runner.next;
                valuesRemoved = true;
            }

            while(runner != null){
                if(runner.data == value){
                    current.next = runner.next;
                    runner = current.next;
                }
                else{
                    current = runner;
                    runner = runner.next;
                }
            }
            return valuesRemoved;
        }

    }

}

// ## TEST CASES ##

let testList = new SinglyLinkedList();
testList.seedFromArr([1, 7, 99, 111, 1919, 3, 666])

testList.display();
testList.reverse();
testList.display();


let loopNode = testList.insertAtBack("loops after this!")
loopNode.next = testList.head;
console.log(testList.hasLoop());

