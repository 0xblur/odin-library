const dialog = document.querySelector("dialog");
const myLibrary = [
  { name: "name1", author: "author1", date: 1900, read: true },
  { name: "name2", author: "author2", date: 1950, read: false },
];

class Book {

  //Constructor
  constructor(title, author = "", date = "", read = false) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.read = read;
  }

};

function addBookToLibrary() {

}


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
