//Already resolved promise
// const p = Promise.resolve({ id: 5 });
// p.then((result) => console.log(result));

//Already rejected promise
// const p = Promise.reject(new Error("reason for rejection.."));
// p.catch((error) => console.log(error));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("ASYNC 1...");
    resolve(1);
    // reject(new Error("Error in something"));
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("ASYNC 2...");
    resolve(2);
  }, 2000);
});

// Fulfilled when all promises are resolved
Promise.all([p1, p2])
  .then((result) => console.log("Result", result))
  .catch((err) => console.log(err.message));

// Fulfilled as soon as first promise is resolved
// Promise.race([p2, p1])
//   .then((result) => console.log("Result", result))
//   .catch((err) => console.log(err.message));
