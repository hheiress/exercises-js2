let myButtonChange = document.querySelector("#blueBtn");

myButtonChange.addEventListener("click", changeBackground);

function changeBackground(){
    let newPageElementBlue= document.querySelector(".jumbotron")
    newPageElementBlue.style.backgroundColor="#588fbd"; 

   let newBikeBlue= document.querySelector(".buttons > .btn-primary")
    newBikeBlue.style.backgroundColor="#ffa500";

    let newStyleVolunteer= document.querySelector(".buttons >.btn-secondary")
    newStyleVolunteer.style.backgroundColor = "black";
    newStyleVolunteer.style.color="white";

}

let mySecondChange = document.querySelector("#orangeBtn");
mySecondChange.addEventListener("click", changeBackground2);

function changeBackground2(){
    let newPageElementOrange= document.querySelector(".jumbotron")
    newPageElementOrange.style.backgroundColor="#f0ad4e"; 

   let newBikeOrange= document.querySelector("#orangeBtn")
    newBikeOrange.style.backgroundColor="#5751fd";

    let otherStyleVolunteer= document.querySelector(".buttons >.btn-secondary")
    otherStyleVolunteer.style.backgroundColor = "#31b0d5";
    otherStyleVolunteer.style.color="white";

}

let myThirdChange = document.querySelector("#greenBtn");
myThirdChange.addEventListener("click", changeBackground3);

function changeBackground3(){
    let newPageElementGreen= document.querySelector(".jumbotron")
    newPageElementGreen.style.backgroundColor="#87ca8a"; 

   let newBikeGreen= document.querySelector("#greenBtn")
    newBikeGreen.style.backgroundColor="black";

    let greenStyleVolunteer= document.querySelector(".buttons >.btn-secondary")
    greenStyleVolunteer.style.backgroundColor = "#31b0d5";
    greenStyleVolunteer.style.color="#8c9c08";

}


// PART 2
let registerNow=document.querySelector("form .btn-primary");
  registerNow.addEventListener("click",checkForm); 

    let checkEmail=document.querySelector("#exampleInputEmail1");
    let checkName =document.querySelector("#example-text-input");
    let checkInfo =document.querySelector("#exampleTextarea");
   
function checkForm(){
    let resultForm=0;
    if(checkEmail.value.length<1 || !checkEmail.value.includes("@")){
        checkEmail.style.backgroundColor = "red";
        resultForm=1;
    } 
    if (checkName.value.length<1){
        checkName.style.backgroundColor = "red";
        resultForm=1;
    }if (checkInfo.value.length<1){
         checkInfo.style.backgroundColor = "red";
         resultForm=1;  
        }
    if(resultForm===0){
        alert("Thank you for filling our form! ");
        checkEmail.value="";
        checkName.value="";
        checkInfo.value="";

        checkEmail.style.backgroundColor = "grey";
        checkName.style.backgroundColor = "grey";
        checkInfo.style.backgroundColor = "grey";
    }
}

