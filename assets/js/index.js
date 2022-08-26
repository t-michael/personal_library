// Create library array
let userLibrary = [];

// Book Constructor
function Book(author, pageCount, bookTitle, ) {

}

function addNewBook(ele) {
    const displayBookInput = document.getElementById("#add_new_book");
    if (displayBookInput.style.display == "block") {
        displayBookInput.style.display = "none";

        document.getElementById(ele.id).value = "Show Input";
    } else {
        displayBookInput.style.display = "block";
        document.getElementById(ele.id).value = "Hide Input";
    }
}