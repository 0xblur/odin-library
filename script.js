const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const myLibrary = [];

// Book object definition.
class Book {

  //Constructor
  constructor(title, author = "", date = "", read = false) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.read = read;
  }
};

Book.prototype.toggleRead = function() {
  if (this.read) {
    this.read = false;
  } else {
    this.read = true;
  }
};

// Functions
function addBookToLibrary() {
  const newBook = new Book;
  const form = document.querySelector("form")
  newBook.title = form.title.value;
  newBook.author = form.author.value;
  newBook.date = form.date.value;
  newBook.read = form.read.checked;
  //TODO: Add form validation

  myLibrary.push(newBook)
};


function displayBooks() {
  const library = document.querySelector("#library")
  myLibrary.forEach((book) => {

    const card = document.createElement("div")
    card.classList.add("book-card")
    const cover = document.createElement("div")
    cover.classList.add("book-cover-box")

    card.innerHTML = `<h2>${book.name}</h2>
    <div class="book-detail-box">
      <ul>
        <li>Author: ${book.author}</li>
        <li>Published: ${book.date}</li>
        <li>${book.read ? "Read" : "Not Read Yet"}</li>
      </ul>
    </div>
    <div class="book-button-box">
      <button class="mark-read">Read</button>
      <button class="delete-book">Delete</button>
    </div>`
    const detail = document.createElement("div")
    detail.classList.add("book-detail-box")
    // let ul = document.createElement("ul")
    // let li = document.createElement("li")

    const buttons = document.createElement("div")
    buttons.classList.add("book-button-box")
    const markReadBtn = document.createElement("button")
    markReadBtn.classList.add("mark-read")
    const deleteBookBtn = document.createElement("button")
    deleteBookBtn.classList.add("delete-book")

    library.appendChild(card)
  });
}

// Event Listeners
// Open Dialog
const openDialogBtn = document.getElementById("open-dialog")
openDialogBtn.addEventListener("click", () => dialog.showModal())

// Close Dialog
const closeDialogBtn = document.querySelector("button#close-dialog")
closeDialogBtn.addEventListener("click", () => dialog.close())
