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

const result = async () => {
  try {
    const res1 = await importantAction("javascript");
    console.log(res1);
    const res2 = await proficiency("4.5");
    console.log(res2);
    const res3 = await nextAction("Appearing for interviews");
    console.log(res3);
  } catch (error) {
    console.log("Promises failed, " + error);
  }
};

result();
