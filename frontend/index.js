// const arr = [1, 2, 3, 4];
// p34rlyang3lx;
// let back = arr.map((item) => {
//   return item * 2;
// });

// console.log(back);

// Array.prototype.myMap = function (cb) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     let mapResult = cb(this[i], i, this);
//     result.push(mapResult);
//   }
//   return result;
// };

// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// Array.prototype.myReduce = function (cb, initialValue) {
//   let accumulator;
//   let startIndex;
//   if (initialValue == undefined) {
//     accumulator = this[0];
//     startIndex = 1;
//   } else {
//     accumulator = initialValue;
//     startIndex = 0;
//   }

//   for (let i = startIndex; i < this.length; i++) {
//     accumulator = cb(accumulator, this[i], i, this);
//   }
//   return accumulator;
// };

// let arrr = arr.myReduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// Function.prototype.myCall = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error("call can not be invoked");
//   }
//   context.fn = this;
//   context.fn(...args);
// };

// Function.prototype.myApply = function (context = {}, args = []) {
//   if (typeof this !== "function") {
//     throw new Error("call can not be invoked");
//   }
//   context.fn = this;
//   context.fn(...args);
// };

// function abhi(location) {
//   console.log(`abhi has ${this.color} ${this.car} in ${location}`);
// }

// let ob = {
//   color: "red",
//   car: "ferrari",
// };

// Function.prototype.myBind = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error("cant invoke bind");
//   }
//   context.fn = this;

//   return function (...newArgs) {
//     return context.fn(...args, ...newArgs);
//   };
// };

// let vas = abhi.myBind(ob, "india");
// vas();

// function important(username, cb) {
//   setTimeout(() => {
//     cb(`say hi to ${username}`);
//   }, 1000);
// }

// let ans = important("abii", function (message) {
//   console.log(message);
// });

// class MyPromiseOld {
//   resolvedData;
//   rejectedData;

//   isResolved = false;
//   isRejected = false;

//   resolveChain = [];
//   rejectChain = [];

//   constructor(executor) {
//     const resolve = (value) => {
//       this.resolvedData = value;
//       this.isResolved = true;
//       if (this.resolveChain.length) {
//         this.resolveChain.reduce((acc, fn) => {
//           return fn(acc);
//         }, this.resolvedData);
//       }
//     };

//     const reject = (value) => {
//       this.rejectedData = value;
//       this.isRejected = true;
//       if (this.rejectChain.length) {
//         this.rejectChain.reduce((acc, fn) => {
//           return fn(acc);
//         }, this.rejectedData);
//       }
//     };

//     executor(resolve, reject);
//   }

//   then(fun) {
//     this.resolveChain.push(fun);
//     if (this.isResolved) {
//       this.resolveChain.reduce((acc, fn) => {
//         return fn(acc);
//       }, this.resolvedData);
//     }
//     return this;
//   }

//   catch(fn) {
//     this.rejectChain.push(fn);
//     if (this.isRejected) {
//       this.rejectChain.reduce((acc, fn) => {
//         return fn(acc);
//       }, this.rejectedData);
//     }
//     return this;
//   }
//   finally(fn) {
//     this.resolveChain.push(fn);
//     this.rejectChain.push(fn);

//     if (this.isResolved) {
//       this.resolveChain.reduce((acc, fn) => {
//         return fn(acc);
//       }, this.resolvedData);
//     }

//     if (this.isRejected) {
//       this.rejectChain.reduce((acc, fn) => {
//         return fn(acc);
//       }, this.rejectedData);
//     }
//   }
// }

// class MyPromise {
//   state = "pending";
//   value;
//   handlers = [];
//   constructor(executor) {
//     const resolve = (value) => {
//       if (this.state !== "pending") return;
//       this.state = "fulfilled";
//       this.value = value;
//       this.runHandlers();
//     };

