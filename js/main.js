let timer = 0;
let countdown = 0;
let seconds = 0;
let minute = 0;

let secondOnes = countdown - (60 - countdown);
let secondTens = Math.floor(secondOnes / 10);
let minuteOnes = Math.floor(secondTens / 6);
let minuteTens = Math.floor(minuteOnes / 10);

let timeRemaining = 0;
let intervalId = null;

document.querySelector('#timer1').addEventListener('click', halfMin) // Timer1 = 30 Second Timer Temp Name

function halfMin() {
  clearInterval(intervalId);

  countdown = 30; // 1000 * 1 = Minute
  
  secondOnes = countdown - (60 - countdown);
  secondTens = Math.floor(secondOnes / 10);
  minuteOnes = Math.floor(secondTens / 6);
  minuteTens = Math.floor(minuteOnes / 10);

  // document.querySelector('.second').textContent = seconds;
  
  intervalId = setInterval(() => {
    countdown--;
    document.querySelector('.second-ones').textContent = (secondOnes);
    document.querySelector('.second-tens').textContent = (secondTens);
    document.querySelector('.minute-ones').textContent = (minuteOnes);
    document.querySelector('.minute-tens').textContent = (minuteTens);
    
    if (countdown <= 0) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 1000);
}


// intervalId = setInterval(() => {
//     secondsRemaining--;
//     document.querySelector('.seconds').textContent = secondsRemaining;

//     if (secondsRemaining <= 0) {
//       clearInterval(intervalId);
//       intervalId = null;
//     }
//   }, 1000);
// }



// ( 1000ms = 1 Second ) 
// ( 60 * 1000ms = 60,000 = 1 Minute ) 
// ( 60 / 60 = 1 )

// 

// Math.floor()

