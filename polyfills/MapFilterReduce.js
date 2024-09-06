const array = [1, 2, 3, 4, 5];

// map
// const doubledArray = array.map((ele) => ele * 2);
// console.log(doubledArray);

Array.prototype.myMap = function (cb) {
  if (!Array.isArray(this))
    throw new Error("map can only be performed on Arrays");

  let outout = [],
    arr = this;

  for (let i = 0; i < arr.length; i++) {
    outout.push(cb(arr[i]));
  }

  return outout;
};

const doubledArray = array.myMap((ele) => ele * 2);
console.log(doubledArray);

// filter

// const filteredArray = array.filter((e) => e > 2);
// console.log(filteredArray);

Array.prototype.myFilter = function (cb) {
  if (!Array.isArray(this))
    throw new Error("map can only be performed on Arrays");

  let outout = [],
    arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) outout.push(arr[i]);
  }

  return outout;
};
const filteredArray = array.myFilter((e) => e > 2);
console.log(filteredArray);

// reduce
// const sum = array.reduce((acc, ele) => acc + ele, 0);
// console.log(sum);

Array.prototype.myReduce = function (cb, acc) {
  let accumulator = acc,
    arr = this;

  for (let i = 0; i < arr.length; i++) {
    accumulator = accumulator ? cb(accumulator, arr[i]) : arr[0];
  }

  return accumulator;
};

const sum = array.myReduce((acc, ele) => acc + ele, 0);
console.log(sum);