//     const reject = (error) => {
//       if (this.state !== "pending") return;
//       this.state = "rejected";
//       this.value = error;
//       this.runHandlers();
//     };
//     try {
//       executor(resolve, reject);
//     } catch (error) {
//       reject(error);
//     }
//   }
//   runHandlers() {
//     queueMicrotask(() => {
//       this.handlers.forEach((handler) => handler());
//       this.handlers = [];
//     });
//   }
//   then(cb) {
//     return new MyPromise((resolve, reject) => {
//       const handler = () => {
//         try {
//           if (this.state === "fulfilled") {
//             resolve(cb ? cb(this.value) : this.value);
//           } else {
//             reject(this.value);
//           }
//         } catch (error) {
//           reject(error);
//         }
//       };
//       this.handlers.push(handler);
//       if (this.state !== "pending") this.runHandlers();
//     });
//   }

//   catch(cb) {
//     return new MyPromise((resolve, reject) => {
//       const handler = () => {
//         try {
//           if (this.state === "rejected") {
//             resolve(cb(this.value));
//           } else {
//             resolve(this.value);
//             error;
//           }
//         } catch (error) {
//           reject(error);
//         }
//       };
//       this.handlers.push(handler);
//       if (this.state !== "pending") this.runHandlers();
//     });
//   }

//   finally(cb) {
//     return new MyPromise((resolve, reject) => {
//       const handler = () => {
//         try {
//           cb();
//           if (this.state === "fulfilled") {
//             resolve(this.value);
//           } else {
//             reject(this.value);
//           }
//         } catch (error) {
//           reject(error);
//         }
//       };
//       this.handlers.push(handler);
//       if (this.state !== "pending") this.runHandlers();
//     });
//   }
// }

// new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject(10);
//   }, 1000);
// })
//   .then((data) => {
//     return data * 2;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   })
//   .finally((data) => {
//     console.log("hii");
//   });

// const obj = {
//   name: "abhi",
//   tell: function () {
//     console.log(`this is ${this.name}`);
//   },
// };

// fun = obj.tell;
// obj.tell();
// fun();

// let arr = [5, 5];
// function square(num1, num2) {
//   console.log(num1);
// }
// let res = square(...arr);

// function makeFun() {
//   let x = 5;
//   function print(num) {
//     console.log(x, num);
//   }
//   return print;
// }

// makeFun()(4);

// for (var index = 0; index < 4; index++) {
//   function innder(index) {
//     setTimeout(() => {
//       console.log(index);
//     }, 1000);
//   }
//   innder(index);
// }

// var module = (function priv() {
//   function priv() {
//     let a = 18;
//     console.log(a);
//   }
//   return {
//     callmeth: function () {
//       priv();
//     },
//   };
// })();

// module.priv();

// function once(fun) {
//   let ran;
//   return function () {
//     if (fun) {
//       ran = fun();
//       fun = null;
//     }

//     return ran;
//   };
// }

// function logs() {
//   console.log("logged");
// }

// const res = once(logs);

// function longFun() {
//   for (let index = 0; index < 10000000; index++) {}
//   return "finished";
// }

// console.time("first");
// const res = longFun();
// console.timeEnd("first");

// function memoize(fun) {
//   const res = {};
//   return function (...args) {
//     let argus = JSON.stringify(args);
//     if (!res[argus]) {
//       res[argus] = fun();
//     }
//     return res[argus];
//   };
// }
// console.time("second");
// const res2 = memoize(longFun);

// console.timeEnd("second");

class PriorityScheduler {
  constructor(threshold = 4) {
    this.queue = [];
    this.running = false;
    this.limit = threshold;
  }

  add(task, priority) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, priority, resolve, reject });
      this.queue.sort((a, b) => b.priority - a.priority);
      this.run();
    });
  }

  async run() {
    if (this.running > this.limit || this.queue.length < 1) return;
    this.running++;
    const { task, resolve, reject } = this.queue.shift();
    try {
      const result = await task();
      resolve(result);
    } catch (err) {
      reject(err);
    } finally {
      this.running--;
      this.run();
    }
  }
}
