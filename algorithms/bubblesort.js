function swap(arr,i,j){
    [arr[i],arr[j]] = [arr[j],arr[i]];
}

//for every iteration, the largest number will be moved to the end
function bubbleSort(arr){
    var noSwaps;
    for(let i = arr.length ; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i -1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
                noSwaps = false
            }
        }
        // console.log(arr)
        if(noSwaps) break;
        // console.log("One Pass completed")
    }
    return arr;
}

console.log(bubbleSort([7,3,8,2,9,5,1,4,6]));