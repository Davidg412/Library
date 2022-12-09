let myLibrary = []

//Constructor for Book Objects
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read, 
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read} yet`
    }
}


function addBookToLibrary() {

}

addBookToLibrary.prototype = Object.create(Book.prototype)


/* const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read")
theHobbit.info()
console.log(theHobbit.info()); */


