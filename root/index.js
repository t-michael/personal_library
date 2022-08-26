// Create library array
let userLibrary = [];

// Book Constructor
function Book(author, pageCount, bookTitle) {

}

function addNewBook(bookForm) {
    const addBookBtn = document.getElementById("add_new_book");
    addBookBtn.addEventListener("click", () => {
        const bookForm = document.getElementById("add_book_form_container");

        if (bookForm.style.display === "none") {
            bookForm.style.display = "block";
        } else {
            bookForm.style.display = "none";
        }
    });
}