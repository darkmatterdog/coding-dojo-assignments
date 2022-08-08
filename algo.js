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

    // gets, checks

    isEmpty() {
        if(this.head != null){ return false }
        return true;
    }

    getLastItem(){
        let nextItem = this.head;
            while(nextItem.next != null){ nextItem = nextItem.next }
            return nextItem;
    }


    secondToLast(){
        let current = this.head;

        if(this.isEmpty() || this.head.next == null){
            return null;
        }
        while(current.next.next != null){
            current = current.next;
        }
        return current;

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


    contains(value){
        let thisItem = this.head;
        let nodeIndex = 0;

        while(thisItem != null){
            if(thisItem.data == value){
                console.log("Found at node " + nodeIndex);
                return true
            }
            thisItem = thisItem.next;
            nodeIndex++;
        }
        console.log("Value not found");
        return false;
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



    // inserts
    
    insertAtBack(data) {
        let item = new ListNode(data);
        if(this.isEmpty()){ this.head = item }
        else{
            this.getLastItem().next = item;
        }
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



    // deletes

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



let train = new SinglyLinkedList;
let newCars = [1.1, "traincar", 1.1, 1.1, 1.1, true, 99999, "BNSF"]
train.seedFromArr(newCars);


train.insertAtBackRecursive("here's some data!");
train.display();

train.secondToLast();
train.removeVal(1.1);

console.log(train.toArr());