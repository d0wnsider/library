const form = document.querySelector('.form');
const addButton = document.querySelector('.add-button');
const submit = document.querySelector('.submit');
const body = document.querySelector('body');

const library = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  const userTitle = document.querySelector('#title').value;
  const userAuthor = document.querySelector('#author').value;
  const userPages = document.querySelector('#pages').value;
  const userRead = document.querySelector('#read').checked;

  const book = new Book(userTitle, userAuthor, userPages, userRead);
  library.push(book);
}
// clear display first before looping again
function displayLibrary() {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.textContent = ``;

  library.forEach((book, index) => {
    const card = document.createElement('div');
    card.classList = 'card';
    card.setAttribute('data-index', index);

    const title = document.createElement('p');
    title.textContent = `Title: ${book.title}`;
    title.classList = 'bold';

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;
    author.classList = 'bold';

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;
    pages.classList = 'bold';

    const read = document.createElement('p');
    if (book.read === true) {
      read.textContent = `Read`;
      read.classList.add('green');
    } else {
      read.classList.add('red');
      read.textContent = `Not Read`;
    }

    const rem = document.createElement('button');
    rem.classList = 'remove-button';
    rem.textContent = `X`;
    rem.addEventListener('click', (e) => {
      const parent = e.target.parentNode;
      parent.remove(parent);
      library.splice(index, 1);
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
  body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  form.style.transform = 'translate(0, 200px)';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  displayLibrary();
  form.style.display = 'none';
  body.style.backgroundColor = '';
});
