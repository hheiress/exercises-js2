function setAlarm() {
  
  let alarmTime = document.querySelector("#alarmSet").valueAsNumber;
  
  let text = document.querySelector("#timeRemaining");
  let currentTime=alarmTime;
 let changeTime = setInterval(
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

function pauseAlarm(){
  //let bodyColorChange=
  let bodyColor2 = document.querySelector("body");
        bodyColor2.style.backgroundColor="white";
}
//document.addEventListener("DOMContentLoaded", function(){
 // let pauseButton =document.querySelector(".pause");
// pauseButton.addEventListener("click", alert("hi"));
  
//})
//console.log(pauseButton);
//function pauseAlarm(event){
 // alarm("event");
//    if(event.target.classList.contains("paused")!==true){
//  clearInterval(changeTime)
 // event.target.classList.add("paused")
 // let textPaused=text.innerText;
//}}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
