const bookForm = document.getElementById("add_book_form_container");
const addBookBtn = document.getElementById("add_new_book");

// Create library array
let userLibrary = [];

// Book Constructor
function Book(author, pageCount, bookTitle) {
}

// Add a Book to Library
function addBookToLibrary() {
   
}

// Add a Book Form
function addNewBook() {
        if (bookForm.style.display === "none") {
            bookForm.style.display = "block";
        } else {
            bookForm.style.display = "none";
        }
    };

