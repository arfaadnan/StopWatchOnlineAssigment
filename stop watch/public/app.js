let timer;           
let seconds = 0;     
let isRunning = false; 


function updateDisplay() {
    const display = document.getElementById("display");
    const formattedTime = new Date(seconds * 1000).toISOString().substr(11, 8); 
    display.textContent = formattedTime; 
}


function startTimer() {
    if (!isRunning) { 
        isRunning = true;
        timer = setInterval(() => {
            seconds++; 
            updateDisplay();
        }, 1000);
    }
}


function stopTimer() {
    clearInterval(timer); 
    isRunning = false; 
}


function resetTimer() {
    clearInterval(timer); 
    isRunning = false; 
    seconds = 0; 
    updateDisplay(); 
}


document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);


updateDisplay();
