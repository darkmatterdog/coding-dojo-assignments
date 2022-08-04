class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }


    isEmpty() {
        if(this.head){ return false }
        return true;
    }

    getLastItem(){
        let nextItem = this.head;
            while(nextItem.next != null){ nextItem = nextItem.next }
            return nextItem;
    }

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

    deleteFromFront(){
        let newHead = this.head.next;
        this.head = newHead;
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

    insertAtBackRecursive(data, runner = this.head) {
        if(runner.next == null){
            let lastCar = new ListNode(data)
            runner.next = lastCar;
            return lastCar;
        }
        this.insertAtBackRecursive(data, runner.next);
    }

}



let train = new SinglyLinkedList;

let newCars = [1.1, "traincar", true, 99999, "BNSF"]

train.seedFromArr(newCars);

train.insertAtBackRecursive("here's some data!");


train.display();

console.log(train.toArr());