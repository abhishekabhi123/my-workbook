let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved-1");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved-2");
  }, 500);
});

let promise3 = new Promise((resolve, reject) => {
  reject("Rejected-3");
});

function promiseAll(promises) {
  let result = new Array(promises.length);
  let resolved = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          result[index] = res;
          resolved++;
          if (resolved === promises.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

const promises = [promise1, promise2, promise3];

promiseAll(promises)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
