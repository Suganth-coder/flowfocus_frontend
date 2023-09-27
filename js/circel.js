// /*
// This script is an extension to the one written
// by Mateusz Rybczonec on his CSS Tricks Blog

// Blog Link: https://bit.ly/3nH3AhO

// OG Pen Link : https://bit.ly/3fi7xXj
// */

// const FULL_DASH_ARRAY = 283;
// const RESET_DASH_ARRAY = `-57 ${FULL_DASH_ARRAY}`;

// //All buttons
// let startBtn = document.querySelector(".start");
// let stopBtn = document.querySelector(".stop");
// let resetBtn = document.querySelector(".reset");

// //DOM elements
// let timer = document.querySelector("#base-timer-path-remaining");
// let timeLabel = document.getElementById("base-timer-label");

// //Time related vars
// const TIME_LIMIT = 30; //in seconds
// let timePassed = 0;
// let timeLeft = TIME_LIMIT;
// let timerInterval = null;

// function reset() {
//   clearInterval(timerInterval);
//   resetVars();
//   startBtn.innerHTML = "Start";
//   timer.setAttribute("stroke-dasharray", RESET_DASH_ARRAY);
// }

// function start(withReset = false) {
//   setDisabled(startBtn);
//   removeDisabled(stopBtn);
//   if (withReset) {
//     resetVars();
//   }
//   startTimer();
// }

// function stop() {
//   setDisabled(stopBtn);
//   removeDisabled(startBtn);
//   startBtn.innerHTML = "Continue";
//   clearInterval(timerInterval);
// }

// function startTimer() {
//   timerInterval = setInterval(() => {
//     timePassed = timePassed += 1;
//     timeLeft = TIME_LIMIT - timePassed;
//     timeLabel.innerHTML = formatTime(timeLeft);
//     setCircleDasharray();

//     if (timeLeft === 0) {
//       timeIsUp();
//     }
//   }, 1000);
// }

// window.addEventListener("load", () => {
//   timeLabel.innerHTML = formatTime(TIME_LIMIT);
//   setDisabled(stopBtn);
// });

// //---------------------------------------------
// //HELPER METHODS
// //---------------------------------------------
// function setDisabled(button) {
//   button.setAttribute("disabled", "disabled");
// }

// function removeDisabled(button) {
//   button.removeAttribute("disabled");
// }
// function timeIsUp() {
//   setDisabled(startBtn);
//   removeDisabled(stopBtn);
//   clearInterval(timerInterval);
//   let confirmReset = confirm("Time is UP! Wanna restart?");
//   if (confirmReset) {
//     reset();
//     startTimer();
//   } else {
//     reset();
//   }
// }

// function resetVars() {
//   removeDisabled(startBtn);
//   setDisabled(stopBtn);
//   timePassed = -1;
//   timeLeft = TIME_LIMIT;
//   console.log(timePassed, timeLeft);
//   timeLabel.innerHTML = formatTime(TIME_LIMIT);
// }

// function formatTime(time) {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   if (seconds < 10) {
//     seconds = `0${seconds}`;
//   }

//   return `${minutes}:${seconds}`;
// }

// function calculateTimeFraction() {
//   const rawTimeFraction = timeLeft / TIME_LIMIT;
//   return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
// }

// function setCircleDasharray() {
//   const circleDasharray = `${(
//     calculateTimeFraction() * FULL_DASH_ARRAY
//   ).toFixed(0)} 283`;
//   console.log("setCircleDashArray: ", circleDasharray);
//   timer.setAttribute("stroke-dasharray", circleDasharray);
// }







// -------------------


// const FULL_DASH_ARRAY = 283;
// const RESET_DASH_ARRAY = `0 ${FULL_DASH_ARRAY}`;

// // All buttons
// let startBtn = document.querySelector(".start");
// let stopBtn = document.querySelector(".stop");
// let resetBtn = document.querySelector(".reset");

// // DOM elements
// let timer = document.querySelector("#base-timer-path-remaining");
// let timeLabel = document.getElementById("base-timer-label");

// // Time related vars
// const MAX_TIME = 10; // 1 hour in seconds
// const HOUR = 3600; // 1 hour in seconds
// let elapsedTime = 0;
// let timerInterval = null;

// function reset() {
//   resetVars();
//   startBtn.innerHTML = "Start";
//   timer.setAttribute("stroke-dasharray", RESET_DASH_ARRAY);
// }

// function start() {
//   setDisabled(startBtn);
//   removeDisabled(stopBtn);
//   if (!timerInterval) {
//     startTimer();
//   }
// }

// function stop() {
//   setDisabled(stopBtn);
//   removeDisabled(startBtn);
//   clearInterval(timerInterval);
//   timerInterval = null;
// }

