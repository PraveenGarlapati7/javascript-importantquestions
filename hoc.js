const radius = [1, 2, 3, 4];

const calculateArea = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.PI * arr[i] * arr[i]);
  }
  return newArr;
};

console.log(calculateArea(radius));

const calculateDiameter = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
};

console.log(calculateDiameter(radius));

// converting the above function into a reusable function(DRY Principle)

const calculate = (arr, logic) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(logic(arr[i]));
  }

  return newArr;
};

const Area = (radius) => Math.PI * radius * radius;
const Diameter = (radius) => 2 * radius;
const circumference = (radius) => 2 * Math.PI * radius;

console.log(calculate(radius, Area));
console.log(calculate(radius, Diameter));
console.log(calculate(radius, circumference));

//converting the above curry function into a custom map

Array.prototype.myMap = function (logic) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(logic(this[i]));
  }

  return newArr;
};

console.log(radius.myMap(Area));
console.log(radius.map(Area));
