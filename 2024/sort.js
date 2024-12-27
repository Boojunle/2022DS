function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            console.log(`Shifting ${arr[j]} to the right`);
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        console.log(`Inserting ${key} at index ${j + 1}`);
        arr[j + 1] = key;

        // Print the array after each insertion
        console.log(`Current array: ${arr}`);
    }
    return arr;
}

let unsortedArray = [5, 2, 4, 6, 1, 3, 7, 9, 8, 0];

console.log("Unsorted array:");
printArray(unsortedArray);

let sortedArray = insertionSort(unsortedArray);

console.log("Sorted array:");
printArray(sortedArray);