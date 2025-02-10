// // Change the second promise in the chain to return the first sheep in thea rray alongside a fresh promise
// // Amend the next promise in the chain so that the names of the values available reflect the data at hand

// const promiseToCountSheep = new Promise((resolve, reject) => {
//   const fulfilled = true;
//   const sheep = ["Bramble", "Daffodil", "Buttercup"];

//   if (fulfilled) {
//     resolve(sheep);
//   } else {
//     reject("Did not find any sheep!");
//   }
// })
//   .then((sheepData) => {
//     return sheepData[0];
//   })
//   .then((sheepName) => {
//     console.log(sheepName);
//   })
//   .catch((errorStr) => {
//     console.log(errorStr);
//   });

// // Edit the second promise in the chain to return the length of the fruit string instead of simply logging the fruit string.
// //  Then create a third promise to log the fruit string length to the terminal

// const promiseToGatherFruit = new Promise((resolve, reject) => {
//   const fruit = "Pineapple";
//   resolve(fruit);
// })
//   .then((fruit) => {
//     return fruit.length;
//   })
//   .then((numFruitLetters) => {
//     console.log(numFruitLetters);
//   });

//  Predict the output of console.log(fruitsArray). Write sentences to explain your logic.

// const fruitsArray = [];

// const promiseToGatherFruit2 = new Promise((resolve, reject) => {
//   const fruit = "Pineapple";
//   resolve(fruit);
// }).then((fruit) => {
//   fruitsArray.push(fruit);
// });

// console.log(fruitsArray);

// // Why is the output on the console in the wrong order?
// // Why does step 4 currently happen before step 3
// // Fix the code so step 3 and 4 are in the right order

const chopApples = () => {
  console.log("step 1 - chop apples and put them in a dish");
};

const mixCrumble = () => {
  console.log(
    "step 2 - mix butter, sugar and flour until crumbly, spread over the apples"
  );
};

const bakeCrumble = () => {
  return new Promise((resolve, reject) => {
    const burnt = false;

    if (burnt) {
      reject("error - Oh no, burnt crumble!");
    } else {
      resolve("step 3 - Perfect golden crumble!");
    }
  })
    .then((bakedCrumble) => {
      console.log(bakedCrumble);
    })
    .then(() => {
      enjoyCrumble();
    })
    .catch((burntCrumbleErr) => {
      console.log(burntCrumbleErr);
    });
};

const enjoyCrumble = () => {
  console.log("step 4 - Delicious crumble - even better with custard!");
};

const makeCrumble = () => {
  chopApples();
  mixCrumble();
  bakeCrumble();
  enjoyCrumble();
};

makeCrumble();
