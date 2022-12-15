//Declare empty array for library
let myLibrary = [];

//#1 Constructor for Book Objects 
function Book(Title, Author, Pages, Read) {
    this.Title = Title,
    this.Author = Author,
    this.Pages = Pages,
    this.Read = Read
}

//#2 Function for storing user input into a new book entry into the library array 
function addBookToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    displayBooksOnPage();
}


//#3 Function to display library array to an info card
function displayBooksOnPage() {
    const books = document.querySelector(".books");


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


//Start event listener/add new user input to the array
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData);


//Transforms the user's input of the form to usable variables in JS
function intakeFormData() {
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    // .checked will equal "true" if the box is checked and "false" if it is not
    let Read = document.getElementById("checkbox").checked;


    //Break out of form if it's incomplete or not valid
    if ((Title == "") || (Author == "") || (Pages == "")) {
        return;
    }

    //Call function to input the book data to the array
    addBookToLibrary(Title, Author, Pages, Read);

    //Reset the form after submission
    document.getElementById("add-book").reset();
}




//Testing the function by calling it
//addBookToLibrary("The Hobbit", "J.R.R. Token", "295 pages", "Read");