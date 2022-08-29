/*
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
const bubbleSort = (nums) => {
    let unsorted = true;
    let valsToCheck = nums.length;

    while(unsorted){
        unsorted = false;
        for(var i = 0; i < valsToCheck; i++){
            if(nums[i] > nums[i+1]){
                unsorted = true;
                let temp = nums[i]
                nums[i] = nums[i+1]
                nums[i+1] = temp
            }
        }
        valsToCheck--;
    }

    return nums;
}




// ### TEST CASES ###
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(bubbleSort(numsRandomOrder));
console.log(bubbleSort(numsReversed));