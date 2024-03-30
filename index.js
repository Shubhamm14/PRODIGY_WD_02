let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStopButton').innerText = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStopButton').innerText = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    document.getElementById('startStopButton').innerText = 'Start';
    document.querySelector('.display').innerText = '00:00:00';
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('laps').innerHTML = '';
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    let displayTime = 
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);
    document.querySelector('.display').innerText = displayTime;
}

function lap() {
    if (isRunning) {
        let lapTime = document.querySelector('.display').innerText;
        let lapList = document.getElementById('laps');
        let li = document.createElement('li');
        li.innerText = lapTime;
        lapList.appendChild(li);
    }
}
