let secondsRemaining = 23;
let minutesRemaining = 8;
const minutes = Math.floor(secondsRemaining / 60);
const seconds = (secondsRemaining - (minutes - 60));
let intervalId = null;


document.querySelector('.start1').addEventListener('click', start30Secs)
document.querySelector('.start2').addEventListener('click', start90Secs)
document.querySelector('.reset').addEventListener('click', reset)


function start30Secs() {
  clearInterval(intervalId);
  secondsRemaining = 30;
  
  document.querySelector('.minutes').textContent = Object.values(Math.floor(minutes));
  document.querySelector('.seconds').textContent = (secondsRemaining - (minutes * 60));

  intervalId = setInterval(() => {
    secondsRemaining--;
    document.querySelector('.seconds').textContent = secondsRemaining;

    if (secondsRemaining <= 0) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 1000);
}

function start90Secs() {
  clearInterval(intervalId);
  secondsRemaining = 90;
  minutesRemaining = 1;
  
  document.querySelector('.minutes').textContent = Object.values(Math.floor(minutes));
  document.querySelector('.seconds').textContent = (secondsRemaining - (minutes * 60));

  intervalId = setInterval(() => {
    secondsRemaining--;
    document.querySelector('.seconds').textContent = secondsRemaining;

    if (secondsRemaining <= 0) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 1000);
}

function reset() {
  clearInterval(intervalId);
  intervalId = null;
  secondsRemaining = 0;
  
  document.querySelector('.seconds').textContent = '00';
  document.querySelector('.minutes').textContent = '00';
}
