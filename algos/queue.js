class QueueNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // checks if list is empty
    isEmpty(){
        if(this.head == null) { return true; }
        return false;
    }

    // adds a value to the back of the queue
    enqueue(val){
        let newNode = new QueueNode(val);
        
        if(this.isEmpty()){ 
            this.head = newNode; 
            this.tail = this.head;
        }
        else{ 
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        
        return this.size++;
    }

    // removes item from the head of the queue
    dequeue(){
        if(this.isEmpty()){ return null; }
        this.size--;
        let oldHead = this.head;
        this.head = oldHead.next;

        if(this.size == 1){
            this.tail = this.head;
        }

        if(this.size == 0){
            this.tail = null;
        }

        return oldHead;
    }

     // retrieves the first item from the queue
    front(){
        return this.head;
    }

    // determines if given item is present
    contains(searchVal){
        let runner = this.head;

        while(runner){
            if(runner.data == searchVal){
                return true;
            }
            runner = runner.next;
        }

        return false;
    }

    // compare queues
    compareQueues(secondQueue){
        let firstRunner = this.front();
        let secondRunner = secondQueue.front();

        if(this.size != secondQueue.size){
            return false;
        }

        while(firstRunner && secondRunner){
            if(firstRunner.data != secondRunner.data){
                return false;
            }
            firstRunner = firstRunner.next;
            secondRunner = secondRunner.next;
        }
        return true;
    }

    // is palindrome
    isPalindrome(){
        let palQueue = new Queue();
        let tempQueue = this;
        let runner = this.front();

        for(var i = this.size; i > 0; i--){
            palQueue.enqueue(runner);
            runner = runner.next;
            tempQueue.dequeue();
        }
        console.log(tempQueue);


        return false;
    }



    // find intersection
    findIntersection(secondQueue){
        let firstRunner = this.head;
        let secondRunner = secondQueue.head;
        

        for(var i = 0; i < this.size; i++){
            for(var j = 0; j < secondQueue.size; j++){
                if(firstRunner == secondRunner){
                    return firstRunner;
                }
                secondRunner = secondRunner.next;
            }
            secondRunner = secondQueue.head;
            firstRunner = firstRunner.next;
        }
        return null;
    }


    // seeds queue from array
    seed(arrayVals = []){
        for(var i = 0; i < arrayVals.length; i++){
            this.enqueue(arrayVals[i]);
        }

        return this;
    }

    // display
    display(){
        let runner = this.head;
        let index = 0;

        while(runner){
            console.log("Node "+index+": "+runner.data);
            index++;
            runner = runner.next;
        }
    }

}




// ## TEST CASES ##
let firstQueue = new Queue();
let secondQueue = new Queue();

firstQueue.seed([1, 18, 99, 572, 5, 9]);
secondQueue.seed([9, 18, 27, 36, 45, 54]);


console.log(firstQueue.isPalindrome());


/* let intersectionNode = new QueueNode(1111);
intersectionNode.next = new QueueNode("end");

firstQueue.tail.next = intersectionNode;
secondQueue.tail.next = intersectionNode;

firstQueue.size = firstQueue.size + 2;
secondQueue.size = secondQueue.size + 2;
console.log(firstQueue.findIntersection(secondQueue));
*/