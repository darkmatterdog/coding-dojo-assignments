// INSERTION SORT
const insertionSort = array => {
    if(array.length > 1){
        for(var i = 1; i < array.length; i++){
            let index = i;
            let item = array[i];
            
            while(item < array[index-1]){
                array[index] = array[index-1];
                array[index-1] = item;
                index--;
            }
        }
    }
    return array;
}

// ## TEST CASES ##
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(insertionSort(numsRandomOrder));
console.log(insertionSort(numsReversed));
console.log(insertionSort(numsOrdered));