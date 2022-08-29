// # Binary Search Tree #

// binary node
class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

// binary tree
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // check if tree is empty
    isEmpty() {
        if (this.root == null) { return true; }
        return false;
    }

    // check if tree is full
    isFull(node = this.root){
        if(this.isEmpty()){
            return true;
        }

        let hasLeft = (node.left != null);
        let hasRight = (node.right != null);

        if((hasLeft && !hasRight) || (!hasLeft && hasRight)){
            return false;
        }
        else if(hasLeft && hasRight){
            let isLeftFull = this.isFull(node.left);
            let isRightFull = this.isFull(node.right);

            return(isLeftFull && isRightFull);
        }
        else{
            return true;
        }
    }

    
    // finds the minimum value
    min(current = this.root) {
        if (this.isEmpty()) { return null; }
        else if (current.left != null) {
            this.min(current.left);
        }
        else { return current; }
    }

    // finds the maximum value
    max(){
        if(this.isEmpty){ return null;}
        else if(current.right != null){
            this.max(current.right)
        }
        else{ return current; }
    }

    // finds the range
    range() {
        if ( this.isEmpty() ) {
            return null;
        }
        let max = this.max();
        let min = this.min();
        let range = max - min;
        return range;
    }

    height(node = this.root){
        if(this.isEmpty()) { return 0 };
        
        var heightLeft = 0;
        var heightRight = 0;
        
        if (node.left){
        heightLeft = this.height(node.left);
        }
        if (node.right){
        heightRight = this.height(node.right);
        }
        return 1 + Math.max(heightLeft, heightRight);
        } 


    // inserts a new node into the tree (recursively)
    insert(data, runner = this.root) {
        if (this.isEmpty()) {
            this.root = new BSTNode(data);
            return this.root;
        }
        else if (data > runner.data) {
            if (runner.right == null) {
                runner.right = new BSTNode(data);
                return runner.right;
            }
            this.insert(data, runner.right);
        }
        else if (data < runner.data) {
            if (runner.left == null) {
                runner.left = new BSTNode(data);
                return runner.left;
            }
            this.insert(data, runner.left);
        }
        else if(data === runner.data){
            runner.count++;
            return runner;
        }
    }

    // remove node from tree

    removeVal( val ){
        let currentNode = this.root;
        let parentNode = currentNode;

        if( this.root ){    
            while( currentNode && currentNode.data != val ){
                parentNode = currentNode

                if( val < currentNode.data ){
                    currentNode = currentNode.left;
                }
                else{
                    currentNode = currentNode.right;
                }
            }
            if ( currentNode === null ){
                console.log( "The value is not in the BST!" );
                return false;
            }

            if( parentNode.data > currentNode.data ){
                parentNode.left = currentNode.left;
            }
            else{
                parentNode.right = currentNode.left;
            }
            if( currentNode.right ){
                this.insert( currentNode.right );
            }
            return true;

        }
        else{
            console.log( "The BST is empty!" );
            return false;
        }
    }

    // finds values that have duplicates
    findDuplicates( node = this.root, arrData =[] ) {
        if (this.isEmpty()){
        return [];
        }
        if( node.left ){
        if( node.data == node.left.data ){
        arrData.push(node.data);
        }
        this.findDuplicates(node.left , arrData );
        }
        if ( node.right ){
        if( node.data == node.right.data){
        arrData.push(node.data);
        }
        this.findDuplicates(node.right, arrData);
        }
        return arrData;
        } 


    // displays the tree
    display(current = this.root, depth = 0, polarity = [], parent = null){
        if(this.isEmpty()){ console.log("Tree is empty!"); return }

        // checks for left/right nodes
        let hasLeft = (current.left != null);
        let hasRight = (current.right != null);

        // render pipes for previous layers
        let pipes = ""
        for(var i = 0; i+1 < depth; i++){
            if(polarity[i] == "both"){ pipes += "┃ "}
            else { pipes += "  "}
        }

        // render pipes for this layer
        if(depth != 0){
            if(polarity[depth-1] == "both"){ pipes += "┠─" }
            else{ pipes += "┖─"; }
        }
        // render current layer
        if(current.count > 1){ console.log(pipes+current.data+ "("+current.count+")") }
        else{ console.log(pipes+current.data); }

        // calling next leaves

        if(hasLeft && hasRight){
            polarity[depth] = "both";
            this.display(current.left, depth+1, polarity);
        } else if (hasLeft){
            polarity[depth] = "left";
            this.display(current.left, depth+1, polarity);
        }

        if(hasRight){
            polarity[depth] = "right";
            this.display(current.right, depth+1, polarity);
        }
    }


    // checks if a tree contains an item
    contains(searchVal, current=this.root){
        if(current == null){ return false}
        else if(searchVal > current.data){
            return this.containsRecursive(searchVal, current.right);
        }
        else if(searchVal < current.data){
            return this.containsRecursive(searchVal, current.left);
        }
        else{
            return true;
        }
    }


    // pushes tree to array in-order
    toArrInOrder(node = this.root, vals = []){
        if(this.isEmpty()){ return null; }

        if(node.left != null){ this.toArrInOrder(node.left, vals) }
        vals.push(node.data)
        if(node.right != null){ this.toArrInOrder(node.right, vals) }

        return vals;
    }


    // pushes tree to array pre-order
    toArrPreOrder(node = this.root, vals = []){
        if(this.isEmpty()){ return null; }
        
        vals.push(node.data)
        if(node.left != null){ this.toArrPreOrder(node.left, vals) }
        if(node.right != null){  this.toArrPreOrder(node.right, vals) }

        return vals;
    }


    // pushes tree to array post-order
    toArrPostOrder(node = this.root, vals = []){
        if(this.isEmpty()){ return null; }

        if(node.left != null){ this.toArrPostOrder(node.left, vals) }
        if(node.right != null){ this.toArrPostOrder(node.right, vals) }
        vals.push(node.data)

        return vals;
    }

}






// ## PUT TEST CASES HERE ##
newTree = new BinarySearchTree();

newTree.insert(50)
newTree.insert(25)
newTree.insert(75)
newTree.insert(10)
newTree.insert(6)
newTree.insert(11)
newTree.insert(40)
newTree.insert(60)
newTree.insert(90)
newTree.insert(90)
newTree.insert(90)


newTree.display();
console.log(newTree.isFull());