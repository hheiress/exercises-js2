// Write your code here
let pictures = ["img/kitten1.jpg","img/kitten2.jpg","img/kitten3.jpg","img/kitten4.jpg"];
let getBtnForward = document.querySelector("#forward");
getBtnForward.addEventListener("click", getImageForward);

let getImage=document.querySelector("#slidePic");
getImage.setAttribute("src", pictures[0])

let currentEllement = 0;
function getImageForward(){ 
   currentEllement = currentEllement+1;
   if(currentEllement>pictures.length-1){
    currentEllement=0;
}
    getImage.setAttribute("src" , pictures[currentEllement])
 }    
let getBtnBack = document.querySelector("#back");
getBtnBack.addEventListener("click", getImageBack);

function getImageBack(){
    currentEllement = currentEllement-1;
    if(currentEllement<0){
        currentEllement=pictures.length-1;
    }
    getImage.setAttribute("src" , pictures[currentEllement])
    
}
let getBtnAutoBack= document.querySelector("#auto-backwards")
getBtnAutoBack.addEventListener("click", getAutoImageBack)
let interval;
function getAutoImageBack(){
    interval=setInterval(
        getImageBack,1000
    )
}
let getBtnAutoForward= document.querySelector("#auto-forward")
getBtnAutoForward.addEventListener("click",getAutoImageForward)
function getAutoImageForward(){
   interval= setInterval(
        getImageForward,1000
    )
}
let getBtnStop= document.querySelector("#stop");
getBtnStop.addEventListener("click", getStop)
 function getStop(){
     clearInterval(interval)
 }
