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

    //Prevents submitting a new book from printing all previous array items, + the new one
    const allCards = document.querySelectorAll(".card");
    for (let i = 0; i < allCards.length; i++) {
        allCards[i].remove();
    }

    //Loop over the entire myLibrary array and display to the info card
    let index = 0;
    myLibrary.forEach (myLibrarys => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card); //At this point we have created a child div to add in the DOM
        for (let key in myLibrarys) { //#4
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrarys[key]}`);
            card.appendChild(para);//At this point we have gone through each key in the object and created a new p element to display the info
        }
        //Create Read Status toggle button
        const toggle = document.createElement("button");
        toggle.textContent = "Change Read Status";
        toggle.classList.add("toggle")
        //Link data attribute so we can identify which element/item to change
        toggle.dataset.linkedArray = index;
        card.appendChild(toggle);

        //Toggle Read Status
        toggle.addEventListener("click", toggleStatus);

        //Function to toggle Read status
        function toggleStatus() {
            let bookToToggle = toggle.dataset.linkedArray;
            Book.prototype = Object.create(Book.prototype);
            const toggleBook = new Book();

            //Check the value so we can change to the opposite
            if ((myLibrary[parseInt(bookToToggle)].Read) == "Yes") {
                toggleBook.Read = "No";
                myLibrary[parseInt(bookToToggle)].Read = toggleBook.Read;
            } else if ((myLibrary[parseInt(bookToToggle)].Read) == "No") {
                toggleBook.Read = "Yes";
                myLibrary[parseInt(bookToToggle)].Read = toggleBook.Read;
            }
            displayBooksOnPage();
        }

        //Create Remove Button
        const remButton = document.createElement("button");
        remButton.textContent = "Remove";
        remButton.classList.add("remButton");
        //Link data attribute of remove button to array and the card
       remButton.dataset.linkedArray = index;
        card.appendChild(remButton);

        //Run function when Remove button is clicked
        remButton.addEventListener("click", removeBookFromLibrary);

        //Function to remove book from the Library
        function removeBookFromLibrary() {
            let bookToRemove = remButton.dataset.linkedArray;
            myLibrary.splice(parseInt(bookToRemove), 1);
            card.remove();
            displayBooksOnPage();
        }
    index++;
    })
}



//#4 Transforms the user's input of the form to usable variables in JS
function intakeFormData() {
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    // .checked will equal "true" if the box is checked and "false" if it is not
    let Read = document.getElementById("Read").value;
    //Break out of form if it's incomplete or not valid
    if ((Title == "") || (Author == "") || (Pages == "")) {
        return;
    }
    //Call function to input the book data to the array
    addBookToLibrary(Title, Author, Pages, Read);
    //Reset the form after submission
    document.getElementById("add-book").reset();
}



//Start event listener/add new user input to the array (When the code actually does something)
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData);