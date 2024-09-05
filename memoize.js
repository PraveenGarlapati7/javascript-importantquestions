const clumsySquare = (num1, num2) => {
  for (let i = 1; i < 10000000; i++) {}

  return num1 * num2;
};

// console.time("First call");
// console.log(clumsySquare(9467, 7649));
// console.timeEnd("First call");

// console.time("Second call");
// console.log(clumsySquare(9467, 7649));
// console.timeEnd("Second call");

//We need to memoize the above function

const myMemoize = (func) => {
  let res = {};

  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = func.call(this, ...args);
      console.log("Adding into the cache");
    }
    return res[argsCache];
  };
};

const myClumsySquare = myMemoize(clumsySquare);

console.time("First call");
console.log(myClumsySquare(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(myClumsySquare(9467, 7649));
console.timeEnd("Second call");
