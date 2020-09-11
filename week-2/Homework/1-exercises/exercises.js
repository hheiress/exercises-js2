/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach(function(item){
    let contentH1 = document.createElement("h1");
    content.appendChild(contentH1);
    contentH1.innerText=item.name;
    
    let contentH2 = document.createElement("h2")
    content.appendChild(contentH2);
    contentH2.innerText=item.job;
})}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let content = document.querySelector("#content");

  let ulList = document.createElement("ul");
  content.appendChild(ulList);

  shopping.forEach(function(item){
    let shoppingList = document.createElement("li");
    shoppingList.innerText= item;
    ulList.appendChild(shoppingList);})
  
}
  //Write your code in here


/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
 let content = document.querySelector("#content");

 let firstInfoAbout=document.createElement("p");
    content.appendChild(firstInfoAbout);
 let listOfBooks = document.createElement("ul");
    firstInfoAbout.appendChild(listOfBooks);
   
let counter = 0;
  books.forEach(function(item){
    let liBook = document.createElement("li");
    
    listOfBooks.appendChild(liBook);
    liBook.innerText = item.title + " - " + item.author;
    if(item.alreadyRead===true){
      liBook.style.backgroundColor="red";
    }else if(item.alreadyRead===false){
      liBook.style.backgroundColor="green";
    }
   
  let image = document.createElement("img");
   image.setAttribute("src",links[counter]);
   counter++;
   liBook.appendChild(image);
})}

let links=["/week-2/Homework/1-exercises/image/im1.jpeg",
"/week-2/Homework/1-exercises/image/im2.jpeg",
"/week-2/Homework/1-exercises/image/im3.jpeg"
]





//"week-2/Homework/1-exercises/9780307476708.jpeg"]
//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
