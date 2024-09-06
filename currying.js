//sum(1)(2)(3) -> 6

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3));

//evaluate("sum")(4)(2) => 6
//evaluate("multiply")(4)(2) => 8
//evaluate("devide")(4)(2) => 2
//evaluate("subtract")(4)(2) => 2

function evaluate(operator) {
  return function (a) {
    return function (b) {
      if (operator === "sum") return a + b;
      else if (operator === "multiply") return a * b;
      else if (operator === "devide") return a / b;
      else if (operator === "subtract") return a - b;
      else return "INVALID OPERATOR";
    };
  };
}

console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("devide")(4)(2));
console.log(evaluate("subtract")(4)(2));
console.log(evaluate("remainder")(4)(2));

//Infinite currying -> multilply(1)(2)(3)....(n)()

function multilply(a) {
  return function (b) {
    if (b) return multilply(a * b);
    return a;
  };
}

console.log(multilply(1)(2)(3)());

// func(a,b,c,d) -> func(a)(b)(c)(d)
// const sum = (a,b,c,d) => a+b+c+d;
// const totalCurriedSum = curry(sum);
// console.log(totalCurriedSum(1)(2)(3)(4))

function curry(func) {
  return function curriedSum(...args) {
    if (args.length >= func.length) {
      return func.call(this, ...args);
    } else {
      return function (...next) {
        return curriedSum(...args, ...next);
      };
    }
  };
}

const add = (a, b, c, d) => a + b + c + d;

const totalCurriedSum = curry(add);

console.log(totalCurriedSum(1)(2)(3)(4));
