const timer= 5;
let amountTime = timer * 60;


function calculateTime(){
    let countdown = document.querySelector("#countdown");
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime % 60;
    if(seconds < 10){
        seconds = "0"+ seconds;
    }
    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;
    if(amountTime < 0){
        amountTime=0;
        clearInterval(time);
    }
}
let time = setInterval(calculateTime, 1000);