function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(`Iteration ${i + 1}: Finding the minimum element`);

        // Find the minimum element in the unsorted part of the array
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            console.log(`Comparing ${arr[j]} with ${arr[minIndex]}`);
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        console.log(`Minimum element found at index ${minIndex}`);

        // Swap the minimum element with the first element of the unsorted part
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;

        console.log(`Current array after swapping: ${arr}`);
    }
    return arr;
}

let unsortedArray = [5, 2, 4, 6, 1, 3];

console.log("Unsorted array:");
printArray(unsortedArray);

let sortedArray = selectionSort(unsortedArray);

console.log("Sorted array:");
printArray(sortedArray);