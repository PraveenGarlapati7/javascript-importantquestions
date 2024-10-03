
function merge(arr1, arr2){
    var mergeArr = [], i = 0, j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            mergeArr.push(arr1[i]);
            i++;
        }else{
            mergeArr.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        mergeArr.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        mergeArr.push(arr2[j])
        j++
    }
 
    console.log(mergeArr)
    return mergeArr;
}

merge([4,7,9], [6,8,10]);

function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let midPoint = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, midPoint));
    let right = mergeSort(arr.slice(midPoint));

    return merge(left, right)
}

console.log(mergeSort([7,3,8,2,9,5,1,4,6]));