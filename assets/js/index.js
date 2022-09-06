const bookForm = document.getElementById("add_book_form_container");
const addBookBtn = document.getElementById("add_new_book");

// Create library array
let userLibrary = [];

// Book Constructor
function Book(author, pageCount, bookTitle) {
}

function addNewBook() {
        if (bookForm.style.display === "none") {
            bookForm.style.display = "block";
        } else {
            bookForm.style.display = "none";
        }
    };
