function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const key = arr[i]; // Element to be inserted into the sorted sequence
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the key (arr[i]) into its correct position in the sorted sequence
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage:
const arrayToSort = [12, 11, 13, 5, 6];
console.log("Array before sorting:", arrayToSort);

insertionSort(arrayToSort);

console.log("Array after sorting:", arrayToSort);
