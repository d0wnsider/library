const cardContainer = document.querySelector('.card-container');
const form = document.querySelector('.form');
const addButton = document.querySelector('.add-button');
const submit = document.querySelector('.submit');
const userTitle = document.querySelector('#title');
const userAuthor = document.querySelector('#author');
const userPages = document.querySelector('#pages');
const userRead = document.querySelector('#read');
const library = [];

function Book(title, author, pages, read, index) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = index;
}

function addBookToLibrary() {
  library.forEach((book) => {
    const card = document.createElement('div');
    card.classList = 'card';
    card.setAttribute('data-index', book.index + 1);

    const title = document.createElement('p');
    title.textContent = `Title: ${book.title}`;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    const read = document.createElement('p');
    read.textContent = `Read: ${book.read}`;

    const remove = document.createElement('button');
    remove.classList = 'remove';
    remove.textContent = 'X';

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(remove);
    cardContainer.appendChild(card);
  });
}
// how to remove current display before updating to the latest display?
function removeDisplay() {
  library.forEach((book) => {
    const card = document.querySelector('.card');
    card.remove();
  });
}

function submitForm(e) {
  removeDisplay();
  const titleValue = userTitle.value;
  const authorValue = userAuthor.value;
  const pagesValue = userPages.value;
  const readValue = userRead.value;
  const book = new Book(titleValue, authorValue, pagesValue, readValue);
  library.push(book);
  addBookToLibrary();
  form.style.display = 'none';
  e.preventDefault();
}

addButton.addEventListener('click', function (e) {
  form.style.display = 'block';
});

submit.addEventListener('click', submitForm, false);

// remove.addEventListener('click', () => {
//   // how to choose specific object when deleting?
//   if (book) library.splice(0, library);
// });

const book = new Book('Meditations', 'Marcus Aurelius', '500', 'Yes', 1);
library.push(book);
addBookToLibrary();