// function startTimer() {
//   setCircleDasharray(); // Initialize the circle stroke
//   timerInterval = setInterval(() => {
//     elapsedTime += 1;
//     if (elapsedTime >= MAX_TIME) {
//       reset();
//     }
//     timeLabel.innerHTML = formatTime(elapsedTime);
//     if (elapsedTime < HOUR) {
//       setCircleDasharray(); // Update the circle stroke up to 1 hour
//     } else {
//       timer.setAttribute("stroke-dasharray", RESET_DASH_ARRAY);
//     }
//   }, 1000);
// }

// window.addEventListener("load", () => {
//   timeLabel.innerHTML = formatTime(0);
//   setDisabled(stopBtn);
// });

// // HELPER METHODS

// function setDisabled(button) {
//   button.setAttribute("disabled", "disabled");
// }

// function removeDisabled(button) {
//   button.removeAttribute("disabled");
// }

// function resetVars() {
//   removeDisabled(startBtn);
//   setDisabled(stopBtn);
//   elapsedTime = 0;
//   timeLabel.innerHTML = formatTime(0);
// }

// function formatTime(time) {
//   const hours = Math.floor(time / 3600);
//   const minutes = Math.floor((time % 3600) / 60);
//   const seconds = time % 60;

//   return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
// }

// function pad(num) {
//   return num.toString().padStart(2, "0");
// }

// function calculateTimeFraction() {
//   return elapsedTime / MAX_TIME;
// }

// function setCircleDasharray() {
//   const circleDasharray = `${(
//     calculateTimeFraction() * FULL_DASH_ARRAY
//   ).toFixed(0)} ${FULL_DASH_ARRAY}`;
//   timer.setAttribute("stroke-dasharray", circleDasharray);
// }



//-----------------------------------------------------



// const FULL_DASH_ARRAY = 283;
// const RESET_DASH_ARRAY = `0 ${FULL_DASH_ARRAY}`;

// // All buttons
// let startBtn = document.querySelector(".start");
// let stopBtn = document.querySelector(".stop");
// let resetBtn = document.querySelector(".reset");

// // DOM elements
// let timer = document.querySelector("#base-timer-path-remaining");
// let timeLabel = document.getElementById("base-timer-label");

// // Time related vars
// const MAX_TIME = 3; // 1 hour in seconds
// let elapsedTime = 0;
// let timerInterval = null;

// function reset() {
//   startBtn.innerHTML = "Start";
//   elapsedTime = 0;
// }

// function start() {
//   setDisabled(startBtn);
//   removeDisabled(stopBtn);
//   if (!timerInterval) {
//     startTimer();
//   }
// }

// function stop() {
//   setDisabled(stopBtn);
//   removeDisabled(startBtn);
//   clearInterval(timerInterval);
//   timerInterval = null;
// }

// function startTimer() {
//   timeLabel.innerHTML = formatTime(elapsedTime);
//   timerInterval = setInterval(() => {
//     elapsedTime += 1;
//     if (elapsedTime >= MAX_TIME) {
//       reset();
//     }
//     timeLabel.innerHTML = formatTime(elapsedTime);
//   }, 1000);
// }

// window.addEventListener("load", () => {
//   timeLabel.innerHTML = formatTime(0);
//   setDisabled(stopBtn);
// });

// // HELPER METHODS

// function setDisabled(button) {
//   button.setAttribute("disabled", "disabled");
// }

// function removeDisabled(button) {
//   button.removeAttribute("disabled");
// }

// function formatTime(time) {
//   const hours = Math.floor(time / 3600);
//   const minutes = Math.floor((time % 3600) / 60);
//   const seconds = time % 60;

//   return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
// }

// function pad(num) {
//   return num.toString().padStart(2, "0");
// }

// // Circle stroke related methods

// function setCircleDasharray(fraction) {
//   const circleDasharray = `${(fraction * FULL_DASH_ARRAY).toFixed(0)} ${FULL_DASH_ARRAY}`;
//   timer.setAttribute("stroke-dasharray", circleDasharray);
// }

// function updateCircleStroke() {
//   const fraction = elapsedTime / MAX_TIME;
//   setCircleDasharray(fraction);
// }

// // Call updateCircleStroke whenever you want to update the circle stroke.








// ------------------------------------




// const FULL_DASH_ARRAY = 283;
// const RESET_DASH_ARRAY = `0 ${FULL_DASH_ARRAY}`;

// // All buttons
// let startBtn = document.querySelector(".start");
// let stopBtn = document.querySelector(".stop");
// let resetBtn = document.querySelector(".reset");

// // DOM elements
// let timer = document.querySelector("#base-timer-path-remaining");
// let timeLabel = document.getElementById("base-timer-label");

// // Time related vars
// const HOUR = 10; // 1 hour in seconds
// let elapsedTime = 0;
// let stopwatchInterval = null;
// let circleTimerInterval = null;

// function reset() {
//   startBtn.innerHTML = "Start";
//   elapsedTime = 0;
//   resetCircle();
// }

