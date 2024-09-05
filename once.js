// function likemyvideo() {
//   let count = 0;

//   return function () {
//     if (count > 0) {
//       console.log("Already Subscribed");
//     } else {
//       console.log("Subscribed to my channel");
//       count++;
//     }
//   };
// }

// const liked = likemyvideo();

// liked();
// liked();
// liked();
// liked();

//implementing the once generic function

function once(func) {
  let ran;

  return function () {
    if (func) {
      //   console.log(this);
      ran = func.apply(this, arguments);
      func = null;
    }
  };
}

const hello = once(() => console.log("Subscribed to my channel"));

hello();
hello();
hello();
