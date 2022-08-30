function partition(array){
    let i = 0;
    let j = array.length-1;
    let pivot = array[Math.floor(Math.random() * (array.length))];
    
    console.log("Pivot: "+pivot)

    while(i != j){
        console.log(array)
        while(array[i] < pivot){
            i++;
        }
        while(array[j] > pivot){
            j--;
        }

        if(i != j){
            let storedValue = array[i]
            array[i] = array[j]
            array[j] = storedValue;
        }
    }
    return j

}

function quickSort(array){
    if(array.length > 1){
        var pivot = partition(array)
        let leftArray = array.slice(0, pivot);
        let rightArray = array.slice(pivot);
        
        leftArray = quickSort(leftArray);
        rightArray = quickSort(rightArray);
        return leftArray.concat(rightArray);
    }
    return array;
}

// ## test case ##
console.log(quickSort([1, 4, 3, 6, 2, 10, 8, 9, 7, 22, 5, 19, 77, 212, 66, 99]));