// function start() {
//   setDisabled(startBtn);
//   removeDisabled(stopBtn);
//   if (!stopwatchInterval) {
//     startStopwatch();
//   }
//   if (!circleTimerInterval) {
//     startCircleTimer();
//   }
// }

// function stop() {
//   setDisabled(stopBtn);
//   removeDisabled(startBtn);
//   clearInterval(stopwatchInterval);
//   clearInterval(circleTimerInterval);
//   stopwatchInterval = null;
//   circleTimerInterval = null;
// }

// function startStopwatch() {
//   timeLabel.innerHTML = formatTime(elapsedTime);
//   stopwatchInterval = setInterval(() => {
//     elapsedTime += 1;
//     if (elapsedTime >= HOUR) {
//       resetCircle();
//     }
//     timeLabel.innerHTML = formatTime(elapsedTime);
//   }, 1000);
// }

// function startCircleTimer() {
//   resetCircle();
//   circleTimerInterval = setInterval(() => {
//     resetCircle();
//   }, HOUR);
// }

// function resetCircle() {
//   timer.setAttribute("stroke-dasharray", RESET_DASH_ARRAY);
//   setTimeout(() => {
//     setCircleDasharray();
//   }, 10);
// }

// window.addEventListener("load", () => {
//   timeLabel.innerHTML = formatTime(0);
//   setDisabled(stopBtn);
// });

// // HELPER METHODS

// function setDisabled(button) {
//   button.setAttribute("disabled", "disabled");
// }

// function removeDisabled(button) {
//   button.removeAttribute("disabled");
// }

// function formatTime(time) {
//   const hours = Math.floor(time / 3600);
//   const minutes = Math.floor((time % 3600) / 60);
//   const seconds = time % 60;

//   return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
// }

// function pad(num) {
//   return num.toString().padStart(2, "0");
// }

// function calculateTimeFraction() {
//   return elapsedTime / HOUR;
// }

// function setCircleDasharray() {
//   const fraction = calculateTimeFraction();
//   const circleDasharray = `${(fraction * FULL_DASH_ARRAY).toFixed(0)} ${FULL_DASH_ARRAY}`;
//   timer.setAttribute("stroke-dasharray", circleDasharray);
// }




// ------above apprentyly works for  1 hr -------//





const FULL_DASH_ARRAY = 283;
const RESET_DASH_ARRAY = `0 ${FULL_DASH_ARRAY}`;

// DOM elements
let timer = document.querySelector("#base-timer-path-remaining");
let timeLabel = document.getElementById("base-timer-label");

// Time related vars
const REPEAT_INTERVAL = 10000; // 10 seconds in milliseconds
const HOUR = 3600; // 1 hour in seconds
let elapsedTime = 0;
let stopwatchInterval = null;
let circleTimerInterval = null;

function reset() {
  elapsedTime = 0;
  resetCircle();
}

function start() {
  setDisabled(startBtn);
  removeDisabled(stopBtn);
  if (!stopwatchInterval) {
    startStopwatch();
  }
}

function stop() {
  setDisabled(stopBtn);
  removeDisabled(startBtn);
  clearInterval(stopwatchInterval);
  clearInterval(circleTimerInterval);
  stopwatchInterval = null;
  circleTimerInterval = null;
}

function startStopwatch() {
  timeLabel.innerHTML = formatTime(elapsedTime);
  stopwatchInterval = setInterval(() => {
    elapsedTime += 1;
    timeLabel.innerHTML = formatTime(elapsedTime);
  }, 1000);
}

function startCircleTimer() {
  resetCircle();
  circleTimerInterval = setInterval(() => {
    elapsedTime += REPEAT_INTERVAL / 1000;
    if (elapsedTime >= 10 && elapsedTime < HOUR) {
      resetCircle();
    }
    if (elapsedTime >= HOUR) {
      clearInterval(circleTimerInterval);
    }
    setCircleDasharray();
  }, REPEAT_INTERVAL);
}

function resetCircle() {
  timer.setAttribute("stroke-dasharray", RESET_DASH_ARRAY);
  setTimeout(() => {
    setCircleDasharray();
  }, 10);
}

window.addEventListener("load", () => {
  timeLabel.innerHTML = formatTime(0);
});

// HELPER METHODS

function setDisabled(button) {
  button.setAttribute("disabled", "disabled");
}

function removeDisabled(button) {
  button.removeAttribute("disabled");
}

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num.toString().padStart(2, "0");
}

function calculateTimeFraction() {
  return elapsedTime / HOUR;
}

function setCircleDasharray() {
  const fraction = calculateTimeFraction();
  const circleDasharray = `${(fraction * FULL_DASH_ARRAY).toFixed(0)} ${FULL_DASH_ARRAY}`;
  timer.setAttribute("stroke-dasharray", circleDasharray);
}

// You can call startCircleTimer() whenever you want to start the circle timer independently.
