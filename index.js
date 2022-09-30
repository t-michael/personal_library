// Create library array
let userLibrary = [];

const bookForm = document.getElementById("add_book_form_container");
const addBookBtn = document.getElementById("add_new_book");
const submitBook = document.getElementById("submit_btn");
submitBook.addEventListener("click", addBookToLibrary());
bookForm.addEventListener("click", addNewBook, false);


// Add a book to the library
function addBookToLibrary () {
    let newBook = {
        author: document.getElementById("book_author").value,
        title: document.getElementById("book_title").value,
        pageCount: document.getElementById("page_count").value,
        recYes: document.getElementById("rec_yes").value,
        recNo: document.getElementById("rec_no").value
    }
    userLibrary.push(newBook);
}

// Add a book form
function addNewBook() {
    if (bookForm.style.display === "none") {
        bookForm.style.display = "block";
    } else {
        bookForm.style.display = "none";
    }
};


// Book constructor
function Book(author, pageCount, bookTitle) {
    this.author = author
    this.pageCount = pageCount
    this.bookTitle = bookTitle
}

console.log(userLibrary);