const FORM = document.querySelector("form");
const dialog = document.querySelector("dialog");
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
}

Book.prototype.toggleRead = function () {
	if (this.read) {
		this.read = false;
	} else {
		this.read = true;
	}
};

// Functions
function addBookToLibrary() {
	const newBook = new Book();
	newBook.title = FORM.title.value;
	newBook.author = FORM.author.value;
	newBook.date = FORM.date.value;
	newBook.read = FORM.read.checked;

	myLibrary.push(newBook);
}

function displayBooks() {
	const library = document.querySelector("#library");
	library.innerHTML = "";
	myLibrary.forEach((book, i) => {
		const card = document.createElement("div");
		card.classList.add("book-card");
		card.innerHTML = `
    <h2>${book.title}</h2>
    <div class="book-detail-box">
      <ul>
        <li hidden>ID: ${i}</li>
        <li>Author: ${book.author}</li
        <li>Published: ${book.date}</li>
        <li>${book.read ? "Read" : "Not Read Yet"}</li>
      </ul>
    </div>
    <div class="book-button-box">
      <button class="toggle-read book-${i}">${
				book.read ? "Read" : "Not Read Yet"
			}</button>
      <button class="delete-book book-${i}">Delete</button>
    </div>
    `;

		library.appendChild(card);
	});

	// Toggle Read/Unread Status Btn
	const toggleReadBtns = document.querySelectorAll("button.toggle-read");
	toggleReadBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const id = Number(e.target.classList[1].split("-")[1]);
			myLibrary[id].toggleRead();
			displayBooks();
		});
	});

	// Delete Book Btn
	const deleteBookBtns = document.querySelectorAll("button.delete-book");
	deleteBookBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const id = Number(e.target.classList[1].split("-")[1]);
			myLibrary.splice(id, 1);
			displayBooks();
		});
	});
}

// Event Listeners
// Open Dialog Btn
const openDialogBtn = document.getElementById("open-dialog");
openDialogBtn.addEventListener("click", () => dialog.showModal());

// Close Dialog Btn
const closeDialogBtn = document.querySelector("button#close-dialog");
closeDialogBtn.addEventListener("click", (e) => {
	e.preventDefault();
	dialog.close();
});

// Add Book Btn
//TODO: Add keyboard shortcuts.
const addBookBtn = document.querySelector("button#add-book");
addBookBtn.addEventListener("click", (e) => {
	e.preventDefault();
	addBookToLibrary();
	form.reset();
	dialog.close();
	displayBooks();
});
