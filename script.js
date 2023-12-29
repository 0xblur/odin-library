// Books to fill the library with just for visualization
const book1 = {
  name: "name1",
  author: "author1",
  date: 1900,
  read: true,
};

const book2 = {
  name: "name2",
  author: "author2",
  date: 1950,
  read: true,
};

const book3 = {
  name: "name3",
  author: "author3",
  date: 2010,
  read: false,
};


const myLibrary = [book1, book2, book3];

function Book(name, author, date, read) {

  //Constructor
  self.name = name;
  self.author = author;
  self.date = date;
  self.read = read;

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
