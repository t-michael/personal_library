const bookForm = document.getElementById("add_book_form_container");
const addBookBtn = document.getElementById("add_new_book");

// Create library array
let userLibrary = [];

const addBookToLibrary = (ev) => {
    ev.preventDefault();
    let newBook = {
        author: document.getElementById("#author").value,
        title: document.getElementById("#title").value,
        pageCount: document.getElementById("#page_count").value,
        recYes: document.getElementById("#rec_yes").value,
        recNo: document.getElementById("#rec_no").value
    }
    userLibrary.push(newBook);

    console.log("added", {userLibrary});
}

// Book constructor
function Book(author, pageCount, bookTitle) {
    this.author = author
    this.pageCount = pageCount
    this.bookTitle = bookTitle
}

// Add a book to library
// function addBookToLibrary() {

// }

// Add a book form
function addNewBook() {
        if (bookForm.style.display === "none") {
            bookForm.style.display = "block";
        } else {
            bookForm.style.display = "none";
        }
    };

