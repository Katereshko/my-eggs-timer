const timer = 10; 
let amountTime = timer * 60;

const start = document.querySelector('#startCountdown');
start.addEventListener('click', calculateTime);
let timerID;
let a = 0;

function calculateTime(){
    
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(amountTime / 60);
    let seconds = amountTime%60;

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;
    a = a+0.1667;
    const percentage = document.querySelector('.percentage');
    percentage.style.width = a+'%';

    timerID = setTimeout(calculateTime, 1000);
    console.log(amountTime);

    if(amountTime < 0){
        amountTime = 0;
        stopTimer();
        timeoutSound();
    }
}

function stopTimer(){
    clearTimeout(timerID);
}

function timeoutSound() {
    const signal = document.querySelector("#signal");
    signal.play();
}
