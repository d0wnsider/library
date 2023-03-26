const addButton = document.querySelector('.add');

let library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook() {
  addButton.addEventListener('click', () => {
    const inputTitle = prompt('Title: ');
    const inputAuthor = prompt('Author: ');
    const inputPages = prompt('Pages: ');
    const inputRead = prompt('Read: ');

    const book = new Book(inputTitle, inputAuthor, inputPages, inputRead);
    library.push(book);
    console.log(library);
  });
}

addBook();
