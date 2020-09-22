let changeTime;
function setAlarm() {
  
  let alarmTime = document.querySelector("#alarmSet").valueAsNumber;
  
  let text = document.querySelector("#timeRemaining");
  let currentTime=alarmTime;
  changeTime=setInterval(
    function(num){
      if(currentTime===0){
        clearInterval(changeTime)
        let bodyColor = document.querySelector("body");
        bodyColor.style.backgroundColor="red";
        playAlarm();
      }
      if(currentTime>=0){
      text.innerText="Time Remaining: 00:" + currentTime;
      console.log(currentTime);
      
      }
      currentTime=currentTime-1;
      
      
    },1000,alarmTime
  );

}

let pauseButton =document.querySelector("#pause");
 pauseButton.addEventListener("click",pauseAlarm);
function pauseAlarm(){
  clearInterval(changeTime)
  
}

  

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function stopAlarm() {
  audio.pause();
}

window.onload = setup;
