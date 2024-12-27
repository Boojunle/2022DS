function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        console.log("Array is already sorted");
        return arr;
    }

    // Divide the array into two halves
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    console.log("Dividing array into two halves:");
    console.log("Left: " + left);
    console.log("Right: " + right);

    // Recursively sort the two halves
    left = mergeSort(left);
    right = mergeSort(right);

    console.log("Sorted left half: " + left);
    console.log("Sorted right half: " + right);

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    console.log("Merging left half: " + left + " with right half: " + right);

    // Merge the two arrays while comparing their elements
    while (i < left.length && j < right.length) {
        console.log(`Comparing ${left[i]} with ${right[j]}`);
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    console.log("Remaining elements in left: " + left.slice(i));
    console.log("Remaining elements in right: " + right.slice(j));

    // Add any remaining elements from the left or right array
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    console.log("Merged array: " + result);
    return result;
}

let unsortedArray = [5, 2, 4, 6, 1, 3];

console.log("Unsorted array:");
printArray(unsortedArray);

let sortedArray = mergeSort(unsortedArray);

console.log("Sorted array:");
printArray(sortedArray);