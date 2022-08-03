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

    getLastItem(index){
        
    }



    insertAtBack(data) {
        let item = new ListNode(data);
        if(this.isEmpty()){ this.head = item }
        else{
            this.getLastItem().next = item;
            return this.getLastItem();
        }
    }

    deleteFromBack(){
        if(this.isEmpty()){ return null }
        else{
            
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
            while(nextItem.next != null){
                console.log("Node " + nodeIndex + ": " +nextItem.data);
                nextItem = nextItem.next;
                nodeIndex++;
            }
        }
    }

}



let singlyLinkedList = new SinglyLinkedList;

console.log(singlyLinkedList.isEmpty());

singlyLinkedList.insertAtFront("Name");
singlyLinkedList.insertAtFront("Nom");
singlyLinkedList.insertAtFront("N");

singlyLinkedList.display();