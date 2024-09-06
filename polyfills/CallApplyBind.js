const car = {
  model: "Tata Punch",
  cost: "9 Lakhs",
};

function displayCarDetails(brand, reason) {
  console.log(
    `The car that i wanted to buy was ${this.model} and it costs ${this.cost}, sold by ${brand} and the reason for buying it was because of its ${reason}`
  );
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function")
    throw new Error("call method can only be called on functions");
  context.fn = this;
  context.fn(...args);
};

// displayCarDetails.call(car, "Tata Motors", "high Safety rating");
displayCarDetails.myCall(car, "Tata Motors", "high Safety rating");

Function.prototype.myApply = function (context = {}, args = {}) {
  if (typeof this !== "function")
    throw new Error("Apply method can only be called on functions");
  if (!Array.isArray(args))
    throw new Error("Apply method only takes array of Arguments");

  context.fn = this;
  context.fn(...args);
};

// displayCarDetails.apply(car, ["Tata Motors", "high Safety rating"]);
displayCarDetails.myApply(car, ["Tata Motors", "high Safety rating"]);

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function")
    throw new Error("Apply method can only be called on functions");
  context.fn = this;
  return function (...newArgs) {
    context.fn(...args, ...newArgs);
  };
};

// const showCarDetails = displayCarDetails.bind(car);
// console.log(showCarDetails("Tata Motors", "high Safety rating"));

const showCarDetails = displayCarDetails.myBind(car);
console.log(showCarDetails("Tata Motors", "high Safety rating"));
