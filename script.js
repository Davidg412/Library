//Declare empty array for library
let myLibrary = [];

//#1 Constructor for Book Objects 
function Book(Title, Author, Pages, Status) {
    this.Title = Title,
    this.Author = Author,
    this.Pages = Pages,
    this.Status = Status
}

//#2 Function for storing user input into a new book entry into the library array 
function addBookToLibrary(Title, Author, Pages, Status) {
    let book = new Book(Title, Author, Pages, Status);
    myLibrary.push(book);

}

//Function to stop the Add Book (submit) button from sending to a server
function submitStop(event) {
    event.preventDefault();
}

//#3 Function to display library array to an info card
function displayBooksOnPage() {
    const books = document.querySelector(".books");
    const submit = document.querySelector(".submit");
    submit.addEventListener("click", submitStop, false);

    //Loop over the entire myLibrary array and display to the info card
    myLibrary.forEach (myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card); //At this point we have created a child div to add in the DOM
        for (let key in myLibrary) { //#4
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);//At this point we have gone through each key in the object and created a new p element to display the info
        }
        const delButton = document.createElement("button");
        delButton.textContent = "Remove";
        delButton.classList.add("delButton");
        card.appendChild(delButton);
    })
}


//Testing the function by calling it
addBookToLibrary("The Hobbit", "J.R.R. Token", "295 pages", "Read");
addBookToLibrary("The Hobbit", "J.R.R. Token", "295 pages", "Read");
addBookToLibrary("The Hobbit", "J.R.R. Token", "295 pages", "Read");
addBookToLibrary("The Hobbit", "J.R.R. Token", "295 pages", "Read");
addBookToLibrary("One More Time", "JW Scott", "500 pages", "Read");
addBookToLibrary("The Hobbit", "J.R.R. Token", "295 pages", "Read");
addBookToLibrary("The Hobbit", "J.R.R. Token", "295 pages", "Read");
addBookToLibrary("The Hobbit", "J.R.R. Token", "295 pages", "Read");
addBookToLibrary("The Hobbit", "J.R.R. Token", "295 pages", "Read");
addBookToLibrary("The Hobbit", "J.R.R. Token", "295 pages", "Read");
addBookToLibrary("The Hobbit", "J.R.R. Token", "295 pages", "Read");
addBookToLibrary("The Hobbit", "J.R.R. Token", "295 pages", "Read");

displayBooksOnPage();














//Attaining the user's input from the input fields
/*const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const pages = document.getElementById('pages').value;
const read = document.getElementById('read').value;
const notRead = document.getElementById('notRead').value;
*/
