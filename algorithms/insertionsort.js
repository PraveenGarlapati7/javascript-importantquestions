
function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentElement = arr[i];

        for(var j = i-1; j >= 0 && arr[j] > currentElement; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentElement;
    }
    console.log(arr);
    return arr;
}

insertionSort([7,3,8,2,9,5,1,4,6]);

// [7,3,8,2,9,5,1,4,6]
// [3,7,8,2,9,5,1,4,6]
// [2,3,7,8,9,5,1,4,6]
// [2,3,5,7,8,9,1,4,6]
// [1,2,3,5,7,8,9,4,6]
// [1,2,3,4,5,7,8,9,6]
// [1,2,3,4,5,6,7,8,9]