/*

Subject: Promises and handling multiple promises

-> in promise there are three step, 1. pending, 2. resolved, 3. rejected

*/

const myPromise = new Promise((resolved, rejected) => {
  const result = null;

  if (!result) {
    rejected("promise rejected");
  } else {
    resolved("Promises resolved");
  /*   setTimeout(() => {
      
    }, 1000); */
  }
});

myPromise
  .then((res) => {
    console.log("🚀 ~ file: Promises.js:21 ~ .then ~ res:", res);
  })
  .catch((err) => {
    console.log("🚀 ~ file: Promises.js:23 ~ err:", err);
  });
