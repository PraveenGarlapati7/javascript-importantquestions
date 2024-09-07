// simple promise example

console.log("start");

const promise = new Promise((resolve, reject) => {
  //using setTimeOut to mimic the async operation
  setTimeout(() => {
    const result = true;
    if (result) resolve("Promise is resolved");
    else reject(new Error("Promise is rejected"));
  }, 2000);
});

promise.then((data) => console.log(data)).catch((err) => console.error(err));

// Promise chaining

function importantAction(language) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Decided to revise the concept of " + language);
    }, 3000);
  });
}

function proficiency(rating) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I would rate my self with ${rating}/ 5`);
    }, 4000);
  });
}

function nextAction(action) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(action);
    }, 2000);
  });
}

importantAction("javascript")
  .then((data) => {
    console.log(data);
    return proficiency("4.5");
  })
  .then((data) => {
    console.log(data);
    return nextAction("Appearing for interviews");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

// Promise API's(all, allSettled, race, any)

//Promise.all takes an array of promises and returns the result of those promises in an array
//if one of the promises fail it will result out to be an error and goes into the catch block

// Promise.all([
//   importantAction("javascript"),
//   proficiency("4.5"),
//   nextAction("Appearing for interviews"),
// ])
//   .then((res) => {
//     console.log("from Promise.all:  ");
//     console.log(res);
//     console.log("\n");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Promise.race also takes an array of promises and will return the first promise which is settled(resolve/reject)
//returns the first settled's promise result(either data or error)

// Promise.race([
//   importantAction("javascript"),
//   proficiency("4.5"),
//   nextAction("Appearing for interviews"),
// ])
//   .then((res) => {
//     console.log("from Promise.race: ");
//     console.log(res);
//     console.log("\n");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Promise.allSettled will wait for all of the promises to get settled and returns the result array

// Promise.allSettled([
//   importantAction("javascript"),
//   proficiency("4.5"),
//   nextAction("Appearing for interviews"),
// ])
//   .then((res) => {
//     console.log("from Promise.allSettled: ");
//     console.log(res);
//     console.log("\n");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Promise.any is a success seeking one and it will return the first promise that is resolved
//if all the promises are rejeccted then it will return err and goes to the catch block

// Promise.any([
//   importantAction("javascript"),
//   proficiency("4.5"),
//   nextAction("Appearing for interviews"),
// ])
//   .then((res) => {
//     console.log("from Promise.any: ");
//     console.log(res);
//     console.log("\n");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log("end");
