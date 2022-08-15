// pending state
const p = new Promise((resolve, reject) => {
  // ASYNC Work here - either works or fails
  setTimeout(() => {
    resolve(1); // pending => resolved, fulfilled
    // reject(new Error("message")); // pending => rejected, rejected
  }, 2000);
});

//COnsuming a Promise (promise chaining)
p.then((result) => console.log("Result", result)).catch((err) =>
  console.log("Error", err.message)
);
