/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
 let pElements = document.querySelectorAll('p');
 console.log(pElements);
 let firstDiv =document.querySelector("div");
 console.log(firstDiv);
 let eleJumbotron = document.querySelector("#jumbotron-text");
 console.log(eleJumbotron);
 let pSearch = document.querySelectorAll(".primary-content p");
 console.log(pSearch);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click", alertGreeting);

function alertGreeting() {
    alert("Thanks for visiting Bikes for Refugees!");
  }

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let myButtonColour = document.querySelector("#bgrChangeBtn");
myButtonColour.addEventListener("click", changeColour);
function changeColour() {
    let pageElement= document.querySelector('body')
    pageElement.style.backgroundColor="green";
  }

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
let myButtonChange = document.querySelector("#addTextBtn");
// here we're just creating it, element is not visible yet
myButtonChange.addEventListener("click", addSomeText);
function addSomeText(){
    let newPageElement= document.querySelector(".primary-content > heading-underline")
    let newP= document.createElement('p')
    newPageElement.appendChild(newP);   
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let makeTextBigger= document.querySelector("#largerLinksBtn");
makeTextBigger.addEventListener("click", changeText);
function changeText(){
  let pageElementChange= document.querySelector('a');
    pageElementChange.innerText.style.fontSize="100px";
  }



/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

