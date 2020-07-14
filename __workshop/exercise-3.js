// Exercise 3
// ----------

const { response } = require("express");

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
};

// 3. handleSum function (async/await)

const handleSum = async (num) => {
  const a = await doublesLater(num);
  const b = await doublesLater(num);
  const c = await doublesLater(num);
  return a + b + c;
};

// // 4. verification
handleSum(10).then((ans) => console.log(ans));
