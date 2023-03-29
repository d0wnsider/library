const form = document.querySelector('.form');
const addButton = document.querySelector('.add-button');
const submit = document.querySelector('.submit');

const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const userTitle = document.querySelector('#title').value;
  const userAuthor = document.querySelector('#author').value;
  const userPages = document.querySelector('#pages').value;
  const userRead = document.querySelector('#read').value;

  const book = new Book(userTitle, userAuthor, userPages, userRead);
  library.push(book);
}
// clear display first before looping again
function displayLibrary() {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.textContent = ``;

  library.forEach((book) => {
    const card = document.createElement('div');
    card.classList = 'card';

    const title = document.createElement('p');
    title.textContent = `Title: ${book.title}`;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    const read = document.createElement('p');
    read.textContent = `Read: ${book.read}`;

    const rem = document.createElement('button');
    rem.classList = 'remove-button';
    rem.textContent = `X`;
    rem.addEventListener('click', (e) => {
      console.log('1');
    });

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(rem);
    cardContainer.appendChild(card);
  });
}

addButton.addEventListener('click', (e) => {
  form.style.display = 'block';
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  displayLibrary();
  form.style.display = 'none';
});
