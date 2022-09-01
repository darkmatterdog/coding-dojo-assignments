// selection sort
const selectionSort = (arr = []) => {
    for(var i = 0; i < arr.length -1; i++){
        let min = i;

        for(var j = i; j < arr.length; j++){
            if(arr[j] < arr[min]){ min = j }
        }

        let storedValue = arr[i];
        arr[i] = arr[min];
        arr[min] = storedValue;
    } return arr;
}



// # TEST CASES #
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(selectionSort(numsRandomOrder))