const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");
const display = document.getElementById("time-display");
const hands = document.querySelectorAll(".hand");

function uploadTime(){
    //for the text
    const currentHours = new Date().getHours();
    let currentMins = new Date().getMinutes();
    let currentSecs = new Date().getSeconds();

    if (currentMins < 10) {
        currentMins =`0${currentMins}`;
    }
    else if (currentSecs < 10) {
        currentSecs =`0${currentSecs}`;
    }

    const currentTime = `${currentHours}:${currentMins}:${currentSecs}`;
    display.textContent = currentTime;



    //for the clock hands
    const secsDegrees = ((currentSecs / 60) * 360) + 90;
    const minsDegrees = ((currentMins / 60) * 360) + 90;
    const hoursDegrees = ((currentHours / 12) * 360) + 90;
    hours.style.transform = `rotate(${hoursDegrees}deg)`;
    mins.style.transform = `rotate(${minsDegrees}deg)`;
    secs.style.transform = `rotate(${secsDegrees}deg)`;

    if (new Date().getSeconds() === 0 || new Date().getMinutes() === 0 || new Date().getHours() === 0) {
        hands.forEach(hand => hand.style.transitionDuration = "0s");
    } else {
        hands.forEach(hand => hand.style.transitionDuration = "0.4s");
    }

    
}

uploadTime();
setInterval(uploadTime, 1000);