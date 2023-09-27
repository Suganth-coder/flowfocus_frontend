const FULL_DASH_ARRAY = 360;
const RESET_DASH_ARRAY = `0 ${FULL_DASH_ARRAY}`;

// All buttons
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

// DOM elements
let timer = document.querySelector("#base-timer-path-remaining");
let timeLabel = document.getElementById("base-timer-label");

// Time related vars
const MAX_TIME = 10; // the max time in seconds
const HOUR = 3600; // 1 hour in seconds
let elapsedTime = 0;
let timerInterval = null;
let roundsCompleted = 0;

function reset() {
    resetVars();
    startBtn.innerHTML = "Start";
    timer.setAttribute("stroke-dasharray", RESET_DASH_ARRAY);
}

function start() {
    setDisabled(startBtn);
    removeDisabled(stopBtn);
    if (!timerInterval) {
        startTimer();
    }
}

function stop() {
    setDisabled(stopBtn);
    removeDisabled(startBtn);
    clearInterval(timerInterval);
    timerInterval = null;
}

function startTimer() {
    setCircleDasharray(); // Initialize the circle stroke
    timerInterval = setInterval(() => {
        elapsedTime += 1;
        if (elapsedTime >= MAX_TIME) {
            reset();
        }
        timeLabel.innerHTML = formatTime(elapsedTime + roundsCompleted * MAX_TIME);
        if (elapsedTime < HOUR) {
            setCircleDasharray(); // Update the circle stroke up to 1 hour
        } else {
            timer.setAttribute("stroke-dasharray", RESET_DASH_ARRAY);
        }
    }, 1000);
}

window.addEventListener("load", () => {
    timeLabel.innerHTML = formatTime(0);
    setDisabled(stopBtn);
});

// HELPER METHODS

function setDisabled(button) {
    button.setAttribute("disabled", "disabled");
}

function removeDisabled(button) {
    button.removeAttribute("disabled");
}

function resetVars() {
    removeDisabled(startBtn);
    setDisabled(stopBtn);
    elapsedTime = 0;
    roundsCompleted++;
    timeLabel.innerHTML = formatTime(roundsCompleted * MAX_TIME);
}

function pad(num) {
    return num.toString().padStart(2, "0");
}

function formatTime(time) {
    const hours = Math.floor(time / HOUR);
    const minutes = Math.floor((time % HOUR) / 60);
    const seconds = time % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}


function calculateTimeFraction() {
    return (elapsedTime % HOUR) / MAX_TIME;
}

function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} ${FULL_DASH_ARRAY}`;
    timer.setAttribute("stroke-dasharray", circleDasharray);
}