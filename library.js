const cardContainer = document.querySelector('.card-container');
const form = document.querySelector('.form');
const addButton = document.querySelector('.add-button');
const submit = document.querySelector('.submit');
const userTitle = document.querySelector('#title');
const userAuthor = document.querySelector('#author');
const userPages = document.querySelector('#pages');
const userRead = document.querySelector('#read');
const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // const book1 = new Book("Can't Hurt Me", 'David Goggins', '300', 'Yes');
  // const book2 = new Book('Atomic Habits', 'James Clear', '250', 'Yes');
  // const book3 = new Book('Meditations', 'Marcus Aurelius', '350', 'Yes');
  // library.push(book1, book2, book3);
}

function display() {
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

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    cardContainer.appendChild(card);
  });
}

function submitForm(e) {
  const titleValue = userTitle.value;
  const authorValue = userAuthor.value;
  const pagesValue = userPages.value;
  const readValue = userRead.value;
  const book = new Book(titleValue, authorValue, pagesValue, readValue);
  library.push(book);
  display();
  form.style.display = 'none';
  e.preventDefault();
}

addButton.addEventListener('click', function (e) {
  form.style.display = 'block';
});

submit.addEventListener('click', submitForm, false);

addBookToLibrary();
display();
