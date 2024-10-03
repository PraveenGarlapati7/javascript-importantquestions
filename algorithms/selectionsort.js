function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// for every iteration we will find the lowest and replace it with the value of the current index
function selectionSort(arr){
    for(let i = 0; i<arr.length;  i++){
        var lowest = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest) swap(arr, i, lowest)
    }
    console.log(arr)
    return arr;
}

selectionSort([7,3,8,2,9,5,1,4,6]);