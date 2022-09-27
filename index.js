const bookForm = document.getElementById("add_book_form_container");
const addBookBtn = document.getElementById("add_new_book");

// Create library array
let userLibrary = [];

// Book constructor
function Book(author, pageCount, bookTitle) {
    this.author = author
    this.pageCount = pageCount
    this.bookTitle = bookTitle
}

// Add a book to library
function addBookToLibrary() {
   const userInput = document.getElementById("submit_btn").value;

   userLibrary.push(submit_btn);

   const cur_library = "";

   for(i = 0; i < userLibrary.length; i++) {
    cur_library = cur_library + userLibrary[i];
   }

   document.getElementById("book_card").textContent = cur_library;
   console.log(cur_library);
   console.log(userLibrary);
}

// Add a book form
function addNewBook() {
        if (bookForm.style.display === "none") {
            bookForm.style.display = "block";
        } else {
            bookForm.style.display = "none";
        }
    };

