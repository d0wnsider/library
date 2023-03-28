const cardContainer = document.querySelector('.card-container');
const form = document.querySelector('.form');
const addButton = document.querySelector('.add-button');

const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const book1 = new Book("Can't Hurt Me", 'David Goggins', '300', 'Yes');
  const book2 = new Book('Atomic Habits', 'James Clear', '250', 'Yes');
  const book3 = new Book('Meditations', 'Marcus Aurelius', '350', 'Yes');
  library.push(book1, book2, book3);
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

addButton.addEventListener('click', function (e) {
  form.style.display = 'block';
});

addBookToLibrary();
display();
