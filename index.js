// DEBOUNCE
const input = document.querySelector("input");

function deBounce(func, timeuot = 2000) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeuot);
  };
}

function logInput() {
  console.log("Message with timeout");
}

const processChanges = deBounce(() => logInput(), 3000);

input.addEventListener("keyup", processChanges());

// THROTTLE
// function throttle(func, timeout) {
//   return function (args) {
//     let previosCall = this.lastCall;
//     this.lastCall = Date.now();
//     if (previosCall === undefined || this.lastCall - previosCall > timeout) {
//       func(...args);
//     }
//   };
// }

// let logger = (args) => console.log(`Args - ${args}`);

// let throttleLogger = throttle(logger, 2000);

// throttleLogger([1, 2, 3]);
// throttleLogger([1, 2, 3]);
// throttleLogger([1, 2, 3]);
// throttleLogger([1, 2, 3]);
// throttleLogger([1, 2, 3]);
